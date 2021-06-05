const getActionString = (word: string) => {
	const upperCaseEquivalenOfWord = word.toUpperCase();
	return {
		default: `${upperCaseEquivalenOfWord}_DEFAULT`,
		pending: `${upperCaseEquivalenOfWord}_PENDING`,
		fulfilled: `${upperCaseEquivalenOfWord}_FULFILLED`,
		error: `${upperCaseEquivalenOfWord}_ERROR`,
	};
};

export default getActionString;
