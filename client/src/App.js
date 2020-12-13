import React, { useEffect } from 'react'
import ReactDom from 'react-dom'
import { getPosts } from './actions/posts'
import { Container, AppBar, Grow, Typography, Grid } from '@material-ui/core';
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'
import { useDispatch } from "react-redux";
const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.Typography} variant="h2" align='center'>memories</Typography>
                <img className={classes.image} src={memories} alt="memories" heigth="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems='stretch' spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;