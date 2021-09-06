import React, { useState } from 'react';
import '../../CSS/Cursor.css';
import { Cube } from '../Cube';
import exit from '../../Assets/png-transparent-exit-sign-emergency-exit-exit-s-angle-flag-text.png';

const PageZero = () => {
	const [displayH1, setDisplayH1] = useState(true);
	const [displayX, setDisplayX] = useState(false);
	const [color, setColor] = useState(false);

	return (
		<div className="Body Page-Zero">
			{displayH1 === true ? (
				<div
					className="container-1 domaine-sans-fine-med"
					onClick={() => setDisplayH1(false)}
					onMouseEnter={() => setColor(true)}
					onMouseLeave={() => setColor(false)}
				>
					<h1 style={color === true ? { color: 'yellow' } : { color: 'white' }}>
						tl;dr
					</h1>
					<span
						class="blinking-cursor"
						style={color === true ? { color: 'yellow' } : { color: 'white' }}
					>
						|
					</span>
				</div>
			) : (
				<div className="container-2">
					<div className="div" style={{ margin: 0 }}>
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
							onClick={() => setDisplayH1(true)}
							onMouseEnter={() => setDisplayX(true)}
							onMouseLeave={() => setDisplayX(false)}
						>
							<p style={{ margin: 0 }}>click cube to pause</p>
							<div></div>
							{displayX === true ? (
								<img
									style={{ width: 73, height: 50 }}
									src={exit}
									alt="exit"
								></img>
							) : (
								<p style={{ margin: 0, paddingRight: 20 }}>X</p>
							)}
						</div>
					</div>

					<Cube />
					{/* <p>
							I am good at keeping my emotions out of the decision making
							process.
						</p>
						<p>
							I focus on the objective truth at all times and refuse to allow
							distractions to impact my judgement.{' '}
						</p>
						<p>I have a great eye for detail which I put to good effect.</p>
						<p>I'm very thorough and very little escapes my attention.</p>
						<p>I consider the impact of my words carefully.</p>
						<p>
							I take note of everything that has been said and every action that
							has come before in order to inform my own ideas... At times, this
							means that I can have a good idea of how the group will react
							before I speak.
						</p> */}
				</div>
			)}
		</div>
	);
};

export default PageZero;
