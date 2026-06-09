import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },

  plugins: [devtools(), tailwindcss(), tanstackStart(), viteReact()],

  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    cors: {
      origin: ["https://app2.tt.debzoti.qzz.io"],
    },
  },
});
