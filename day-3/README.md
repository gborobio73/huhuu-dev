# Huhuu-dev day 3

## Astro Build

<https://astro.build/>

### Install Astro Build

Inside `baseline` folder and run

```shell
npm create astro@latest
```

Use these answers:

```shell
? Where would you like to create your new project? › huhuu-dev

✔ How would you like to setup your new project? › a few best practices (recommended)

✔ Would you like to install npm dependencies? (recommended) … yes

✔ Would you like to initialize a new git repository? (optional) … no

✔ How would you like to setup TypeScript? › Strict
```

An Astro project has been created in `baseline/huhuu-dev`

Install VSCode Astro plug-in

Check [Readme](./result/huhuu-dev/README.md) for more

### Run Astro

In `huhuu-dev` run

```shell
npm run dev
```

### Markdown files

Markdown format <https://daringfireball.net/projects/markdown/>

Create a folder `news` under `pages` folder. Then create a file with name `news-20221201.md` and copy this

```md
---
title: Editorial news
---
##### Oct 29 3 min read

# Editorial 10/2022

In English:

After an unfortunately inactive spring and early autumn, it is finally time for Huhuu to make its comeback! After last summer our team has returned to work and is cooking up new content for our readers. The dynamic of our group is slightly different from what it was before: last year’s abis have now graduated and therefore also moved on from Huhuu. Luckily we’ve had some new members join us and will still gladly be taking in people along the way. With the changes in our group, our old editors in chief will also be replaced and from now on, we are taking the lead!

It probably isn't styled much, but Markdown does support:
- **bold** and _italics._
- lists
- [links](https://astro.build)
- and more!
```

Go to <http://localhost:3000/news/news-20221201> and see the news.

### Layouts

Create a `NewsLayout.astro` under layouts folder and copy this.

```html
---
export interface Props {
  title: string;
}

const { frontmatter } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />
    <title>{frontmatter.title}</title>
  </head>
  <body>
    <slot />
  </body>
  <style is:global></style>
</html>

```

Add the layout to the `news-20221201.md`

```shell
---
layout: ../../layouts/NewsLayout.astro
title: Editorial news
---
```

Refresh the browser and see changes.

Add some styling. Replace layout's `<style is:global></style>` by

```html
<style is:global>
  html {
    font-family: system-ui, sans-serif;
    background-color: black;
    color: white;
  }
  h1 {
    color: red;
  }
</style>
```

Refresh the browser and see changes.

Add author and date to the `news-20221201.md` file in the header section

```shell
---
title: Hello, World
author: "Gonzalo"
date: "01 Dec 2022"
---
```

Add the author and date to the `NewsLayout.astro`

Add it first to the props

```html
---
export interface Props {
  title: string;
  author: string;
  date: string;
}

const { frontmatter } = Astro.props;
---
```

Then add it to the layout

```html
<body>
  <span>{frontmatter.date}</span> by <span>{frontmatter.author}</span>
  <slot />
</body>
```

Refresh the browser and see changes.

### More about Markdown

<https://docs.astro.build/en/guides/markdown-content/>


### Create your own blog tutorial

<https://docs.astro.build/en/tutorial/0-introduction/>
