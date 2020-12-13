import * as Api from "../Api";

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await Api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: [] });
    } catch (error) {
        console.log(error.message);
    }
}
