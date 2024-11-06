// vite.config.ts
import { defineConfig } from "file:///root/Totti/ggtoro-defi-frontend/node_modules/.pnpm/vite@4.3.9_@types+node@18.16.2/node_modules/vite/dist/node/index.js";
import { vanillaExtractPlugin } from "file:///root/Totti/ggtoro-defi-frontend/node_modules/.pnpm/@vanilla-extract+vite-plugin@3.8.0_@types+node@18.16.2_vite@4.3.9/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
import dts from "file:///root/Totti/ggtoro-defi-frontend/node_modules/.pnpm/vite-plugin-dts@3.5.3_@types+node@18.16.2_rollup@2.78.0_typescript@5.1.3_vite@4.3.9/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var package_default = {
  name: "@pancakeswap/uikit",
  version: "0.64.2",
  description: "Set of UI components for pancake projects",
  type: "module",
  main: "dist/index.cjs",
  module: "dist/index.js",
  types: "dist/index.d.ts",
  sideEffects: [
    "*.css.ts",
    "src/css/**/*",
    "src/theme/**/*"
  ],
  exports: {
    "./package.json": "./package.json",
    ".": {
      import: "./dist/index.js",
      require: "./dist/index.cjs"
    },
    "./styles": {
      import: "./dist/style.css",
      require: "./dist/style.css"
    },
    "./css/atoms": {
      import: "./src/css/atoms.ts",
      types: "./dist/css/atoms.d.ts"
    },
    "./css/vars.css": {
      import: "./src/css/vars.css.ts",
      types: "./dist/css/vars.css.d.ts"
    },
    "./css/responsiveStyle": {
      import: "./src/css/responsiveStyle.ts",
      types: "./dist/css/responsiveStyle.d.ts"
    }
  },
  repository: "https://github.com/pancakeswap/pancake-frontend/tree/develop/packages/uikit",
  license: "MIT",
  private: true,
  scripts: {
    "build:uikit": "vite build",
    dev: "vite build --watch --mode development",
    start: "pnpm storybook",
    lint: "eslint 'src/**/*.{js,jsx,ts,tsx}'",
    "format:check": "prettier --check --loglevel error 'src/**/*.{js,jsx,ts,tsx}'",
    "format:write": "prettier --write 'src/**/*.{js,jsx,ts,tsx}'",
    storybook: "storybook dev -p 6006",
    "build:storybook": "storybook build",
    test: "vitest --run",
    "update:snapshot": "vitest -u",
    prepublishOnly: "pnpm run build:uikit",
    clean: "rm -rf .turbo && rm -rf node_modules && rm -rf dist"
  },
  devDependencies: {
    "@babel/core": "^7.20.12",
    "@babel/preset-env": "^7.20.2",
    "@babel/preset-react": "^7.18.6",
    "@pancakeswap/hooks": "workspace:*",
    "@pancakeswap/utils": "workspace:*",
    "@pancakeswap/chains": "workspace:*",
    "@rollup/plugin-json": "^4.1.0",
    "@rollup/plugin-typescript": "^8.2.1",
    "@rollup/plugin-url": "^6.0.0",
    "@storybook/addon-a11y": "^7.0.7",
    "@storybook/addon-actions": "^7.0.7",
    "@storybook/addon-essentials": "^7.0.7",
    "@storybook/addon-links": "^7.0.7",
    "@storybook/builder-vite": "^7.0.7",
    "@storybook/react": "^7.0.7",
    "@storybook/react-vite": "^7.0.7",
    "@testing-library/jest-dom": "^5.11.6",
    "@testing-library/react": "^12.1.3",
    "@types/d3": "^7.4.0",
    "@types/js-cookie": "^3.0.2",
    "@types/lodash": "^4.14.168",
    "@types/react": "^18.2.21",
    "@types/react-dom": "^18.0.6",
    "@types/react-router-dom": "^5.1.7",
    "@types/react-transition-group": "^4.4.1",
    "@types/styled-system__should-forward-prop": "^5.1.2",
    "@vanilla-extract/vite-plugin": "^3.8.0",
    "@vitejs/plugin-react": "4.0.0",
    "babel-jest": "^29.3.1",
    "babel-loader": "^9.1.2",
    "babel-plugin-styled-components": "^1.12.0",
    d3: "^7.8.2",
    jest: "29.3.1",
    "jest-environment-jsdom": "^29.3.1",
    "jest-styled-components": "^7.0.8",
    "js-cookie": "*",
    next: "*",
    "next-seo": "*",
    "next-themes": "^0.2.1",
    polished: "^4.2.2",
    react: "^18.2.0",
    "react-countup": "^6.4.0",
    "react-device-detect": "*",
    "react-dom": "^18.2.0",
    "react-is": "^17.0.2",
    "react-markdown": "^6.0.2",
    "react-redux": "^8.0.5",
    "react-router-dom": "^5.2.0",
    "react-transition-group": "*",
    "remark-gfm": "*",
    rollup: "^2.70.1",
    "rollup-plugin-node-builtins": "^2.1.2",
    storybook: "^7.0.7",
    "styled-components": "^6.0.7",
    "themeprovider-storybook": "^1.7.2",
    "ts-jest": "^27.1.3",
    vite: "4.3.9",
    "vite-plugin-dts": "^3.5.3",
    "vite-tsconfig-paths": "^4.0.3",
    vitest: "^0.27.2",
    wagmi: "^1.4.3"
  },
  peerDependencies: {
    "js-cookie": "*",
    next: "*",
    "next-seo": "*",
    "next-themes": "^0.2.1",
    react: "^18.2.0",
    "react-device-detect": "*",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.5",
    "react-transition-group": "*",
    "remark-gfm": "*",
    "styled-components": "^6.0.7"
  },
  dependencies: {
    "@pancakeswap/hooks": "workspace:*",
    "@pancakeswap/localization": "workspace:*",
    "@popperjs/core": "^2.9.2",
    "@radix-ui/react-dismissable-layer": "^1.0.3",
    "@radix-ui/react-slot": "^1.0.0",
    "@styled-system/should-forward-prop": "^5.1.5",
    "@types/styled-system": "^5.1.17",
    "@vanilla-extract/css": "^1.13.0",
    "@vanilla-extract/css-utils": "^0.1.3",
    "@vanilla-extract/recipes": "^0.5.0",
    "@vanilla-extract/sprinkles": "^1.6.1",
    "bignumber.js": "^9.0.0",
    clsx: "^1.2.1",
    csstype: "^3.1.2",
    dayjs: "^1.11.10",
    deepmerge: "^4.0.0",
    "framer-motion": "10.16.4",
    "lightweight-charts": "^4.0.1",
    lodash: "^4.17.20",
    "react-popper": "^2.3.0",
    "styled-system": "^5.1.5",
    tslib: "^2.2.0"
  },
  publishConfig: {
    access: "public"
  }
};

// vite.config.ts
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: "index",
      formats: ["cjs", "es"]
    },
    rollupOptions: {
      external: [...Object.keys(package_default.peerDependencies), ...Object.keys(package_default.dependencies), "crypto"]
    }
  },
  plugins: [
    vanillaExtractPlugin({
      identifiers: "short"
    }),
    dts()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL3Jvb3QvVG90dGkvZ2d0b3JvLWRlZmktZnJvbnRlbmQvcGFja2FnZXMvdWlraXRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9yb290L1RvdHRpL2dndG9yby1kZWZpLWZyb250ZW5kL3BhY2thZ2VzL3Vpa2l0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9yb290L1RvdHRpL2dndG9yby1kZWZpLWZyb250ZW5kL3BhY2thZ2VzL3Vpa2l0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IHZhbmlsbGFFeHRyYWN0UGx1Z2luIH0gZnJvbSBcIkB2YW5pbGxhLWV4dHJhY3Qvdml0ZS1wbHVnaW5cIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuXG5pbXBvcnQgcGtnIGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IFwic3JjL2luZGV4LnRzXCIsXG4gICAgICBmaWxlTmFtZTogXCJpbmRleFwiLFxuICAgICAgZm9ybWF0czogW1wiY2pzXCIsIFwiZXNcIl0sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWy4uLk9iamVjdC5rZXlzKHBrZy5wZWVyRGVwZW5kZW5jaWVzKSwgLi4uT2JqZWN0LmtleXMocGtnLmRlcGVuZGVuY2llcyksIFwiY3J5cHRvXCJdLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2YW5pbGxhRXh0cmFjdFBsdWdpbih7XG4gICAgICBpZGVudGlmaWVyczogXCJzaG9ydFwiLFxuICAgIH0pLFxuICAgIGR0cygpLFxuICBdLFxufSk7XG4iLCAie1xuICBcIm5hbWVcIjogXCJAcGFuY2FrZXN3YXAvdWlraXRcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC42NC4yXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTZXQgb2YgVUkgY29tcG9uZW50cyBmb3IgcGFuY2FrZSBwcm9qZWN0c1wiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJtYWluXCI6IFwiZGlzdC9pbmRleC5janNcIixcbiAgXCJtb2R1bGVcIjogXCJkaXN0L2luZGV4LmpzXCIsXG4gIFwidHlwZXNcIjogXCJkaXN0L2luZGV4LmQudHNcIixcbiAgXCJzaWRlRWZmZWN0c1wiOiBbXG4gICAgXCIqLmNzcy50c1wiLFxuICAgIFwic3JjL2Nzcy8qKi8qXCIsXG4gICAgXCJzcmMvdGhlbWUvKiovKlwiXG4gIF0sXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuL3BhY2thZ2UuanNvblwiOiBcIi4vcGFja2FnZS5qc29uXCIsXG4gICAgXCIuXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvaW5kZXguY2pzXCJcbiAgICB9LFxuICAgIFwiLi9zdHlsZXNcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3Qvc3R5bGUuY3NzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3Qvc3R5bGUuY3NzXCJcbiAgICB9LFxuICAgIFwiLi9jc3MvYXRvbXNcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL3NyYy9jc3MvYXRvbXMudHNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvY3NzL2F0b21zLmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2Nzcy92YXJzLmNzc1wiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vc3JjL2Nzcy92YXJzLmNzcy50c1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9jc3MvdmFycy5jc3MuZC50c1wiXG4gICAgfSxcbiAgICBcIi4vY3NzL3Jlc3BvbnNpdmVTdHlsZVwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vc3JjL2Nzcy9yZXNwb25zaXZlU3R5bGUudHNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvY3NzL3Jlc3BvbnNpdmVTdHlsZS5kLnRzXCJcbiAgICB9XG4gIH0sXG4gIFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wYW5jYWtlc3dhcC9wYW5jYWtlLWZyb250ZW5kL3RyZWUvZGV2ZWxvcC9wYWNrYWdlcy91aWtpdFwiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJidWlsZDp1aWtpdFwiOiBcInZpdGUgYnVpbGRcIixcbiAgICBcImRldlwiOiBcInZpdGUgYnVpbGQgLS13YXRjaCAtLW1vZGUgZGV2ZWxvcG1lbnRcIixcbiAgICBcInN0YXJ0XCI6IFwicG5wbSBzdG9yeWJvb2tcIixcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgJ3NyYy8qKi8qLntqcyxqc3gsdHMsdHN4fSdcIixcbiAgICBcImZvcm1hdDpjaGVja1wiOiBcInByZXR0aWVyIC0tY2hlY2sgLS1sb2dsZXZlbCBlcnJvciAnc3JjLyoqLyoue2pzLGpzeCx0cyx0c3h9J1wiLFxuICAgIFwiZm9ybWF0OndyaXRlXCI6IFwicHJldHRpZXIgLS13cml0ZSAnc3JjLyoqLyoue2pzLGpzeCx0cyx0c3h9J1wiLFxuICAgIFwic3Rvcnlib29rXCI6IFwic3Rvcnlib29rIGRldiAtcCA2MDA2XCIsXG4gICAgXCJidWlsZDpzdG9yeWJvb2tcIjogXCJzdG9yeWJvb2sgYnVpbGRcIixcbiAgICBcInRlc3RcIjogXCJ2aXRlc3QgLS1ydW5cIixcbiAgICBcInVwZGF0ZTpzbmFwc2hvdFwiOiBcInZpdGVzdCAtdVwiLFxuICAgIFwicHJlcHVibGlzaE9ubHlcIjogXCJwbnBtIHJ1biBidWlsZDp1aWtpdFwiLFxuICAgIFwiY2xlYW5cIjogXCJybSAtcmYgLnR1cmJvICYmIHJtIC1yZiBub2RlX21vZHVsZXMgJiYgcm0gLXJmIGRpc3RcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAYmFiZWwvY29yZVwiOiBcIl43LjIwLjEyXCIsXG4gICAgXCJAYmFiZWwvcHJlc2V0LWVudlwiOiBcIl43LjIwLjJcIixcbiAgICBcIkBiYWJlbC9wcmVzZXQtcmVhY3RcIjogXCJeNy4xOC42XCIsXG4gICAgXCJAcGFuY2FrZXN3YXAvaG9va3NcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL3V0aWxzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC9jaGFpbnNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHJvbGx1cC9wbHVnaW4tanNvblwiOiBcIl40LjEuMFwiLFxuICAgIFwiQHJvbGx1cC9wbHVnaW4tdHlwZXNjcmlwdFwiOiBcIl44LjIuMVwiLFxuICAgIFwiQHJvbGx1cC9wbHVnaW4tdXJsXCI6IFwiXjYuMC4wXCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWExMXlcIjogXCJeNy4wLjdcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tYWN0aW9uc1wiOiBcIl43LjAuN1wiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1lc3NlbnRpYWxzXCI6IFwiXjcuMC43XCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWxpbmtzXCI6IFwiXjcuMC43XCIsXG4gICAgXCJAc3Rvcnlib29rL2J1aWxkZXItdml0ZVwiOiBcIl43LjAuN1wiLFxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdFwiOiBcIl43LjAuN1wiLFxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdC12aXRlXCI6IFwiXjcuMC43XCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tXCI6IFwiXjUuMTEuNlwiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS9yZWFjdFwiOiBcIl4xMi4xLjNcIixcbiAgICBcIkB0eXBlcy9kM1wiOiBcIl43LjQuMFwiLFxuICAgIFwiQHR5cGVzL2pzLWNvb2tpZVwiOiBcIl4zLjAuMlwiLFxuICAgIFwiQHR5cGVzL2xvZGFzaFwiOiBcIl40LjE0LjE2OFwiLFxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjIuMjFcIixcbiAgICBcIkB0eXBlcy9yZWFjdC1kb21cIjogXCJeMTguMC42XCIsXG4gICAgXCJAdHlwZXMvcmVhY3Qtcm91dGVyLWRvbVwiOiBcIl41LjEuN1wiLFxuICAgIFwiQHR5cGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjogXCJeNC40LjFcIixcbiAgICBcIkB0eXBlcy9zdHlsZWQtc3lzdGVtX19zaG91bGQtZm9yd2FyZC1wcm9wXCI6IFwiXjUuMS4yXCIsXG4gICAgXCJAdmFuaWxsYS1leHRyYWN0L3ZpdGUtcGx1Z2luXCI6IFwiXjMuOC4wXCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiOiBcIjQuMC4wXCIsXG4gICAgXCJiYWJlbC1qZXN0XCI6IFwiXjI5LjMuMVwiLFxuICAgIFwiYmFiZWwtbG9hZGVyXCI6IFwiXjkuMS4yXCIsXG4gICAgXCJiYWJlbC1wbHVnaW4tc3R5bGVkLWNvbXBvbmVudHNcIjogXCJeMS4xMi4wXCIsXG4gICAgXCJkM1wiOiBcIl43LjguMlwiLFxuICAgIFwiamVzdFwiOiBcIjI5LjMuMVwiLFxuICAgIFwiamVzdC1lbnZpcm9ubWVudC1qc2RvbVwiOiBcIl4yOS4zLjFcIixcbiAgICBcImplc3Qtc3R5bGVkLWNvbXBvbmVudHNcIjogXCJeNy4wLjhcIixcbiAgICBcImpzLWNvb2tpZVwiOiBcIipcIixcbiAgICBcIm5leHRcIjogXCIqXCIsXG4gICAgXCJuZXh0LXNlb1wiOiBcIipcIixcbiAgICBcIm5leHQtdGhlbWVzXCI6IFwiXjAuMi4xXCIsXG4gICAgXCJwb2xpc2hlZFwiOiBcIl40LjIuMlwiLFxuICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1jb3VudHVwXCI6IFwiXjYuNC4wXCIsXG4gICAgXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI6IFwiKlwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjIuMFwiLFxuICAgIFwicmVhY3QtaXNcIjogXCJeMTcuMC4yXCIsXG4gICAgXCJyZWFjdC1tYXJrZG93blwiOiBcIl42LjAuMlwiLFxuICAgIFwicmVhY3QtcmVkdXhcIjogXCJeOC4wLjVcIixcbiAgICBcInJlYWN0LXJvdXRlci1kb21cIjogXCJeNS4yLjBcIixcbiAgICBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjogXCIqXCIsXG4gICAgXCJyZW1hcmstZ2ZtXCI6IFwiKlwiLFxuICAgIFwicm9sbHVwXCI6IFwiXjIuNzAuMVwiLFxuICAgIFwicm9sbHVwLXBsdWdpbi1ub2RlLWJ1aWx0aW5zXCI6IFwiXjIuMS4yXCIsXG4gICAgXCJzdG9yeWJvb2tcIjogXCJeNy4wLjdcIixcbiAgICBcInN0eWxlZC1jb21wb25lbnRzXCI6IFwiXjYuMC43XCIsXG4gICAgXCJ0aGVtZXByb3ZpZGVyLXN0b3J5Ym9va1wiOiBcIl4xLjcuMlwiLFxuICAgIFwidHMtamVzdFwiOiBcIl4yNy4xLjNcIixcbiAgICBcInZpdGVcIjogXCI0LjMuOVwiLFxuICAgIFwidml0ZS1wbHVnaW4tZHRzXCI6IFwiXjMuNS4zXCIsXG4gICAgXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI6IFwiXjQuMC4zXCIsXG4gICAgXCJ2aXRlc3RcIjogXCJeMC4yNy4yXCIsXG4gICAgXCJ3YWdtaVwiOiBcIl4xLjQuM1wiXG4gIH0sXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJqcy1jb29raWVcIjogXCIqXCIsXG4gICAgXCJuZXh0XCI6IFwiKlwiLFxuICAgIFwibmV4dC1zZW9cIjogXCIqXCIsXG4gICAgXCJuZXh0LXRoZW1lc1wiOiBcIl4wLjIuMVwiLFxuICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI6IFwiKlwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjIuMFwiLFxuICAgIFwicmVhY3QtcmVkdXhcIjogXCJeOC4wLjVcIixcbiAgICBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjogXCIqXCIsXG4gICAgXCJyZW1hcmstZ2ZtXCI6IFwiKlwiLFxuICAgIFwic3R5bGVkLWNvbXBvbmVudHNcIjogXCJeNi4wLjdcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAcGFuY2FrZXN3YXAvaG9va3NcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL2xvY2FsaXphdGlvblwiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAcG9wcGVyanMvY29yZVwiOiBcIl4yLjkuMlwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LWRpc21pc3NhYmxlLWxheWVyXCI6IFwiXjEuMC4zXCIsXG4gICAgXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiOiBcIl4xLjAuMFwiLFxuICAgIFwiQHN0eWxlZC1zeXN0ZW0vc2hvdWxkLWZvcndhcmQtcHJvcFwiOiBcIl41LjEuNVwiLFxuICAgIFwiQHR5cGVzL3N0eWxlZC1zeXN0ZW1cIjogXCJeNS4xLjE3XCIsXG4gICAgXCJAdmFuaWxsYS1leHRyYWN0L2Nzc1wiOiBcIl4xLjEzLjBcIixcbiAgICBcIkB2YW5pbGxhLWV4dHJhY3QvY3NzLXV0aWxzXCI6IFwiXjAuMS4zXCIsXG4gICAgXCJAdmFuaWxsYS1leHRyYWN0L3JlY2lwZXNcIjogXCJeMC41LjBcIixcbiAgICBcIkB2YW5pbGxhLWV4dHJhY3Qvc3ByaW5rbGVzXCI6IFwiXjEuNi4xXCIsXG4gICAgXCJiaWdudW1iZXIuanNcIjogXCJeOS4wLjBcIixcbiAgICBcImNsc3hcIjogXCJeMS4yLjFcIixcbiAgICBcImNzc3R5cGVcIjogXCJeMy4xLjJcIixcbiAgICBcImRheWpzXCI6IFwiXjEuMTEuMTBcIixcbiAgICBcImRlZXBtZXJnZVwiOiBcIl40LjAuMFwiLFxuICAgIFwiZnJhbWVyLW1vdGlvblwiOiBcIjEwLjE2LjRcIixcbiAgICBcImxpZ2h0d2VpZ2h0LWNoYXJ0c1wiOiBcIl40LjAuMVwiLFxuICAgIFwibG9kYXNoXCI6IFwiXjQuMTcuMjBcIixcbiAgICBcInJlYWN0LXBvcHBlclwiOiBcIl4yLjMuMFwiLFxuICAgIFwic3R5bGVkLXN5c3RlbVwiOiBcIl41LjEuNVwiLFxuICAgIFwidHNsaWJcIjogXCJeMi4yLjBcIlxuICB9LFxuICBcInB1Ymxpc2hDb25maWdcIjoge1xuICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErVCxTQUFTLG9CQUFvQjtBQUM1VixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLFNBQVM7OztBQ0ZoQjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsYUFBZTtBQUFBLEVBQ2YsTUFBUTtBQUFBLEVBQ1IsTUFBUTtBQUFBLEVBQ1IsUUFBVTtBQUFBLEVBQ1YsT0FBUztBQUFBLEVBQ1QsYUFBZTtBQUFBLElBQ2I7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVc7QUFBQSxJQUNULGtCQUFrQjtBQUFBLElBQ2xCLEtBQUs7QUFBQSxNQUNILFFBQVU7QUFBQSxNQUNWLFNBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVixRQUFVO0FBQUEsTUFDVixTQUFXO0FBQUEsSUFDYjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsUUFBVTtBQUFBLE1BQ1YsT0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLGtCQUFrQjtBQUFBLE1BQ2hCLFFBQVU7QUFBQSxNQUNWLE9BQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSx5QkFBeUI7QUFBQSxNQUN2QixRQUFVO0FBQUEsTUFDVixPQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQWM7QUFBQSxFQUNkLFNBQVc7QUFBQSxFQUNYLFNBQVc7QUFBQSxFQUNYLFNBQVc7QUFBQSxJQUNULGVBQWU7QUFBQSxJQUNmLEtBQU87QUFBQSxJQUNQLE9BQVM7QUFBQSxJQUNULE1BQVE7QUFBQSxJQUNSLGdCQUFnQjtBQUFBLElBQ2hCLGdCQUFnQjtBQUFBLElBQ2hCLFdBQWE7QUFBQSxJQUNiLG1CQUFtQjtBQUFBLElBQ25CLE1BQVE7QUFBQSxJQUNSLG1CQUFtQjtBQUFBLElBQ25CLGdCQUFrQjtBQUFBLElBQ2xCLE9BQVM7QUFBQSxFQUNYO0FBQUEsRUFDQSxpQkFBbUI7QUFBQSxJQUNqQixlQUFlO0FBQUEsSUFDZixxQkFBcUI7QUFBQSxJQUNyQix1QkFBdUI7QUFBQSxJQUN2QixzQkFBc0I7QUFBQSxJQUN0QixzQkFBc0I7QUFBQSxJQUN0Qix1QkFBdUI7QUFBQSxJQUN2Qix1QkFBdUI7QUFBQSxJQUN2Qiw2QkFBNkI7QUFBQSxJQUM3QixzQkFBc0I7QUFBQSxJQUN0Qix5QkFBeUI7QUFBQSxJQUN6Qiw0QkFBNEI7QUFBQSxJQUM1QiwrQkFBK0I7QUFBQSxJQUMvQiwwQkFBMEI7QUFBQSxJQUMxQiwyQkFBMkI7QUFBQSxJQUMzQixvQkFBb0I7QUFBQSxJQUNwQix5QkFBeUI7QUFBQSxJQUN6Qiw2QkFBNkI7QUFBQSxJQUM3QiwwQkFBMEI7QUFBQSxJQUMxQixhQUFhO0FBQUEsSUFDYixvQkFBb0I7QUFBQSxJQUNwQixpQkFBaUI7QUFBQSxJQUNqQixnQkFBZ0I7QUFBQSxJQUNoQixvQkFBb0I7QUFBQSxJQUNwQiwyQkFBMkI7QUFBQSxJQUMzQixpQ0FBaUM7QUFBQSxJQUNqQyw2Q0FBNkM7QUFBQSxJQUM3QyxnQ0FBZ0M7QUFBQSxJQUNoQyx3QkFBd0I7QUFBQSxJQUN4QixjQUFjO0FBQUEsSUFDZCxnQkFBZ0I7QUFBQSxJQUNoQixrQ0FBa0M7QUFBQSxJQUNsQyxJQUFNO0FBQUEsSUFDTixNQUFRO0FBQUEsSUFDUiwwQkFBMEI7QUFBQSxJQUMxQiwwQkFBMEI7QUFBQSxJQUMxQixhQUFhO0FBQUEsSUFDYixNQUFRO0FBQUEsSUFDUixZQUFZO0FBQUEsSUFDWixlQUFlO0FBQUEsSUFDZixVQUFZO0FBQUEsSUFDWixPQUFTO0FBQUEsSUFDVCxpQkFBaUI7QUFBQSxJQUNqQix1QkFBdUI7QUFBQSxJQUN2QixhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsSUFDWixrQkFBa0I7QUFBQSxJQUNsQixlQUFlO0FBQUEsSUFDZixvQkFBb0I7QUFBQSxJQUNwQiwwQkFBMEI7QUFBQSxJQUMxQixjQUFjO0FBQUEsSUFDZCxRQUFVO0FBQUEsSUFDViwrQkFBK0I7QUFBQSxJQUMvQixXQUFhO0FBQUEsSUFDYixxQkFBcUI7QUFBQSxJQUNyQiwyQkFBMkI7QUFBQSxJQUMzQixXQUFXO0FBQUEsSUFDWCxNQUFRO0FBQUEsSUFDUixtQkFBbUI7QUFBQSxJQUNuQix1QkFBdUI7QUFBQSxJQUN2QixRQUFVO0FBQUEsSUFDVixPQUFTO0FBQUEsRUFDWDtBQUFBLEVBQ0Esa0JBQW9CO0FBQUEsSUFDbEIsYUFBYTtBQUFBLElBQ2IsTUFBUTtBQUFBLElBQ1IsWUFBWTtBQUFBLElBQ1osZUFBZTtBQUFBLElBQ2YsT0FBUztBQUFBLElBQ1QsdUJBQXVCO0FBQUEsSUFDdkIsYUFBYTtBQUFBLElBQ2IsZUFBZTtBQUFBLElBQ2YsMEJBQTBCO0FBQUEsSUFDMUIsY0FBYztBQUFBLElBQ2QscUJBQXFCO0FBQUEsRUFDdkI7QUFBQSxFQUNBLGNBQWdCO0FBQUEsSUFDZCxzQkFBc0I7QUFBQSxJQUN0Qiw2QkFBNkI7QUFBQSxJQUM3QixrQkFBa0I7QUFBQSxJQUNsQixxQ0FBcUM7QUFBQSxJQUNyQyx3QkFBd0I7QUFBQSxJQUN4QixzQ0FBc0M7QUFBQSxJQUN0Qyx3QkFBd0I7QUFBQSxJQUN4Qix3QkFBd0I7QUFBQSxJQUN4Qiw4QkFBOEI7QUFBQSxJQUM5Qiw0QkFBNEI7QUFBQSxJQUM1Qiw4QkFBOEI7QUFBQSxJQUM5QixnQkFBZ0I7QUFBQSxJQUNoQixNQUFRO0FBQUEsSUFDUixTQUFXO0FBQUEsSUFDWCxPQUFTO0FBQUEsSUFDVCxXQUFhO0FBQUEsSUFDYixpQkFBaUI7QUFBQSxJQUNqQixzQkFBc0I7QUFBQSxJQUN0QixRQUFVO0FBQUEsSUFDVixnQkFBZ0I7QUFBQSxJQUNoQixpQkFBaUI7QUFBQSxJQUNqQixPQUFTO0FBQUEsRUFDWDtBQUFBLEVBQ0EsZUFBaUI7QUFBQSxJQUNmLFFBQVU7QUFBQSxFQUNaO0FBQ0Y7OztBRHRKQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsT0FBTyxJQUFJO0FBQUEsSUFDdkI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxHQUFHLE9BQU8sS0FBSyxnQkFBSSxnQkFBZ0IsR0FBRyxHQUFHLE9BQU8sS0FBSyxnQkFBSSxZQUFZLEdBQUcsUUFBUTtBQUFBLElBQzdGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AscUJBQXFCO0FBQUEsTUFDbkIsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLEVBQ047QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
