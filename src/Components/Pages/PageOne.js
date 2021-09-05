import React, { useState } from 'react';
import image1 from '../../Assets/marek-piwnicki-VTjrza-1UlE-unsplash.jpg';

const PageOne = () => {
	const [display, setDisplay] = useState(0);

	const hoverOn = (e) => {
		setDisplay(e.target.id);
	};

	const hoverOff = (e) => {
		setDisplay(0);
	};

	return (
		<>
			<div className="Body soehne-breit-extraleicht">
				<h1 style={{ fontSize: 70 }}>What I Value:</h1>
				<h1
					style={{ fontSize: 70, cursor: 'pointer' }}
					id="1"
					onMouseEnter={hoverOn}
					onMouseLeave={hoverOff}
				>
					Sleeve Roll-er-up-er
				</h1>

				<div style={{ position: 'relative' }}>
					<div style={{ position: 'absolute', left: 200, top: 10 }}>
						<p style={{ position: 'absolute', left: 200, top: 10, zIndex: 2 }}>
							I am ambitions, adept at working at a very detailed level, and
							have streaks of competitiveness and perfectionism (working on
							those). When I need to tackle a complex problem, I like to start
							by asking "Where are we now?" and, "What are the facts?". I use
							systematic techniques in my day-to-day work and avoid forming
							opinions that are data immune. In general I enjoy learning,
							evidenced by my career pivot to engineering at 30. Professionally,
							I enjoy and using data to challenge my work and shape my POV.
						</p>
						<img
							src="https://source.unsplash.com/random/480x640"
							alt="unsplash"
							style={{ position: 'absolute', left: 200, top: 10 }}
						/>
					</div>
				</div>

				<h1
					style={{ fontSize: 70, cursor: 'pointer' }}
					id="2"
					onMouseEnter={hoverOn}
					onMouseLeave={hoverOff}
				>
					Devils In the Details
				</h1>

				<div style={{ position: 'relative' }}>
					<div style={{ position: 'absolute', left: 200, top: 10 }}>
						<p style={{ position: 'absolute', left: 200, top: 10, zIndex: 2 }}>
							In my view, facts‐of‐the‐matter are key, but I try not to allow
							them to fetter the bounds of my imagination. I use evidence as a
							starting point and as I build up, I allow my ideas free-reign.
							This assures my innovations are more powerful in the long run. I
							have a keen awareness that attention to detail can lead to tunnel
							vision, so I've learned how to take a step away when I need to in
							order to consider whether the data being considered is the correct
							or relevant data at all.
						</p>
						<img
							src="https://source.unsplash.com/random/480x640"
							alt="unsplash"
							style={{ position: 'absolute', left: 200, top: 10 }}
						/>
					</div>
				</div>

				<h1
					style={{ fontSize: 70, cursor: 'pointer' }}
					id="3"
					onMouseEnter={hoverOn}
					onMouseLeave={hoverOff}
				>
					Pluck
				</h1>

				<div style={{ position: 'relative' }}>
					<div style={{ position: 'absolute', left: 200, top: 10 }}>
						<p style={{ position: 'absolute', left: 200, top: 10, zIndex: 2 }}>
							When faced with a head on challenge, I am very capable of taking a
							tough and unyielding stance. Regarding my goals and passions, I'm
							frequently outspoken, and will argue my position forcefully, not
							easily conceding ground to another point of view. I do not hold
							back or moderate my behavior in order to avoid conflict.
						</p>
						<p style={{ position: 'absolute', left: 200, top: 10, zIndex: 2 }}>
							In fact, I see some conflict as a good thing, knowing it can clear
							the air and bring awareness to things previously left unspoken.
							Oftentimes, I think that reservations about a course of action
							within a team are better brought out into the open than contained
							and left to fester. I consider myself well aware of the risk of
							telling people what they want to hear just to please them.
						</p>
						<img
							src="https://source.unsplash.com/random/480x640"
							alt="unsplash"
							style={{ position: 'absolute', left: 200, top: 10 }}
						/>
					</div>
				</div>

				<h1
					style={{ fontSize: 70, cursor: 'pointer' }}
					id="4"
					onMouseEnter={hoverOn}
					onMouseLeave={hoverOff}
				>
					Brass Tacks
				</h1>

				<div style={{ position: 'relative' }}>
					<div style={{ position: 'absolute', left: 200, top: 10 }}>
						<p style={{ position: 'absolute', left: 200, top: 10, zIndex: 2 }}>
							My abilities to be tough and take a strict no‐nonsense approach to
							situations are useful when I am dealing with difficult situations.
							I've found that where others procrastinate, I can see when it is
							necessary to cut to the heart of the matter and ensure that swift
							action is taken. In situations when hesitation is just as
							dangerous as inaction, I've found these skills to be crucial.
						</p>
						<img
							src="https://source.unsplash.com/random/480x640"
							alt="unsplash"
							style={{ position: 'absolute', left: 200, top: 10 }}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default PageOne;
