"use strict";
/**
 * When to use Arrow Functions?
 *  - https://www.youtube.com/watch?v=5iGGvJn8K1U
 *
 *  import { random } from "@amitind/util";
 *  const util = require("@amitind/util");
 * How to Write comments
 *  - https://jsdoc.app/tags-param.html
 */

/**************************************
 * Complex Functions
 ***************************************/

/**function that returns another function,
 * Easy to import and use
 * @returns {object} - object with functions
 */

function random() {
	return {
		string: randomString,
		number: randomNumber,
		binary: binary,
	};
}

/**************************************
 * Single Functions
 ***************************************/

/** Returns a random string of specified length
 * @param {number=} length - length of the string, default is 4
 * @returns {string} - random string
 *
 */

function randomString(length = 4) {
	return Math.random()
		.toString(36)
		.slice(2, length + 2);
}

/** Returns a random number between min and max
 * @param {number=} min - minimum number, default is 0
 * @param {number=} max - maximum number, default is 100
 * @returns {number} - random number
 * @example - randomNumber() //=> 23
 */
function randomNumber(min = 0, max = 100) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Returns true or false
 * @returns {boolean} - true or false
 * @example - binary() //=> true
 */

function binary() {
	return Boolean(randomNumber(0, 1))
}
binary() //=

/** Shuffles an array
 * @param {array} array - array to be shuffled
 * @returns {array} - shuffled array
 * @example - shuffleArray(["😏", "🤣", "🙅🏻‍♂️", "🎂"]) //=> [ '🙅🏻‍♂️', '🤣', '😏', '🎂' ]
 * //array is sorted based on value of Math.random() - 0.5 by doing string comparison.
 */

function shuffleArray(array) {
	return array.sort(() => Math.random() - 0.5);
}

/** Picks random item from an array
 * @param {array} array - array from which random item will be picked
 * @returns {(string | number)} - random array item that can be any type
 * @example - randomArrayItem(["😏", "🤣", "🙅🏻‍♂️", "🎂"]) //=> '🙅🏻‍♂️'
 */

function randomArrayItem(array) {
	return array[Math.floor(Math.random() * array.length)];
}


/** Picks random items from an array
 * @param {array} array - array from which shuffled items will be picked
 * @param {number=} count - number of items to be picked, default is 5
 * @returns {array} - shuffled array items
 * @example - randomItemsArray(["😏", "🤣", "🙅🏻‍♂️", "🎂"]) //=> [ '🙅🏻‍♂️', '🤣', '😏', '🎂' ]
 */

function randomItemsArray(array, count = 5) {
	let shuffledArray = shuffleArray(array);
	return shuffledArray.slice(0, count);
}

/** Picks unique items from an array
 * @param {array} array - array from which unique items will be picked
 * @returns {array} - unique array items
 * @example - uniqueArrayitems(["😏", "🤣", "🙅🏻‍♂️", "🎂", "😏", "🤣", "🙅🏻‍♂️", "🎂", "👏", "👏🏻"]) //=> [ '🙅🏻‍♂️', '🤣', '😏', '🎂', '👏', '👏🏻' ]
 */

function uniqueArrayitems(array) {
	return [...new Set(array)];
}

/** Creates a new element with classes
 * @param {string} elementType - type of element to be created,
 * @param {array} classesArray - ["class1","class2"] - array of classes to be added to the element
 * @param {object} attributes - { id: 'id1', 'data-id': 'data-id1' } - object of attributes to be added to the element
 * @returns {object} - new element
 * @example - createElement('div', ['class1', 'class2'], { id: 'id1', 'data-id': 'data-id1' })
 */

function createNewElement(elementType, classesArray = [], attributes = {}) {
	let newElement = document.createElement(elementType);
	classesArray.forEach((classItem, index) => {
		newElement.classList.add(classesArray[index]);
	});
	Object.keys(attributes).forEach((attribute) => {
		newElement.setAttribute(attribute, attributes[attribute]);
	});
	return newElement;
}

/** Appends elements to parent element
 * @param {array} elementsArray - array of elements
 * @param {object} parentElement - default is **document.body** - parent element to which elements will be appended to,
 * @returns nothing returned
 * @example - appendToParent([newElement, newElement], parentElement)
 */

function appendToParentElement(elementsArray, parentElement = document.body) {
	elementsArray.forEach((element, index) => {
		parentElement.appendChild(elementsArray[index]);
	});
}

/** Queries all elements from parent element
 * @param {string} selector - **#id** or  **.class** selector to be used to query the element
 * @param {element} parentElement - default is **document.body** - parent element from which element will be queried
 * @returns {array} - element
 * @example - querySelectorAll('#id1', parentElement)
 */

function querySelectorAll(selector, parentElement = document.body) {

	return [...parentElement.querySelectorAll(selector)];
}

/** Queries an element from parent element
 * @param {string} selector - **#id** or  **.class** selector to be used to query the element
 * @param {element} parentElement - default is **document.body** - parent element from which element will be queried
 * @returns {element} - element
 * @example - querySelector('#id1', parentElement)
 */

function querySelector(selector, parentElement = document.body) {
	return parentElement.querySelector(selector);
}

module.exports = {
	random,
	randomString,
	randomNumber,
	binary,
	shuffleArray,
	randomArrayItem,
	randomItemsArray,
	uniqueArrayitems,
	createNewElement,
	appendToParentElement,
	querySelectorAll,
	querySelector
}