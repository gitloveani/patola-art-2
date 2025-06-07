import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Note: you are using swc
import path from "path"; // This import is already there

// No need for componentTagger or lovable-tagger if they are not core to the issue.
// If you need them for your development, keep them. I'm focusing on the deployment fix.
// import componentTagger from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // !!! ADD THIS LINE !!!
  base: '/patola-art-2/', // Your repository name goes here, enclosed in slashes

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // componentTagger is currently commented out or conditionally added in your screenshot
    // componentTagger().filter(Boolean),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // You might have other configurations here as well
}));
