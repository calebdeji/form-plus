import { useRef, useEffect, EffectCallback, DependencyList } from 'react';

const useComponentDidMount = (effect: EffectCallback, dependencies?: DependencyList) => {
	const isInitialMount = useRef(true);

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			effect();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, dependencies);
};

export default useComponentDidMount;
