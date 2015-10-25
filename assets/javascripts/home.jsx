import ReactDOM from 'react-dom';
import Hello from './Hello';

ReactDOM.render(
	<div>
		<Hello name='World!' />
		<p>hahaha</p>
		<Hello name='World!' />
	</div>,
	document.getElementById('hello'));
