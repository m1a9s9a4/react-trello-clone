import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Wrapper from './components/wrapper';
import Navigation from './components/nav/Navigation';
const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: 'green',
    }
}))

export default function App() {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Navigation />
            <Wrapper/>
        </div>
    );
}

