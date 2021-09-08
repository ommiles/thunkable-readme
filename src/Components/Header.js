export const Header = ({ setPageNumber }) => {
	return (
		<div className='Header'>
			<h1
				className='soehne-breit-extrafett'
				onClick={() => setPageNumber(0)}
				style={{ cursor: 'pointer' }}
			>
				Thunkable
			</h1>
			<h4>README</h4>
		</div>
	);
};
