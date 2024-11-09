# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

```
warthog-extension-wallet
├─ .gitignore
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ icon-128.png
│  ├─ icon-48.png
│  ├─ logo.svg
│  ├─ manifest.json
│  └─ vite.svg
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ background.ts
│  ├─ components
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ Popup
│  │  │  ├─ Popup.css
│  │  │  ├─ Popup.tsx
│  │  │  └─ index.html
│  │  └─ Welcome
│  │     └─ index.html
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.app.tsbuildinfo
├─ tsconfig.json
├─ tsconfig.node.json
├─ tsconfig.node.tsbuildinfo
└─ vite.config.ts

```
```
warthog-extension-wallet
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ branches
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 09
│  │  │  └─ 2408a9f09eae19150818b4f0db5d1b70744828
│  │  ├─ 0f
│  │  │  └─ 5153d5c75a572e566354645e1c4b6b575ae37b
│  │  ├─ 11
│  │  │  └─ f02fe2a0061d6e6e1f271b21da95423b448b32
│  │  ├─ 12
│  │  │  └─ 5db6be2ef7d6e2b703b0e96dc430c88ed6d098
│  │  ├─ 18
│  │  │  └─ 338c0d6ea46d3bcfd0ff7f0b42c66581a727f6
│  │  ├─ 1f
│  │  │  └─ fef600d959ec9e396d5a260bd3f5b927b2cef8
│  │  ├─ 24
│  │  │  └─ ace315721c281604e1ba514a1be84a77ef978d
│  │  ├─ 2c
│  │  │  └─ 64e2e3f9570aa6f4c2c9b437c0bfa36187b79c
│  │  ├─ 3a
│  │  │  └─ 377370fdee8ab0797ee3229ec8328421bd25f0
│  │  ├─ 3d
│  │  │  └─ 7ded3ff62424046af18e2b5b8b8324c7e0001d
│  │  ├─ 46
│  │  │  └─ 89de41b5cc10fbfc92be564875ac07b5e429ac
│  │  ├─ 49
│  │  │  └─ 084df46a1e8365dc4626031d54c8b2e6aa844a
│  │  ├─ 4a
│  │  │  └─ 4ef51d1e17fe9d3c2be4e1f2a0f7079f213060
│  │  ├─ 53
│  │  │  └─ 252980a6d725eef873e5cb6877ebec9a36a1e8
│  │  ├─ 6c
│  │  │  └─ 87de9bb3358469122cc991d5cf578927246184
│  │  ├─ 6e
│  │  │  └─ 48063fd1cc6d6ed5d549c59f515dcdbc7dc7e2
│  │  ├─ 75
│  │  │  └─ ea0011dff53692dff4531a351867c883458a6b
│  │  ├─ 7c
│  │  │  └─ 7449bb832dea682e70701ad3cd11d49773f0b6
│  │  ├─ 8a
│  │  │  └─ daa207f3d4d3e0c7e49022d962094a59504759
│  │  ├─ 92
│  │  │  └─ 12830162692436a52f3f5a41ffc42fe6786ed9
│  │  ├─ 94
│  │  │  └─ c0b2fc152a086447a04f62793957235d2475be
│  │  ├─ 99
│  │  │  └─ 07cef49dd495d410cebf61931d3faf1a1a1030
│  │  ├─ 9d
│  │  │  └─ ad70185e2dda91b38c7c2f80708aa4365d632e
│  │  ├─ 9e
│  │  │  └─ eb70e10b6994ac60ef3d94771e5ef34ec9e659
│  │  ├─ a5
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ ae
│  │  │  └─ 3a70a74a86b8fac48a6401d967496f9ef86c1e
│  │  ├─ b9
│  │  │  └─ d355df2a5956b526c004531b7b0ffe412461e0
│  │  ├─ ba
│  │  │  ├─ b7446999f0f4a1f64726493a3a441c40790e79
│  │  │  └─ c4f2a60683d0a9e640fefdda31d1cf197e15aa
│  │  ├─ bb
│  │  │  └─ a60a7da356b10cf6d5edd17f3814a32ac132f4
│  │  ├─ c0
│  │  │  └─ 2bf88b72f22111b50397647dd18d9bc66382b2
│  │  ├─ cf
│  │  │  └─ de3ed76774653b7ce8cbc0389e56c5e287640c
│  │  ├─ d4
│  │  │  └─ 652f583aa9ac2d3c73b4644ebd2bfe838b8d1f
│  │  ├─ d5
│  │  │  └─ 610d58afada4c1f0d71cdb102917e80fec2f91
│  │  ├─ e4
│  │  │  └─ b78eae12304a075fa19675c4047061d6ab920d
│  │  ├─ e6
│  │  │  └─ 7c366ad394a7da125df9f138ede5a15ab05f8b
│  │  ├─ e7
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ e9
│  │  │  └─ db026eab20c8ffc6b5954b192d03b731077b21
│  │  ├─ ee
│  │  │  └─ 41a29967ce4355342a86e55637e70ee34a599e
│  │  ├─ f6
│  │  │  └─ 6ac10a804ef5d17401759fe59a342d86115f69
│  │  ├─ fb
│  │  │  └─ 45ef7a06cb7490952e01685d05248f070157f5
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ icon-128.png
│  ├─ icon-48.png
│  ├─ logo.svg
│  ├─ manifest.json
│  └─ vite.svg
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ api
│  │  └─ index.tsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ background.ts
│  ├─ components
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ Popup
│  │  │  ├─ Popup.css
│  │  │  ├─ Popup.tsx
│  │  │  ├─ index.html
│  │  │  └─ index.tsx
│  │  └─ Welcome
│  │     ├─ Create
│  │     │  ├─ Create.css
│  │     │  └─ Create.tsx
│  │     ├─ Import
│  │     ├─ Welcome.css
│  │     ├─ Welcome.tsx
│  │     ├─ index.html
│  │     └─ index.tsx
│  ├─ services 
│  │  └─ walletService.ts
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.app.tsbuildinfo
├─ tsconfig.json
├─ tsconfig.node.json
├─ tsconfig.node.tsbuildinfo
└─ vite.config.ts

```