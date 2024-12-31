# React Year Selector

---

A minimal library to select a year without selecting month or day [Storybook preview](https://storybook-mentalyc.vercel.app/?path=/docs/components-yearselector--docs).

> The latest version is not yet finalised and is subject to change, open an issue if you come across a problem in usage

## Installation

```shell
npm i year-selector
```

## Basic usage

```js
import { YearSelector } from "year-selector";

<YearSelector
  label="Year of birth"
  placeholder="YYYY"
  contentClasses="max-w-[90vw] p-4 md:grid-cols-5 lg:grid-cols-6"
  fromYear={1993}
  toYear={2024}
  value={value?.toString()}
  onChange={onChange}
/>;
```

## Limitations

- If no `toYear` is passed, uses current year as `toYear`
- If no `fromYear` is passed uses `1900`

## Tested Browsers

[chrome]: https://github.com/alrra/browser-logos/raw/master/src/chrome/chrome_64x64.png
[opera]: https://github.com/alrra/browser-logos/raw/master/src/opera/opera_64x64.png
[edge_12-18]: https://github.com/alrra/browser-logos/raw/master/src/archive/edge_12-18/edge_12-18_64x64.png
[edge]: https://github.com/alrra/browser-logos/raw/master/src/edge/edge_64x64.png
