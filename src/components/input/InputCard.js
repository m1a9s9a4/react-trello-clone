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

export default function InputCard({ setOpen, listId, type }) {
    const classes = useStyle();
    const {addMoreCard, addMoreList} = useContext(storeApi);
    const [cardTitle, setCardTitle] = useState('');
    const handleOnChange = (e) => {
        console.log(e.target.value);
        setCardTitle(e.target.value);
    }

    const handleBtnConfirm = () => {
        console.log(cardTitle, listId);
        if (type === 'card') {
            addMoreCard(cardTitle, listId);
            setCardTitle('');
            setOpen(false);
        } else {
            addMoreList(cardTitle);
            setCardTitle('');
            setOpen(false);
        }
    }

    const handleBlur = () => {
        console.log(cardTitle);
        setOpen(false);
        setCardTitle('');
    }

    const handlePlaceholder = (type) => {
        if (type === 'list') {
            return 'Enter a list title ...';
        }
        return 'Enter a title ...';
    }

    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase
                        multiline
                        onChange={handleOnChange}
                        // onBlur={handleBlur}
                        fullWidth
                        inputProps={{
                            className: classes.input,
                        }}
                        value={cardTitle}
                        placeholder={handlePlaceholder(type)}
                    />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button
                    className={classes.btnConfirm}
                    onClick={handleBtnConfirm}
                    disabled={cardTitle == ''}
                >
                    {type === 'card' ? 'Add Card' : 'Add List'}
                </Button>
                <IconButton
                    onClick={() => setOpen(false)}
                >
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    )
}