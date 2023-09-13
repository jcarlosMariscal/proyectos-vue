import { defineStore } from "pinia";

export const useFeedStore = defineStore("feedStore", {
  state: () => {
    return {
      // Información de los RSS
      sources: [
        {
          id: crypto.randomUUID,
          name: "Mozilla Hacks",
          url: "https://hacks.mozilla.org/feed",
        },
      ],
      // El feed actual
      current: {
        source: null,
        items: null,
      },
    };
  },
  // actions
  actions: {
    async loadSources(source) {
      const response = await fetch(source.url);
      let text = await response.text();
      text = text.replace(/content:encoded/g, "content");
      const domParser = new DOMParser();
      let doc = domParser.parseFromString(text, "text/xml");

      console.log(doc);
      const posts = [];
      doc.querySelectorAll("item, entry").forEach((item) => {
        const post = {
          title: item.querySelector("title").textContent,
          content: item.querySelector("content").textContent,
        };

        posts.push(post);
      });
      this.current.items = [...posts];
      this.current.source = source;
    },
    async registerNewSource(url) {
      try {
        const response = await fetch(url);
        let text = await response.text();
        const domParser = new DOMParser();
        let doc = domParser.parseFromString(text, "text/xml");

        const title = doc.querySelector("channel title, feed title");
        const source = {
          id: crypto.randomUUID,
          name: title.textContent,
          url,
        };
        this.sources.push(source);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
