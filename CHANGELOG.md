# Changelog

All notable changes to this project will be documented in this file.

## [1.2.0] - 2026-03-29

### Added
- `slugify(text)` — Convert string to URL-safe slug
- `truncate(str, length)` — Truncate string with ellipsis
- `sleep(ms)` — Async sleep helper
- `chunk(array, size)` — Split array into chunks
- `formatNumber(num)` — Format numbers with K/M/B suffixes
- `debounce(fn, delay)` — Debounce function calls
- `capitalize(str)` — Capitalize first letter
- `isEmpty(value)` — Check if value is empty
- `deepClone(obj)` — Deep clone objects
- Vitest test suite for all functions

### Fixed
- `shuffleArray()` no longer mutates the original array
- Renamed `uniqueArrayitems` to `uniqueArrayItems` (consistent casing)
- Added security warning to `randomString()` (not for tokens/passwords)

## [1.1.2] - Previous

### Features
- `randomString`, `randomNumber`, `binary`
- `shuffleArray`, `randomArrayItem`, `randomItemsArray`, `uniqueArrayitems`
- DOM utilities: `querySelector`, `querySelectorAll`, `toggleClass`, `createNewElement`, `appendToParentElement`
