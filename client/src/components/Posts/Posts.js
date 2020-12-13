import React from 'react'
import Post from './Post/Post'
import { useSelector } from "react-redux";

import useStyles from './styles'
const posts = () => {
    const classes = useStyles();
    const post = useSelector((state) => state.posts)

    console.log(posts);
    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    )
}
export default posts;