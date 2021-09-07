import { useState } from 'react';
import '../../CSS/Cursor.css';
import { Cube } from '../Cube';
import exit from '../../Assets/png-transparent-exit-sign-emergency-exit-exit-s-angle-flag-text.png';

const PageZero = () => {
	const [displayH1, setDisplayH1] = useState(true);
	const [displayX, setDisplayX] = useState(false);
	const [color, setColor] = useState(false);

	const toggleTLDROn = e => {
		const footer = e.target.parentNode.parentNode.nextElementSibling;
		footer.classList.add('display-none');
		setDisplayH1(false);
	};

	const toggleTLDROff = e => {
		const footer =
			e.target.parentNode.parentNode.parentNode.parentNode.nextElementSibling;
		footer.classList.remove('display-none');
		setDisplayH1(true);
	};

	return (
		<div className='Body Page-Zero'>
			{displayH1 === true ? (
				<div
					className='container-1 domaine-sans-fine-med'
					onClick={toggleTLDROn}
					onMouseEnter={() => setColor(true)}
					onMouseLeave={() => setColor(false)}
				>
					<h1 style={color === true ? { color: 'yellow' } : { color: 'white' }}>
						tl;dr
					</h1>
					<span
						class='blinking-cursor'
						style={color === true ? { color: 'yellow' } : { color: 'white' }}
					>
						|
					</span>
				</div>
			) : (
				<div className='container-2'>
					<div className='div' style={{ margin: 0 }}>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								padding: 20,
								height: 50,
								backgroundColor: 'black',
							}}
							onClick={toggleTLDROff}
							onMouseEnter={() => setDisplayX(true)}
							onMouseLeave={() => setDisplayX(false)}
						>
							<p style={{ margin: 0 }}>click cube to pause</p>
							{displayX === true ? (
								<img
									style={{ width: 73, height: 50 }}
									src={exit}
									alt='exit'
								></img>
							) : (
								<p style={{ margin: 0, paddingRight: 20 }}>X</p>
							)}
						</div>
					</div>
					<Cube />
				</div>
			)}
		</div>
	);
};

export default PageZero;
