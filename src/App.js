import './CSS/App.css';
import './CSS/Fonts.css';
import { useState } from 'react';
import { Header } from './Components/Header';
import { Body } from './Components/Body';
import { Footer } from './Components/Footer';

function App() {
	const [pageNumber, setPageNumber] = useState(0);

	return (
		<div className='App soehne-breit-leicht'>
			<Header />
			<Body pageNumber={pageNumber} />
			<Footer pageNumber={pageNumber} setPageNumber={setPageNumber} />
		</div>
	);
}

export default App;
