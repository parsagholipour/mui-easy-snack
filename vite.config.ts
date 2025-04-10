import { defineConfig } from 'vite'
import path from "path";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({mode}) => ({
  plugins: [mode === "development" ? react() : undefined],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'mui-easy-snack',
      fileName: (format) => `mui-easy-snack.${format}.js`,
      formats: ['es', 'umd', 'cjs']
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        /@mui\/material/,
      ],
    },
    sourcemap: false,
    minify: false
  }
}))
