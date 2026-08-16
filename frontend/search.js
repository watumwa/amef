const searchableRoutes = [
  "/",
  "/about/",
  "/our-work/",
  "/amhs/",
  "/sifa-skilling-centre/",
  "/get-involved/",
  "/sponsor-a-child/",
  "/careers/",
  "/contact/",
];

const searchForm = document.querySelector("[data-search-form]");
const searchInput = document.querySelector("[data-search-input]");
const resultsTarget = document.querySelector("[data-search-results]");
const headingTarget = document.querySelector("[data-search-heading]");
const statusTarget = document.querySelector("[data-search-status]");

const cleanText = (value = "") => value.replace(/\s+/g, " ").trim();
const normalise = (value = "") => cleanText(value).toLocaleLowerCase();

function countMatches(text, needle) {
  if (!needle) return 0;
  let count = 0;
  let position = 0;
  while ((position = text.indexOf(needle, position)) !== -1) {
    count += 1;
    position += needle.length;
  }
  return count;
}

function makeSnippet(text, terms) {
  const lowerText = text.toLocaleLowerCase();
  const positions = terms.map((term) => lowerText.indexOf(term)).filter((position) => position >= 0);
  const matchPosition = positions.length ? Math.min(...positions) : 0;
  let start = Math.max(0, matchPosition - 85);
  let end = Math.min(text.length, matchPosition + 190);

  if (start > 0) {
    const nextSpace = text.indexOf(" ", start);
    start = nextSpace >= 0 && nextSpace < matchPosition ? nextSpace + 1 : start;
  }
  if (end < text.length) {
    const previousSpace = text.lastIndexOf(" ", end);
    end = previousSpace > matchPosition ? previousSpace : end;
  }

  return `${start > 0 ? "…" : ""}${text.slice(start, end)}${end < text.length ? "…" : ""}`;
}

async function readPage(url) {
  const response = await fetch(url, { headers: { Accept: "text/html" } });
  if (!response.ok) throw new Error(`Unable to search ${url}`);

  const documentText = await response.text();
  const pageDocument = new DOMParser().parseFromString(documentText, "text/html");
  const content = pageDocument.querySelector("main")?.cloneNode(true);
  content?.querySelectorAll("script, style, svg, form, dialog").forEach((element) => element.remove());

  return {
    url,
    title: cleanText(pageDocument.querySelector("h1")?.textContent || pageDocument.title.split("—")[0] || "AMEF"),
    description: cleanText(pageDocument.querySelector('meta[name="description"]')?.content || ""),
    text: cleanText(content?.textContent || ""),
  };
}

function rankPage(page, phrase, terms) {
  const title = normalise(page.title);
  const description = normalise(page.description);
  const body = normalise(page.text);
  const searchableText = `${title} ${description} ${body}`;

  if (!terms.every((term) => searchableText.includes(term))) return null;

  const score =
    countMatches(title, phrase) * 80 +
    countMatches(description, phrase) * 35 +
    countMatches(body, phrase) * 12 +
    terms.reduce((total, term) => total + countMatches(title, term) * 18 + countMatches(description, term) * 8 + Math.min(countMatches(body, term), 12), 0);

  return { ...page, score, snippet: makeSnippet(page.text, [phrase, ...terms]) };
}

function renderResults(results, query) {
  resultsTarget.replaceChildren();
  headingTarget.textContent = `Results for “${query}”`;

  if (!results.length) {
    statusTarget.textContent = `No pages matched “${query}”.`;
    const emptyState = document.createElement("div");
    emptyState.className = "search-empty";
    const title = document.createElement("h3");
    title.textContent = "No results found.";
    const copy = document.createElement("p");
    copy.textContent = "Check the spelling, try a broader term, or contact AMEF for help finding the information you need.";
    const link = document.createElement("a");
    link.className = "button button--maroon";
    link.href = "/contact/";
    link.textContent = "Contact AMEF";
    emptyState.append(title, copy, link);
    resultsTarget.append(emptyState);
    return;
  }

  statusTarget.textContent = `${results.length} ${results.length === 1 ? "page" : "pages"} found.`;
  results.forEach((result) => {
    const article = document.createElement("article");
    article.className = "search-result-card";
    const link = document.createElement("a");
    link.href = result.url;
    const title = document.createElement("h3");
    title.textContent = result.title;
    const path = document.createElement("span");
    path.textContent = result.url;
    const snippet = document.createElement("p");
    snippet.textContent = result.snippet || result.description;
    const action = document.createElement("strong");
    action.textContent = "View page →";
    link.append(title, path, snippet, action);
    article.append(link);
    resultsTarget.append(article);
  });
}

async function runSearch(query) {
  const phrase = normalise(query).slice(0, 100);
  const terms = [...new Set(phrase.split(" ").filter((term) => term.length > 1))];

  if (!phrase || !terms.length) {
    headingTarget.textContent = "Search the site";
    statusTarget.textContent = "Enter a word or phrase to begin.";
    resultsTarget.replaceChildren();
    return;
  }

  headingTarget.textContent = `Searching for “${query}”…`;
  statusTarget.textContent = "Searching published AMEF pages…";

  const settledPages = await Promise.allSettled(searchableRoutes.map(readPage));
  const results = settledPages
    .filter((result) => result.status === "fulfilled")
    .map((result) => rankPage(result.value, phrase, terms))
    .filter(Boolean)
    .sort((first, second) => second.score - first.score);

  renderResults(results, query);
}

const query = cleanText(new URLSearchParams(window.location.search).get("q") || "").slice(0, 100);
if (searchInput) searchInput.value = query;
document.querySelectorAll('.topbar__search input[name="q"]').forEach((input) => { input.value = query; });

searchForm?.addEventListener("submit", (event) => {
  if (!cleanText(searchInput.value)) {
    event.preventDefault();
    searchInput.focus();
    statusTarget.textContent = "Enter a word or phrase to search.";
  }
});

runSearch(query).catch(() => {
  headingTarget.textContent = "Search unavailable";
  statusTarget.textContent = "The site could not be searched right now. Please try again or contact AMEF.";
});
