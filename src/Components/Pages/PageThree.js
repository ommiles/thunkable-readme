import { useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

const PageThree = () => {
	useEffect(() => {
		const childSplit = new SplitText('h2', {
			type: 'lines',
			linesClass: 'split-child',
		});

		gsap.from(childSplit.lines, {
			duration: 1.5,
			yPercent: 100,
			ease: 'power3',
			stagger: 0.1,
		});
	}, []);
	return (
		<div
			className='Body Page-Three soehne-breit-extraleicht'
			style={{ position: 'relative' }}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<h2>How I prefer to communicate with others:</h2>
				<p style={{ paddingBottom: 50 }}>
					In a discussion I typically will only contribute after analyzing the
					situation and will have fully considered any of my points before
					sharing them. I like to discuss every aspect of a project, and am
					meticulous with detail. I try not to, however, let this hinder myself
					from exercising my imagination. I prefer to share well‐formed,
					rational ideas with my direct team, but also like to socialize and
					make conversation with other team members. I prefer to communicate in
					writing as this ensures clarity of meaning, but am not afraid to
					demonstrate practically and in person where necessary.
				</p>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<h2>How I like others to communicate with me:</h2>
				<p style={{}}>
					I like people who are fully aware of the current situation, and have
					evidence to back up their points or analysis and support their
					arguments rationally. While I do hold myself back a lot of times in a
					professional environment, I highly enjoy talking to open people and
					like having some small talk (my previous industry was very relaxed and
					casual in this area!). I like discussing ideas that are presented to
					me in a serious enough manner where I can understand them, and with
					enough energy and enthusiasm that I feel engaged.
				</p>
			</div>
		</div>
	);
};

export default PageThree;
