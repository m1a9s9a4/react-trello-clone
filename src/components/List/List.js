import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Title from "../Title";
import Card from "../../Card";
import InputContainer from "../input/InputContainer";

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
                <Card />
                <Card />
                <Card />
                <InputContainer />
            </Paper>
        </React.Fragment>
    )
}
