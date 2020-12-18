import React, {useState} from 'react';
import {fade, Paper, Typography, Collapse} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import InputCard from "./InputCard";

const useStyle = makeStyles((theme) => ({
    root: {
        width: '300px',
        marginTop: theme.spacing(1)
    },
    addCard: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(0, 1, 1, 1),
        backgroundColor: "#EBECF0",
        "&:hover": {
            backgroundColor: fade("#000", 0.25)
        }
    }
}));

export default function InputContainer({ listId, type }) {
    const [open, setOpen] = useState(false);
    const classnames = useStyle();
    return (
        <div className={classnames.root}>
            <Collapse in={open}>
                <InputCard setOpen={setOpen} listId={listId} type={type} />
            </Collapse>
            <Collapse in={!open}>
                <Paper className={classnames.addCard}
                       elevation={0}
                       onClick={() => setOpen(!open)}
                >
                    <Typography>{type === 'card' ? '+ Add Cart' : 'Add List'}</Typography>
                </Paper>
            </Collapse>
        </div>
    )
}