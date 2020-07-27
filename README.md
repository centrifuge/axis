# Axis

[![Storybook](https://github.com/storybooks/brand/raw/master/badge/badge-storybook.svg?sanitize=true)](https://axis.centrifuge.io/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Single source of truth used to build user interfaces for Centrifuge

#### Develop branch
[https://develop.axis.centrifuge.io](https://develop.axis.centrifuge.io)

#### Master branch
[https://axis.centrifuge.io](https://axis.centrifuge.io)

#### How to use
```javascript

// canary releases from develop branch
npm install @centrifuge/axis-[packageName]@canary // Ex: npm install @centrifuge/axis-theme@canary

// releases from master
npm install @centrifuge/axis-[packageName] // Ex: npm install @centrifuge/axis-theme
```

#### Development

Use node v12.16.3: `nvm use` (the version is specified in `.nvmrc`)

Install and link all dependencies: `npm install`

Build and watch all packages: `npm run build-watch`

In a separate terminal, run storybook to view all examples: `npm start`

#### Linking

If you want to develop tinlake-ui, then you can use linking to depend on the local version of an axis component rather than the one in the npm package library. There are a few steps for this:

1. In `packages/[some_component]`, run `npm link` to link `[some_component]` to your global `node_modules`.
2. In the root of `axis`, run `npm link [tinlake_ui_path]/node_modules/react`, where `[tinlake_ui_path]` is the path to your local tinlake-ui repo. This tells the axis components to use the `react` dependency from the tinlake-ui package, rather than the one from the axis `node_modules` folder. This prevents errors with React Hooks due to there being multiple instances of `react`.
3. In your tinlake-ui repo, run `npm link @centrifuge/axis-[some_component]`.