'use strict';
/**
 * Generates a random string of a given length
 * @example - randomString() //=> "asdf"
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

/** Shuffles an array
 * @example - shuffleArray(["😏", "🤣", "🙅🏻‍♂️", "🎂"]) //=> [ '🙅🏻‍♂️', '🤣', '😏', '🎂' ]
 */
export function shuffleArray<T>(array: T[]): T[] {
	return array.sort(() => Math.random() - 0.5);
}

/** Returns a random item from an array
 * @example - randomArrayItem(["😏", "🤣", "🙅🏻‍♂️", "🎂"]) //=> '🙅🏻‍♂️'
 */
export function randomArrayItem<T>(array: T[]): T {
	return array[Math.floor(Math.random() * array.length)];
}

/** Picks random items from an array
 * @example - randomItemsArray(["😏", "🤣", "🙅🏻‍♂️", "🎂"]) //=> [ '🙅🏻‍♂️', '🤣', '😏', '🎂' ]
 */

export function randomItemsArray<T>(array: T[], count: number = 5): T[] {
	let shuffledArray = shuffleArray(array);
	return shuffledArray.slice(0, count);
}

/** Picks unique items from an array, only for Strings and Numbers
 * @example - uniqueArrayitems(["😏", "🤣", "🙅🏻‍♂️", "🎂", "😏", "🤣", "🙅🏻‍♂️", "🎂", "👏", "👏🏻"]) //=> [ '🙅🏻‍♂️', '🤣', '😏', '🎂', '👏', '👏🏻' ]
 */

export function uniqueArrayitems<T extends string | number>(array: T[]): T[] {
	return [...new Set(array)];
}

// Exporting a random object with functions
export function random() {
	return {
		string: randomString,
		number: randomNumber,
		binary: binary,
	};
}
