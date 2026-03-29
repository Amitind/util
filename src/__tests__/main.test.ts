import { describe, it, expect } from 'vitest';
import {
	randomString,
	randomNumber,
	binary,
	shuffleArray,
	randomArrayItem,
	randomItemsArray,
	uniqueArrayItems,
	slugify,
	truncate,
	sleep,
	chunk,
	formatNumber,
	debounce,
	capitalize,
	isEmpty,
	deepClone,
} from '../main';

describe('randomString', () => {
	it('returns string of correct length', () => {
		expect(randomString(8)).toHaveLength(8);
	});
	it('defaults to length 4', () => {
		expect(randomString()).toHaveLength(4);
	});
});

describe('randomNumber', () => {
	it('returns number within range', () => {
		for (let i = 0; i < 100; i++) {
			const n = randomNumber(1, 10);
			expect(n).toBeGreaterThanOrEqual(1);
			expect(n).toBeLessThanOrEqual(10);
		}
	});
	it('returns integer', () => {
		expect(Number.isInteger(randomNumber())).toBe(true);
	});
});

describe('binary', () => {
	it('returns boolean', () => {
		const result = binary();
		expect(typeof result).toBe('boolean');
	});
});

describe('shuffleArray', () => {
	it('does not mutate original array', () => {
		const original = [1, 2, 3, 4, 5];
		const originalCopy = [...original];
		shuffleArray(original);
		expect(original).toEqual(originalCopy);
	});
	it('returns all original items', () => {
		const original = [1, 2, 3, 4, 5];
		const shuffled = shuffleArray(original);
		expect([...shuffled].sort()).toEqual([...original].sort());
	});
});

describe('randomArrayItem', () => {
	it('returns item from array', () => {
		const arr = ['a', 'b', 'c'];
		expect(arr).toContain(randomArrayItem(arr));
	});
});

describe('randomItemsArray', () => {
	it('returns requested count of items', () => {
		const arr = [1, 2, 3, 4, 5];
		expect(randomItemsArray(arr, 3)).toHaveLength(3);
	});
	it('returns items from original array', () => {
		const arr = [1, 2, 3];
		const items = randomItemsArray(arr, 2);
		for (const item of items) {
			expect(arr).toContain(item);
		}
	});
});

describe('uniqueArrayItems', () => {
	it('removes duplicates', () => {
		expect(uniqueArrayItems([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
	});
	it('preserves unique items', () => {
		expect(uniqueArrayItems(['a', 'b', 'a'])).toEqual(['a', 'b']);
	});
});

describe('slugify', () => {
	it('converts text to URL slug', () => {
		expect(slugify('Hello World!')).toBe('hello-world');
		expect(slugify('  Spaces & Special! ')).toBe('spaces-special');
	});
});

describe('truncate', () => {
	it('truncates long strings', () => {
		expect(truncate('Hello World', 5)).toBe('Hello...');
	});
	it('returns short strings unchanged', () => {
		expect(truncate('Hi', 10)).toBe('Hi');
	});
});

describe('sleep', () => {
	it('resolves after delay', async () => {
		const start = Date.now();
		await sleep(50);
		expect(Date.now() - start).toBeGreaterThanOrEqual(40);
	});
});

describe('chunk', () => {
	it('chunks array into groups', () => {
		expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
	});
	it('throws on invalid chunk size', () => {
		expect(() => chunk([1, 2], 0)).toThrow('Chunk size must be at least 1');
	});
});

describe('formatNumber', () => {
	it('formats with K/M/B suffixes', () => {
		expect(formatNumber(1500)).toBe('1.5K');
		expect(formatNumber(2000000)).toBe('2M');
		expect(formatNumber(3500000000)).toBe('3.5B');
		expect(formatNumber(500)).toBe('500');
	});
});

describe('debounce', () => {
	it('delays function execution', async () => {
		let count = 0;
		const fn = debounce(() => { count++; }, 50);
		fn();
		fn();
		fn();
		expect(count).toBe(0);
		await sleep(100);
		expect(count).toBe(1);
	});
	it('cancel prevents execution', async () => {
		let count = 0;
		const fn = debounce(() => { count++; }, 50);
		fn();
		fn.cancel();
		await sleep(100);
		expect(count).toBe(0);
	});
});

describe('capitalize', () => {
	it('capitalizes first letter', () => {
		expect(capitalize('hello')).toBe('Hello');
	});
});

describe('isEmpty', () => {
	it('detects empty values', () => {
		expect(isEmpty(null)).toBe(true);
		expect(isEmpty(undefined)).toBe(true);
		expect(isEmpty('')).toBe(true);
		expect(isEmpty([])).toBe(true);
		expect(isEmpty({})).toBe(true);
		expect(isEmpty('hello')).toBe(false);
		expect(isEmpty([1])).toBe(false);
	});
	it('handles Map and Set', () => {
		expect(isEmpty(new Map())).toBe(true);
		expect(isEmpty(new Set())).toBe(true);
		expect(isEmpty(new Map([['a', 1]]))).toBe(false);
		expect(isEmpty(new Set([1]))).toBe(false);
	});
});

describe('deepClone', () => {
	it('creates deep copy', () => {
		const obj = { a: { b: 1 } };
		const clone = deepClone(obj);
		clone.a.b = 2;
		expect(obj.a.b).toBe(1);
	});
});
