SCRAM!

nuxt UI juhend SIIN JA NÜÜD

1. bun add @nuxt/ui tailwindcss
2. add nuxt ui module
>nuxt.config.ts
``export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})``
3. import tailwind css and nuxt ui in your css
>app/assets/css/main.css
``@import "tailwindcss";
@import "@nuxt/ui";``
>nuxt.config.ts
``export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css']
})``
3.1 if you dont have css file, make it. make folders, files and everything.
>app -> assets -> css -> main.css
3.2 install Tailwind CSS IntelliSense enxtension in vscode
3.3 add settings (and make folders/files if needed)
>.vscode/settings.json
``{
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": "on"
  },
  "tailwindCSS.classAttributes": ["class", "ui"],
  "tailwindCSS.classFunctions": ["defineAppConfig"]
}
``
4. wrap your app with app components
>app.vue
``
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
``
