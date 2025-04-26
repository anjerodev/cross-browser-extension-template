import { Button } from '@/components/ui/button';
import { useState } from 'preact/hooks';

export function Popup() {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div className="flex w-[320px] flex-col space-y-4 p-4">
			<h1 className="font-bold text-xl">Boilerplate Extension</h1>
			<p className="text-muted-foreground text-sm">
				This is a basic popup example. You can customize it further.
			</p>
			<Button variant="accent" className="w-full" onClick={handleClick}>
				Clicked {count} times (default)
			</Button>
		</div>
	);
}
