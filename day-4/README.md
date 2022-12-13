# Day 4

## Astro tutorial

<https://docs.astro.build/en/tutorial/0-introduction/>

## Tailwind CSS

Tailwind CSS is a utility-first CSS framework: it has classes that we can use to style our web page <https://tailwindcss.com/>

Integration with Astro <https://docs.astro.build/en/guides/integrations-guide/tailwind/>

Use day-3 web page and style it using tailwindcss!

So, here's my suggestion on how to integrate tailwind:

1. Do not apply base styles. Change `astro.config.mjs` to this

    ```javascript
    import { defineConfig } from 'astro/config';

    // https://astro.build/config
    import tailwind from "@astrojs/tailwind";

    // https://astro.build/config
    export default defineConfig({
    integrations: [tailwind({
        // Example: Disable injecting a basic `base.css` import on every page.
        // Useful if you need to define and/or import your own custom `base.css`.
        config: { applyBaseStyles: false },
    })]
    });
    ```

    Note `config: { applyBaseStyles: false },`  configuration:

2. Create a file `src/styles/base.css` with this content:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

3. Import this file in the astro layouts e.g. in `NewsLayout.astro` add this line to the header:

    ```javascript
    import "../styles/base.css";
    ```

    Now we have tailwind styles in `NewsLayout.astro` file. To override the tailwind defaults and for example give some styles to lists and headers, we can edit `base.css` like this:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer base {
    // here we change the defaults
    h1 {
        @apply text-2xl;
    }
    h2 {
        @apply text-xl;
    }
    ul {
        @apply list-disc list-inside;
    }
    }
    ```

4. Install PostCSS Language Support plugin in VS Code so it understands `@tailwind`, `@layer` , etc. tags.
