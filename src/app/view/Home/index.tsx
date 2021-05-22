import { createContext } from 'react';
import Banner from './components/Banner';
import HomeHeader from './components/Header';
import Template from './components/Template';
import Footer from './components/Footer';

const HomeContext = createContext({});

const Home = () => {
	return (
		<HomeContext.Provider value={{}}>
			<HomeHeader />
			<Banner />
			<Template />
			<Footer />
		</HomeContext.Provider>
	);
};

export default Home;
