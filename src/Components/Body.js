import PageZero from '../Components/Pages/PageZero';
import PageOne from '../Components/Pages/PageOne';
import PageTwo from '../Components/Pages/PageTwo';
import PageThree from '../Components/Pages/PageThree';
import PageFour from '../Components/Pages/PageFour';

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
		case 4:
			return <PageFour />;
		default:
			<PageZero />;
			break;
	}
};
