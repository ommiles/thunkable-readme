export const Footer = ({ pageNumber, setPageNumber }) => {
	const handleClick = e => {
		e.target.className === 'left-arrow'
			? pageNumber === 0
				? setPageNumber(0)
				: setPageNumber(pageNumber - 1)
			: pageNumber < 3
			? setPageNumber(pageNumber + 1)
			: setPageNumber(pageNumber);
	};
	return (
		<div className='Footer'>
			<button className='Left-arrow' onClick={handleClick}>
				←
			</button>
			<button className='Right-arrow' onClick={handleClick}>
				→
			</button>
		</div>
	);
};
