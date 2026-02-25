import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Agent Academy Bootstrap",
  description: "A polished VitePress starter for course and lab content",
  head: [
    ["meta", { name: "theme-color", content: "#0f766e" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap" }]
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Contributing", link: "/CONTRIBUTING" }
    ],
    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Overview", link: "/" },
          { text: "Contributing Guide", link: "/CONTRIBUTING" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/dandange8005/agent-academy-bootstrap" }
    ],
    footer: {
      message: "Built with VitePress",
      copyright: "Copyright 2026 Agent Academy Bootstrap"
    }
  }
});
