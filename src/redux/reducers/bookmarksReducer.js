const bookmarksReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_BOOKMARK":
			return [...state, action.payload];
		case "REMOVE_BOOKMARK":
			return state.filter((bookmarkId) => bookmarkId !== action.payload);
		default:
			return state;
	}
};

export default bookmarksReducer;
