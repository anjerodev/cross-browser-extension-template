import { useEffect } from 'preact/hooks';

export function Content() {
	useEffect(() => {
		console.log('Content component mounted');
	}, []);

	return null;
}
