import { format } from 'path'
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import React, { useState } from 'react'
import FileBase from 'react-file-base64';
import './styles'
import useStyles from './styles'
import userEvent from '@testing-library/user-event';
import {useDispatch} from 'react-redux'
import {createPost} from '../../actions/posts'

const Form = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    }) 
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData))
    };
    const clear = () => {

    };
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6" >Creating a memory</Typography>
                <TextField name="creator" variant="outlined" label="creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        message={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                    <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="container" color="secondary" size="small" onClick={clear} fullWidth>Clear Form</Button>
                </div>
            </form>
        </Paper>
    )
}

export default Form;