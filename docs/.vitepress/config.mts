import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Agent Academy Bootstrap",
  description: "Starter docs site for course content",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" }
    ],
    sidebar: [
      { text: "Getting Started", items: [{ text: "Home", link: "/" }] }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/" }
    ]
  }
});
