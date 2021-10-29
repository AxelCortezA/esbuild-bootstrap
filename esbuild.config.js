import esbuildServe from 'esbuild-serve';

esbuildServe(
  {
    logLevel: "info",
    entryPoints: ["assets/app.js"],
    bundle: true,
    outfile: "dist/main.js",
    sourcemap: true,
  },
  { 
    port: 7000,
    root: "dist"
  }
);