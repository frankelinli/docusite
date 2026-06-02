# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

This project is deployed by GitHub Actions.

```bash
git push origin main
```

The workflow will:

- install dependencies with `npm ci`
- build the site with `npm run build`
- upload the generated `build` contents to `/www/wwwroot/haoyelaiga.com/docusite`

Required GitHub repository secrets:

- `SERVER_HOST`
- `SERVER_PORT`
- `SERVER_USERNAME`
- `SERVER_SSH_KEY`
