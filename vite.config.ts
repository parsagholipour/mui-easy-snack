import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'mui-easy-snack',
      fileName: (format) => `mui-easy-snack.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@mui/material',
        '@mui/material/Snackbar',
        '@mui/material/SnackbarContent',
        '@emotion/react',
        '@emotion/styled'
      ],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MuiMaterial'
        }
      }
    },
    sourcemap: true,
    minify: true
  }
})