# Size Reference (named scales: xs, sm, md, lg, xl…)

Several utility families share the same T-shirt naming convention
(`xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, …) but each family maps
those names to its own values. Use this as the single source of truth so
naming stays consistent when adding new size-scale utilities.

## rounded-* (border-radius)

`css/rounded.css` — also applies to every side/corner variant
(`rounded-t-*`, `rounded-tl-*`, `rounded-s-*`, `rounded-ss-*`, etc.).

| Name | Value |
|---|---|
| (none, `.rounded`) | `0.25rem` |
| xs | `0.125rem` |
| sm | `0.25rem` |
| md | `0.375rem` |
| lg | `0.5rem` |
| xl | `0.75rem` |
| 2xl | `1rem` |
| 3xl | `1.5rem` |
| 4xl | `2rem` |
| none | `0` |
| full | `calc(infinity * 1px)` |

## text-* (font-size)

`css/text/size.css` — pairs each font size with a fixed line-height.

| Name | Font size | Line height |
|---|---|---|
| xs | `0.75rem` | 1.3333 |
| sm | `0.875rem` | 1.4286 |
| base | `1rem` | 1.5 |
| lg | `1.125rem` | 1.5556 |
| xl | `1.25rem` | 1.4 |
| 2xl | `1.5rem` | 1.3333 |
| 3xl | `1.875rem` | 1.2 |
| 4xl | `2.25rem` | 1.1111 |
| 5xl | `3rem` | 1 |
| 6xl | `3.75rem` | 1 |
| 7xl | `4.5rem` | 1 |
| 8xl | `6rem` | 1 |
| 9xl | `8rem` | 1 |

## shadow-* (box-shadow)

`css/shadow.css` — size names also apply to `shadow-{family}-{shade}` tinted variants.

| Name | Value |
|---|---|
| 2xs | `0 1px rgb(0 0 0 / 0.05)` |
| xs | `0 1px 2px 0 rgb(0 0 0 / 0.05)` |
| sm | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)` |
| md | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` |
| lg | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` |
| xl | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` |
| 2xl | `0 25px 50px -12px rgb(0 0 0 / 0.25)` |
| none | `none` |

### inset-shadow-* (inset box-shadow)

Only a partial scale exists so far.

| Name | Value |
|---|---|
| 2xs | `inset 0 1px rgb(0 0 0 / 0.05)` |
| xs | `inset 0 1px 1px rgb(0 0 0 / 0.05)` |
| sm | `inset 0 2px 4px rgb(0 0 0 / 0.05)` |
| none | `none` |

## text-shadow-*

`css/text/shadow.css`

| Name | Value |
|---|---|
| 2xs | `0px 1px 0px rgb(0 0 0 / 0.15)` |
| xs | `0px 1px 1px rgb(0 0 0 / 0.2)` |
| sm | `0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075)` |
| md | `0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1)` |
| lg | `0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1), 0px 4px 8px rgb(0 0 0 / 0.1)` |
| none | `none` |

## blur-* (filter: blur)

`css/filter/blur.css`

| Name | Value |
|---|---|
| xs | `blur(4px)` |
| sm | `blur(8px)` |
| md | `blur(12px)` |
| lg | `blur(16px)` |
| xl | `blur(24px)` |
| 2xl | `blur(40px)` |
| 3xl | `blur(64px)` |
| none | `blur(0)` |

## drop-shadow-* (filter: drop-shadow)

`css/filter/drop-shadow.css`

| Name | Value |
|---|---|
| xs | `drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))` |
| sm | `drop-shadow(0 1px 2px rgb(0 0 0 / 0.15))` |
| md | `drop-shadow(0 3px 3px rgb(0 0 0 / 0.12))` |
| lg | `drop-shadow(0 4px 4px rgb(0 0 0 / 0.15))` |
| xl | `drop-shadow(0 9px 7px rgb(0 0 0 / 0.1))` |
| 2xl | `drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))` |
| none | `drop-shadow(0 0 #0000)` |

## max-w-* / min-w-* / max-h-* / min-h-* (container scale)

`css/sizing/max.css`, `css/sizing/min.css` — this named scale sits alongside
(not on top of) the numeric spacing-scale steps (`w-0`…`w-96`, see below)
and the keyword/viewport/fraction values in the same files.

| Name | Value |
|---|---|
| 3xs | `16rem` |
| 2xs | `18rem` |
| xs | `20rem` |
| sm | `24rem` |
| md | `28rem` |
| lg | `32rem` |
| xl | `36rem` |
| 2xl | `42rem` |
| 3xl | `48rem` |
| 4xl | `56rem` |
| 5xl | `64rem` |
| 6xl | `72rem` |
| 7xl | `80rem` |

> `min-w-*`/`min-h-*` stop at `7xl`; there is no `min-h-{3xs..7xl}` scale, only
> `min-w-*`. Both `max-w-*` and `max-h-*` share the same `3xs`–`7xl` steps above.

## Numeric spacing scale (for comparison)

Not named (`xs`/`sm`/…), but shared across `w-*`, `h-*`, `min-w-*`, `min-h-*`,
`max-w-*`, `max-h-*`, margin and padding: step `n` = `n × 0.25rem` (e.g.
`.w-4` = `1rem`, `.w-96` = `24rem`), plus `-px` (1px) and keyword values
(`full`, `screen`, `min`, `max`, `fit`, `auto`, `none`, and viewport units
`dvh`/`dvw`/`lvh`/`lvw`/`svh`/`svw`). See [`README.md`](README.md) for the
full utility list.
