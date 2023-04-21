import logo from './harry-hands.jpeg';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>This site is currently under construction and will be back soon.</p><p>  In the meantime</p>
				<a
					className='App-link'
					href='https://www.waitingforsmith.co.uk/'
					target='_blank'
					rel='noopener noreferrer'
				>
					please visit our website
				</a>
			</header>
		</div>
	);
}

export default App;
