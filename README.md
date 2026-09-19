# AMEF website

The new multi-page Asaba Memorial Education Foundation website lives in [`frontend/`](./frontend).

```bash
cd frontend
npm install
npm run dev
```

See [`frontend/README.md`](./frontend/README.md) for production and content handoff notes.

## Deploying to Vercel

The repository-level [`vercel.json`](./vercel.json) tells Vercel that this is a Vite project located in `frontend/`. It installs from `frontend/package-lock.json`, builds the site, and publishes `frontend/dist`.

After committing and pushing the website files, Vercel should redeploy automatically. The project can keep its Root Directory at the repository root because the build paths are configured explicitly. If the Vercel project instead uses `frontend` as its Root Directory, [`frontend/vercel.json`](./frontend/vercel.json) supplies the equivalent directory-local commands.
