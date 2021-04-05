import { defineConfig } from "vite";
import react from "../src/index";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
