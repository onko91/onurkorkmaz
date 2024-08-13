## Personal website
Personal website made with Vue.js, Bulma and Fontawesome.

### For development

1. Run npm install --save-dev
2. Run npm run dev

### Deployment to github pages

1. Create branch gh-pages
2. Run npm run deploy

### Docker

```
docker build -t onko/website .
```

```
docker run -it -p 8080:80 --rm --name onko-website onko/website
```