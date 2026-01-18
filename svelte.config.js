import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: adapter({ fallback: "index.html" }),
  },
  vite: {
    ssr: {
      noExternal: ["firebase", "whatwg-url", "node-fetch"],
    },
    optimizeDeps: {
      exclude: ["firebase", "firebase/app", "firebase/auth", "firebase/firestore"],
    },
  },
};

export default config;