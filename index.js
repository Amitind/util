/**
 * When to use Arrow Functions?
 *  - https://www.youtube.com/watch?v=5iGGvJn8K1U
 *
 *  import { random } from "@amitind/util";
 *  const util = require("@amitind/util");
 * How to Write comments
 *  - https://jsdoc.app/tags-param.html
 */

/**function that returns another function,
 * Easy to import and use
 * @returns {object} - object with functions
 */

export function random() {
	return {
		string: randomString,
	};
}

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

