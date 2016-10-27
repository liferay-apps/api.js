'use strict';

const METAL_DATA = '__metal_data__';

class domData {
	/**
	 * Gets Metal.js's data for the given element.
	 * @param {!Element} element
	 * @return {!Object}
	 */
	static get(element) {
		if (!element[METAL_DATA]) {
			element[METAL_DATA] = {
				delegating: {},
				listeners: {}
			};
		}
		return element[METAL_DATA];
	}

	/**
	 * Checks if the given element has data stored in it.
	 * @param {!Element} element
	 * @return {boolean}
	 */
	static has(element) {
		return !!element[METAL_DATA];
	}
}

export default domData;
