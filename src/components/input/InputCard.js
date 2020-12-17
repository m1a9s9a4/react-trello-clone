import React, {useState, useContext} from 'react';
import {Paper, InputBase, Button, IconButton, fade} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear'
import {makeStyles} from "@material-ui/core/styles";
import storeApi from '../../utils/storeApi';

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

export default function InputCard({ setOpen, listId }) {
    const classes = useStyle();
    const {addMoreCard} = useContext(storeApi);
    const [cardTitle, setCardTitle] = useState('');
    const handleOnChange = (e) => {
        setCardTitle(e.target.value);
    }

    const handleBtnConfirm = () => {
        if (cardTitle) {
            addMoreCard(cardTitle, listId);
            setCardTitle('');
            setOpen(false);
        }
    }

    const handleBlur = () => {
        setOpen(false);
        setCardTitle('');
    }

    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase
                        multiline
                        onChange={handleOnChange}
                        onBlur={handleBlur}
                        fullWidth
                        inputProps={{
                            className: classes.input,
                        }}
                        value={cardTitle}
                        placeholder="Enter a title ..."
                    />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button
                    className={classes.btnConfirm}
                    onClick={handleBtnConfirm}
                    disabled={cardTitle == ''}
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