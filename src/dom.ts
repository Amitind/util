'use strict';

const isBrowser =
	typeof window !== 'undefined' && typeof document !== 'undefined';

const getDefaultParent = () => {
	if (!isBrowser) {
		throw new Error(
			'DOM functions can only be used in browser environment'
		);
	}
	return document.body;
};

/** Creates a new element with classes
 * @example - createNewElement('div', ['class1', 'class2'], { id: 'id1', 'data-id': 'data-id1' })
 */
export function createNewElement(
	elementType: keyof HTMLElementTagNameMap,
	classesArray: string[] = [],
	attributes: Record<string, string | number> = {}
): HTMLElement {
	let newElement = document.createElement(elementType);
	classesArray.forEach((classItem) => {
		newElement.classList.add(classItem);
	});
	Object.entries(attributes).forEach(([attribute, value]) => {
		newElement.setAttribute(attribute, value.toString());
	});
	return newElement;
}

/** Appends elements to parent element
 * @example - appendToParent([createNewElement('div'), document.querySelector('#id1')], parentElement)
 * @tip - use createNewElement to create new elements
 */
export function appendToParentElement(
	elementsArray: HTMLElement[],
	parentElement: HTMLElement = getDefaultParent()
): void {
	elementsArray.forEach((element) => {
		parentElement.appendChild(element);
	});
}
/** Queries all elements from parent element
 * @example - querySelectorAll('#id1', parentElement) => [element1, element2]
 */
export function querySelectorAll<T extends Element = Element>(
	selector: string,
	parentElement: ParentNode = getDefaultParent()
): T[] {
	return Array.from(parentElement.querySelectorAll<T>(selector));
}

/** Queries an element from parent element
 * @example - querySelector('#id1', parentElement) => element
 */

export function querySelector<T extends Element = Element>(
	selector: string,
	parentElement: ParentNode = getDefaultParent()
): T | null {
	return parentElement.querySelector<T>(selector);
}

/**
 * Toggle Class in passed element, default class is **.hidden**
 * @example toggleClass("#id"), toggleClass(".class")
 */
export function toggleClass(id: string, className: string = 'hidden'): void {
	const element = querySelector(id);
	if (element) {
		element.classList.toggle(className);
	}
}
