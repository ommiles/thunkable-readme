import PageZero from '../Components/Pages/PageZero';
import PageOne from '../Components/Pages/PageOne';
import PageTwo from '../Components/Pages/PageTwo';
import PageThree from '../Components/Pages/PageThree';

export const Body = ({ pageNumber }) => {
	switch (pageNumber) {
		case 0:
			return <PageZero />;
		case 1:
			return <PageOne />;
		case 2:
			return <PageTwo />;
		case 3:
			return <PageThree />;
		default:
			<PageZero />;
			break;
	}
};
