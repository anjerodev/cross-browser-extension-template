if (typeof browser === 'undefined') {
	// Chrome does not support the browser namespace yet.
	// @ts-ignore
	globalThis.browser = chrome;
}

const STORAGE_SETTINGS_KEY = 'settings';

type Settings = Record<string, string>;

export const getSettings = (): Promise<Settings> => {
	return new Promise(resolve => {
		browser.storage.sync.get([STORAGE_SETTINGS_KEY]).then(result => {
			resolve(result?.[STORAGE_SETTINGS_KEY] || {});
		});
	});
};

export const setSettings = ({
	key,
	value
}: { key: string; value: string }): Promise<void> => {
	return new Promise(resolve => {
		browser.storage.sync
			.set({ [STORAGE_SETTINGS_KEY]: { [key]: value } })
			.then(() => {
				resolve();
			});
	});
};
