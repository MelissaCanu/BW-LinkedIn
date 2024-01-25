const bookmarksReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_BOOKMARK":
			return [...state, action.payload];
		case "REMOVE_BOOKMARK":
			return state.filter((bookmarkId) => bookmarkId !== action.payload);
		case "ADD_BOOKMARKED_JOB":
			return [...state, { jobId: action.payload, isJob: true }];
		case "REMOVE_BOOKMARKED_JOB":
			return state.filter((bookmark) => bookmark.jobId !== action.payload);
		default:
			return state;
	}
};

export default bookmarksReducer;
