export function $<T extends HTMLElement>(
	selector: string,
	node: Document | HTMLElement = document
): T | null {
	return node.querySelector(selector);
}

export function $$<T extends HTMLElement>(
	selector: string,
	node: Document | HTMLElement = document
): NodeListOf<T> {
	return node.querySelectorAll(selector);
}
