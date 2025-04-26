import { render } from 'preact';

import '../index.css';
import { Popup } from './popup';

const rootContainer = document.getElementById('__root');
if (!rootContainer) throw new Error("Can't find root container");

render(<Popup />, rootContainer);
