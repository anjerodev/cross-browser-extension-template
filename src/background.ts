if (typeof browser === 'undefined') {
	// Chrome does not support the browser namespace yet.
	// @ts-ignore
	globalThis.browser = chrome;
}

browser.runtime.onInstalled.addListener(() => {
	console.log('Extension installed!');
});
