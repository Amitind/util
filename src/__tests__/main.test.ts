import { describe, it, expect } from 'vitest';
import { 
    randomString, randomNumber, binary, shuffleArray, 
    randomArrayItem, randomItemsArray, uniqueArrayItems,
    slugify, truncate, chunk, formatNumber, debounce,
    capitalize, isEmpty, deepClone
} from '../main';

describe('randomString', () => {
    it('returns string of correct length', () => {
        expect(randomString(8)).toHaveLength(8);
    });
});

describe('shuffleArray', () => {
    it('does not mutate original array', () => {
        const original = [1, 2, 3, 4, 5];
        const originalCopy = [...original];
        shuffleArray(original);
        expect(original).toEqual(originalCopy);
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

describe('chunk', () => {
    it('chunks array into groups', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
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
});

describe('deepClone', () => {
    it('creates deep copy', () => {
        const obj = { a: { b: 1 } };
        const clone = deepClone(obj);
        clone.a.b = 2;
        expect(obj.a.b).toBe(1);
    });
});
