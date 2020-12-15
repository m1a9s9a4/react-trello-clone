import React from 'react';
import {Paper, InputBase, Button, IconButton, fade} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear'
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    card: {
        paddingBottom: theme.spacing(4),
        margin: theme.spacing(0, 1, 1, 1),
    },
    input: {
        margin: theme.spacing(1)
    },
    btnConfirm: {
        backgroundColor: '#5AAC44',
        color: '#fff',
        "&:hover": {
           backgroundColor: fade('#5AAC44', 0.75),
        }
    },
    confirm: {
        theme: theme.spacing(0, 1, 1, 1),
    }
}));

export default function InputCard({ setOpen }) {
    const classes = useStyle();
    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase
                        multiline
                        onBlur={() => setOpen(false)}
                        fullWidth
                        inputProps={{
                            className: classes.input,
                        }}
                        placeholder="Enter a title ..."
                    />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm}
                        onClick={() => setOpen(false)}
                >Add Card</Button>
                <IconButton
                    onClick={() => setOpen(false)}
                >
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    )
}