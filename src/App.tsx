import { Provider } from 'react-redux';

import store from 'app/redux';
import Body from 'app/components/Body';
import Home from 'app/view/Home';

function App() {
	return (
		<Provider store={store}>
			<Body>
				<Home />
			</Body>
		</Provider>
	);
}

export default App;
