import { useState } from 'react';
import { Provider } from 'react-redux';

import store from 'app/redux';
import Select from 'app/components/Select';
import Search from 'app/components/Search';
import Body from 'app/components/Body';

function App() {
	const [state, setState] = useState('');

	return (
		<Provider store={store}>
			<Body>
				<Select
					label="Category"
					options={[
						{ label: 'Test', value: 'Test' },
						{ label: 'Test1', value: 'Test1' },
						{ label: 'Test2', value: 'Test2' },
					]}
					value={state}
					onChange={(value) => {
						setState(value);
					}}
				/>
				<br />
				<Search />
			</Body>
		</Provider>
	);
}

export default App;
