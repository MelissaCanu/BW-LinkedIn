export const addBookmark = (jobId) => ({
	type: "ADD_BOOKMARK",
	payload: jobId,
});

export const removeBookmark = (jobId) => ({
	type: "REMOVE_BOOKMARK",
	payload: jobId,
});
