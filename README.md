## How to work with starter

---
### 1. Clone current git repository via command

```shell
git clone https://github.com/skaziweb/react-ts-ui-kit-starter.git
```

### 2. Install all dependencies

```shell
yarn install
```
```shell
npm install
```

### 3. Create a new component in the folder, you can also add styles in this case as a module.

```text
./src/components
```
#### See an examples in the source folder

### 4. Add import and export of created component to the main library file

```typescript
import { Component } from "./Component/Component.tsx";

export {
    Component
}
```

### 5. Build your library

```shell
yarn build
```
```shell
npm run build
```

### 6. Publish your library
#### For update fix version use
```shell
yarn bump
```
```shell
npm run bump
```
#### For update minor version use
```shell
yarn bump:minor
```
```shell
npm run bump:minor
```
#### For update major version use
```shell
yarn bump:major
```
```shell
npm run bump:major
```

#### If you want to work In simple way use git + http, this means you should remove the dist folder rule from .gitignore.
#### Add all files to commit and push changes to your git repository

```shell
git push origin main
```

```shell
git push origin master
```

### For hard way see the documentation for your git service
[GitHub](https://docs.github.com/ru/packages)
[GitLab](https://docs.gitlab.com/ee/user/packages/package_registry/)
