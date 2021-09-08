import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import image from '../../Assets/keith-camilleri-sV_3SBuiS4I-unsplash.jpg';

const PageOne = () => {
	const [display, setDisplay] = useState(0);

	let h1Container1 = useRef();
	let h1Container2 = useRef();
	let h1Container3 = useRef();
	let h1Container4 = useRef();

	useEffect(() => {
		const containers = [
			h1Container1.current,
			h1Container2.current,
			h1Container3.current,
			h1Container4.current,
		];

		gsap.to(containers, {
			duration: 3,
			opacity: 1,
			ease: 'slow(7 7, 7 7, false)',
			x: 50,
			stagger: 0.75,
		});
	}, []);

	const handleClick = e => {
		console.log(e.target.id);
		if (display === e.target.id) {
			setDisplay(0);
		} else {
			setDisplay(e.target.id);
		}
	};

	return (
		<>
			<div className='Body Page-One soehne-breit-extraleicht'>
				<h1 style={{ fontSize: 70 }} className='soehne-breit-halbfett'>
					What I Value:
				</h1>
				<div
					style={display === 0 || display === '1' ? null : { display: 'none' }}
					ref={h1Container1}
					className='h1-container'
				>
					<h1>Sleeve Roll-er-up-er</h1>
					<h1 id='1' onClick={handleClick} style={{ cursor: 'pointer' }}>
						{display === '1' ? 'ˇ' : '+'}
					</h1>
				</div>
				{display === '1' ? (
					<div style={{ position: 'relative' }}>
						<div style={{ position: 'absolute' }}>
							<p>
								I am ambitions, adept at working at a very detailed level, and
								have streaks of competitiveness and perfectionism (working on
								those). When I need to tackle a complex problem, I like to start
								by asking "Where are we now?" and, "What are the facts?". I use
								systematic techniques in my day-to-day work and avoid forming
								opinions that are data immune. In general I enjoy learning,
								evidenced by my career pivot to engineering at 30.
								Professionally, I enjoy and using data to challenge my work and
								shape my POV.
							</p>
							<img
								src={image}
								alt='unsplash'
								style={{
									position: 'absolute',
									left: 100,
									top: 10,
									width: 400,
									height: 400,
								}}
							/>
						</div>
					</div>
				) : null}
				<div
					style={display === 0 || display === '2' ? null : { display: 'none' }}
					ref={h1Container2}
					className='h1-container'
				>
					<h1>Devil's In the Details</h1>
					<h1 id='2' onClick={handleClick} style={{ cursor: 'pointer' }}>
						{display === '2' ? 'ˇ' : '+'}
					</h1>
				</div>
				{display === '2' ? (
					<div style={{ position: 'relative' }}>
						<div style={{ position: 'absolute' }}>
							<p>
								In my view, facts‐of‐the‐matter are key, but I try not to allow
								them to fetter the bounds of my imagination. I use evidence as a
								starting point and as I build up, I allow my ideas free-reign.
								This assures my innovations are more powerful in the long run. I
								have a keen awareness that attention to detail can lead to
								tunnel vision, so I've learned how to take a step away when I
								need to in order to consider whether the data being considered
								is the correct or relevant data at all.
							</p>
							<img
								src={image}
								alt='unsplash'
								style={{
									position: 'absolute',
									left: 100,
									top: 10,
									width: 400,
									height: 400,
								}}
							/>
						</div>
					</div>
				) : null}
				<div
					style={display === 0 || display === '3' ? null : { display: 'none' }}
					ref={h1Container3}
					className='h1-container'
				>
					<h1>Pluck</h1>
					<h1 id='3' onClick={handleClick} style={{ cursor: 'pointer' }}>
						{display === '3' ? 'ˇ' : '+'}
					</h1>
				</div>
				{display === '3' ? (
					<div style={{ position: 'relative' }}>
						<div style={{ position: 'absolute' }}>
							<p>
								When faced with a head on challenge, I am very capable of taking
								a tough and unyielding stance. Regarding my goals and passions,
								I'm frequently outspoken, and will argue my position forcefully,
								not easily conceding ground to another point of view. I do not
								hold back or moderate my behavior in order to avoid conflict.
								<br />
								<br />
								In fact, I see some conflict as a good thing, knowing it can
								clear the air and bring awareness to things previously left
								unspoken. Oftentimes, I think that reservations about a course
								of action within a team are better brought out into the open
								than contained and left to fester. I consider myself well aware
								of the risk of telling people what they want to hear just to
								please them.
							</p>
							<img
								src={image}
								alt='unsplash'
								style={{
									position: 'absolute',
									left: 100,
									top: 10,
									width: 400,
									height: 400,
								}}
							/>
						</div>
					</div>
				) : null}
				<div
					style={display === 0 || display === '4' ? null : { display: 'none' }}
					ref={h1Container4}
					className='h1-container'
				>
					<h1>Brass Tacks</h1>
					<h1 id='4' onClick={handleClick} style={{ cursor: 'pointer' }}>
						{display === '4' ? 'ˇ' : '+'}
					</h1>
				</div>
				{display === '4' ? (
					<div style={{ position: 'relative' }}>
						<div style={{ position: 'absolute' }}>
							<p>
								My abilities to be tough and take a strict no‐nonsense approach
								to situations are useful when I am dealing with difficult
								situations. I've found that where others procrastinate, I can
								see when it is necessary to cut to the heart of the matter and
								ensure that swift action is taken. In situations when hesitation
								is just as dangerous as inaction, I've found these skills to be
								crucial.
							</p>
							<img
								src={image}
								alt='unsplash'
								style={{
									position: 'absolute',
									left: 100,
									top: 10,
									width: 400,
									height: 400,
								}}
							/>
						</div>
					</div>
				) : null}
			</div>
		</>
	);
};

export default PageOne;
