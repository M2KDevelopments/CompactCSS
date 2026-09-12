# Changelog

All notable changes to this project are documented in this file.

## [1.0.1]

### Added

- **State variants**: `hover:`, `focus:` and `active:` prefixes for every existing utility class (e.g. `hover:bg-blue-500`, `focus:outline-indigo-500`, `active:scale-95`). Each utility now ships three additional selectors — `.hover\:{class}:hover`, `.focus\:{class}:focus` and `.active\:{class}:active` — that apply the same declaration only while the element is in that state.
  - Since variants roughly quadruple the stylesheet size, they ship in a separate bundle, `dist/compact.css` (~3MB), instead of the default `dist/compact.min.css` (~700KB, unchanged, no variants). Link/import `dist/compact.css` to get state variants.
  - Not available when linking the individual per-feature stylesheets in `css/` directly, since the variants are generated at build time rather than hand-authored per file.

## [1.0.0]

- Initial release.
