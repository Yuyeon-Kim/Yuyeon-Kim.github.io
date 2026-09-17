# Yuyeon Kim — Portfolio

Data-driven portfolio for AI research, data science, robotics, and semiconductor AI roles.

## Structure

- `src/data/portfolio.ts`: single source of truth for projects, publications, experience, skills, education, awards, and certifications
- `src/pages/`: Astro routes and generated project case studies
- `public/images/`: publication and project visuals used with permission
- `.github/workflows/deploy.yml`: GitHub Pages deployment

Recruiter views are selected with query parameters:

- `?view=research`
- `?view=data`
- `?view=semiconductor`
- `?view=robotics`

## Local development

```bash
npm install
npm run dev
```

Build with:

```bash
npm run build
```
