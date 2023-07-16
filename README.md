[![npm version](https://img.shields.io/npm/v/@biolast/resources.svg?style=flat)](https://www.npmjs.com/package/@biolast/resources)
![Build](https://github.com/biolast/resources/workflows/Build/badge.svg)
![Lint Code](https://github.com/biolast/resources/workflows/Lint%20Code/badge.svg)
![Run Tests](https://github.com/biolast/resources/workflows/Run%20Tests/badge.svg)

This repo contains data used by the bot. Visit [src/resources](./src/resources) to see what data can be modified.

## Installing

```yarn add @biolast/resources```

## Usage

```ts
import { items } from '@biolast/resources'

console.log(await items.Pistol.image()) // returns base64 encoded item image
```
