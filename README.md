# @amitind/util

TypeScript-ready JavaScript utility functions to save time in your projects.

## Installation

### NPM

```bash
npm i @amitind/util
```

### JSR (Deno)

```bash
deno add jsr:@impl/util
```

## Usage

### ES Modules

```javascript
import { randomString, randomNumber } from '@amitind/util';
// or for JSR
import { randomString, randomNumber } from '@impl/util';
```

### CommonJS

```javascript
const { randomString, randomNumber } = require('@amitind/util');
// or for JSR
const { randomString, randomNumber } = require('@impl/util');
```

## Available Functions

### Array Utilities

-   `shuffleArray<T>(array: T[]): T[]` - Randomly shuffles an array
-   `randomArrayItem<T>(array: T[]): T` - Returns a random item from an array
-   `randomItemsArray<T>(array: T[], count?: number): T[]` - Returns multiple random items from an array
-   `uniqueArrayItems<T>(array: T[]): T[]` - Returns array with unique items

### Random Generators

-   `randomString(length?: number): string` - Generates a random string
-   `randomNumber(min?: number, max?: number): number` - Generates a random number in range
-   `binary(): boolean` - Returns a random boolean value

### DOM Utilities

-   `querySelector<T>(selector: string, parent?: ParentNode): T | null` - Enhanced querySelector
-   `querySelectorAll<T>(selector: string, parent?: ParentNode): T[]` - Enhanced querySelectorAll
-   `toggleClass(id: string, className?: string): void` - Toggle class on element

## Examples

```javascript
// Generate a random 8-character string
const str = randomString(8); // => "k3m1p9x2"

// Get a random number between 1 and 10
const num = randomNumber(1, 10); // => 7

// Shuffle an array
const arr = shuffleArray(['😏', '🤣', '🙅🏻‍♂️', '🎂']);
// => [ '🙅🏻‍♂️', '🤣', '😏', '🎂' ]

// Get random items from array
const items = randomItemsArray(['A', 'B', 'C', 'D'], 2);
// => ["C", "A"]
```

## License

MIT © [Amit Yadav](https://github.com/Amitind)
