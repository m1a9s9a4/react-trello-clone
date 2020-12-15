import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Title from "../Title";

const useStyle = makeStyles((theme) => ({
    root: {
        width: '300px',
        backgroundColor: '#EBECF0',
        marginLeft: theme.spacing(),
    }
}));

export default function List() {
    const classes = useStyle();
    return (
        <React.Fragment>
            <Paper className={classes.root}>
                <CssBaseline />
                <Title />
            </Paper>
        </React.Fragment>
    )
}
