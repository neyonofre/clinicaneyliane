import { defineConfig } from "vite";

// A hospedagem (deploy automático a partir deste repo no GitHub) só
// espelha os arquivos do repositório — não roda build nenhum. Por isso o
// que fica publicado é o /index.html + /assets da raiz (build já pronto),
// enquanto dev.html é a entrada de verdade usada por `vite dev`/`vite
// build`. Rodar `npm run deploy:prepare` depois de mexer em src/ e antes
// de dar push, ou o site quebra de novo (ver commit "fix: publica build
// do Vite gerado").
export default defineConfig({
  build: {
    rollupOptions: { input: "dev.html" },
  },
  plugins: [
    {
      name: "dev-entry-redirect",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === "/") req.url = "/dev.html";
          next();
        });
      },
    },
  ],
});
