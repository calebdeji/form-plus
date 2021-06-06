import Banner from './components/Banner';
import HomeHeader from './components/Header';
import Template from './components/Template';
import Footer from './components/Footer';
import ContentProvider from './providers/ContentProvider';

const Home = () => {
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
