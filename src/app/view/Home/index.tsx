import Banner from './components/Banner';
import HomeHeader from './components/Header';
import Template from './components/Template';
import Footer from './components/Footer';
import ContentProvider from './providers/ContentProvider';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/redux/reducers';
import ErrorContainer from 'app/components/ErrorContainer';
import { fetchAllContents } from 'app/redux/contents/actions';

const Home = () => {
	const { status, error } = useSelector((state: RootState) => state.contentReducer);
	const dispatch = useDispatch();

	const handleRetry = () => {
		dispatch(fetchAllContents());
	};

	if (status === 'error' && error) {
		return <ErrorContainer retryAction={handleRetry} message={error} />;
	}

	return (
		<ContentProvider>
			<HomeHeader />
			<Banner />
			<Template />
			<Footer />
		</ContentProvider>
	);
};

export default Home;
