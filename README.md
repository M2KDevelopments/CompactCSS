# Compact CSS

A Tailwind CSS inspired utility library. Get the same useful utility classes you already know, without a build step, config file, or complicated setup process — just link the stylesheets you need and start writing classes.

## Usage

The quickest way to use Compact CSS is via the CDN — link the pre-built, minified stylesheet directly, no download or build step required:

```html
<link rel="stylesheet" href="https://compactcss.online/dist/compact.min.css">

<div class="p-4 text-blue-500 rounded-lg">Hello, Compact CSS</div>
```

Prefer to self-host or only ship the utilities you use? Clone or download this repo and link the individual stylesheets you need from the `css/` folder instead:

```html
<link rel="stylesheet" href="css/spacing/p.css">
<link rel="stylesheet" href="css/text/color.css">
<link rel="stylesheet" href="css/rounded.css">

<div class="p-4 text-blue-500 rounded-lg">Hello, Compact CSS</div>
```

See [`index.html`](index.html) for a full list of available stylesheets and a live demo of every utility class.

## Features

Utility classes for:

- Layout: `display`, `position`, `overflow`, `visibility`, `flex`/`grid`
- Spacing: margin (`m`, `mt`, `mr`, `mb`, `ml`, `mx`, `my`) and padding (`p`, `pt`, `pr`, `pb`, `pl`, `px`, `py`)
- Sizing: `width`, `height`, `min`/`max` constraints
- Typography: `font`, text `align`/`color`/`decoration`/`overflow`/`shadow`/`size`/`underline`/`wrap`
- Backgrounds and borders: `bg`, `border`, `rounded`, `outline`, `shadow`
- Effects and filters: `opacity`, `blur`, `brightness`, `contrast`, `grayscale`, `hue-rotate`, `invert`, `saturate`, `sepia`, `drop-shadow`
- Interactivity: `hover`, `cursor`, `pointer-events`, `scrollbar`
- Misc: `animation`, `duration`, `gap`, UI helpers (`glass`, `bubble`)

See [`colors.md`](colors.md) for the full color palette reference used across these utilities.

## Build

This project uses [lightningcss](https://lightningcss.dev/) to bundle the individual utility stylesheets:

```bash
npm install
npm run build
```
