# endless-vk-online

[![NPM](https://nodei.co/npm/endless-vk-online.png)](https://nodei.co/npm/endless-vk-online/)

![npm](https://img.shields.io/npm/v/endless-vk-online.svg) ![npm bundle size](https://img.shields.io/bundlephobia/min/endless-vk-online.svg)

Lightweight npm module for creating endless VK online

## Install
```shell
npm i vk-io
```

## Usage
```js
const VKOnline = require('endless-vk-online');

let endlessOnline = new VKOnline(process.env.TOKEN);

endlessOnline.start().catch(console.log);
```