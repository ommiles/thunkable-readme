export const Footer = ({ pageNumber, setPageNumber }) => {
	const handleClick = e => {
		e.target.className === 'Left-arrow'
			? pageNumber === 0
				? setPageNumber(0)
				: setPageNumber(pageNumber - 1)
			: pageNumber < 4
			? setPageNumber(pageNumber + 1)
			: setPageNumber(pageNumber);
	};
	return (
		<div className='Footer'>
			<button className='Left-arrow' onClick={handleClick}>
				←
			</button>
			<div className='circle-container'>
				<div
					className='circle'
					id='0'
					style={
						pageNumber === 0
							? { backgroundColor: '#fff' }
							: { backgroundColor: 'transparent' }
					}
				></div>
				<div
					className='circle'
					id='1'
					style={
						pageNumber === 1
							? { backgroundColor: '#fff' }
							: { backgroundColor: 'transparent' }
					}
				></div>
				<div
					className='circle'
					id='2'
					style={
						pageNumber === 2
							? { backgroundColor: '#fff' }
							: { backgroundColor: 'transparent' }
					}
				></div>
				<div
					className='circle'
					id='3'
					style={
						pageNumber === 3
							? { backgroundColor: '#fff' }
							: { backgroundColor: 'transparent' }
					}
				></div>
				<div
					className='circle'
					id='4'
					style={
						pageNumber === 4
							? { backgroundColor: '#fff' }
							: { backgroundColor: 'transparent' }
					}
				></div>
			</div>
			<button className='Right-arrow' onClick={handleClick}>
				→
			</button>
		</div>
	);
};
