'use strict';
/**
 * Generates a random string of a given length
 * @example - randomString() //=> "asdf"
 * @warning Not cryptographically secure. Use crypto.randomUUID() for tokens/passwords.
 */
export function randomString(length: number = 4): string {
	return Array.from({ length }, () => {
		return Math.random().toString(36).charAt(2);
	}).join('');
}

/** Returns a random number between min and max
 * @example - randomNumber() //=> 23
 */
export function randomNumber(min: number = 0, max: number = 100): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Returns true or false
 * @example - binary() //=> true
 */
export function binary(): boolean {
	return Boolean(randomNumber(0, 1));
}

/** Shuffles an array (does not mutate original)
 * @example - shuffleArray(["😏", "🤣", "🙅🏻♂️", "🎂"]) //=> [ '🙅🏻♂️', '🤣', '😏', '🎂' ]
 */
export function shuffleArray<T>(array: T[]): T[] {
	const result = [...array];
	for (let i = result.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[result[i], result[j]] = [result[j], result[i]];
	}
	return result;
}

/** Returns a random item from an array
 * @example - randomArrayItem(["😏", "🤣", "🙅🏻♂️", "🎂"]) //=> '🙅🏻♂️'
 */
export function randomArrayItem<T>(array: T[]): T {
	return array[Math.floor(Math.random() * array.length)];
}

/** Picks random items from an array
 * @example - randomItemsArray(["😏", "🤣", "🙅🏻♂️", "🎂"]) //=> [ '🙅🏻♂️', '🤣', '😏', '🎂' ]
 */
export function randomItemsArray<T>(array: T[], count: number = 5): T[] {
	const shuffledArray = shuffleArray(array);
	return shuffledArray.slice(0, count);
}

/** Picks unique items from an array, only for Strings and Numbers
 * @example - uniqueArrayItems(["😏", "🤣", "🙅🏻♂️", "🎂", "😏", "🤣", "🙅🏻♂️", "🎂", "👏", "👏🏻"]) //=> [ '🙅🏻♂️', '🤣', '😏', '🎂', '👏', '👏🏻' ]
 */
export function uniqueArrayItems<T extends string | number>(array: T[]): T[] {
	return [...new Set(array)];
}

/** @deprecated Use uniqueArrayItems instead */
export const uniqueArrayitems = uniqueArrayItems;

/** Slugify a string for URLs */
export function slugify(text: string): string {
	return text
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

/** Truncate string with ellipsis */
export function truncate(str: string, length: number = 100): string {
	if (str.length <= length) return str;
	return str.slice(0, length).trimEnd() + '...';
}

/** Sleep for ms milliseconds */
export function sleep(ms: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, ms));
}

/** Chunk array into groups of size */
export function chunk<T>(array: T[], size: number): T[][] {
	if (size < 1) throw new Error('Chunk size must be at least 1');
	const result: T[][] = [];
	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size));
	}
	return result;
}

/** Format number with K/M/B suffixes */
export function formatNumber(num: number): string {
	if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
	if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
	if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
	return num.toString();
}

/** Debounce function */
export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number = 300): ((...args: Parameters<T>) => void) & { cancel: () => void; flush: () => void } {
	let timeoutId: ReturnType<typeof setTimeout>;
	let lastArgs: Parameters<T> | undefined;

	const debounced = (...args: Parameters<T>) => {
		lastArgs = args;
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn(...args), delay);
	};

	debounced.cancel = () => {
		clearTimeout(timeoutId);
		lastArgs = undefined;
	};

	debounced.flush = () => {
		if (lastArgs !== undefined) {
			clearTimeout(timeoutId);
			fn(...lastArgs);
			lastArgs = undefined;
		}
	};

	return debounced;
}

/** Capitalize first letter */
export function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Check if value is empty (null, undefined, empty string, empty array, empty object) */
export function isEmpty(value: unknown): boolean {
	if (value == null) return true;
	if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;
	if (typeof value === 'object') return Object.keys(value).length === 0;
	return false;
}

/** Deep clone an object (JSON-based: loses functions, undefined, Dates become strings, no circular refs) */
export function deepClone<T>(obj: T): T {
	return JSON.parse(JSON.stringify(obj));
}