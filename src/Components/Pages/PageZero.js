import React, { useState, useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
import '../../CSS/Cursor.css';
import { Cube } from '../Cube';

const PageZero = () => {
	const [displayH1, setDisplayH1] = useState(true);
	const [displayX, setDisplayX] = useState(false);

	return (
		<div className="Body Page-Zero">
			{displayH1 === true ? (
				<div className="container-1 domaine-sans-fine-med">
					<h1>tl;dr</h1>
					<span class="blinking-cursor" onClick={() => setDisplayH1(false)}>
						|
					</span>
				</div>
			) : (
				<div className="container-2">
					<div
						className="div"
						onClick={() => setDisplayH1(true)}
						onMouseEnter={() => setDisplayX(true)}
						onMouseLeave={() => setDisplayX(false)}
					>
						{displayX === true ? '👋🏾' : 'x'}
					</div>
					{/* <div> */}
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
					{/* </div> */}
				</div>
			)}
		</div>
	);
};

export default PageZero;
