import React, {useState, useContext} from 'react';
import {Typography, InputBase } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import storeApi from '../utils/storeApi';

const useStyle = makeStyles((theme) => ({
    editableTitleContainer: {
        marginLeft: theme.spacing(1),
        display: 'flex',
    },
    editableTitle: {
        flexGrow: 1,
        fontSize: "1.2em",
        font: "bold",
    },
    input: {
        margin: theme.spacing(1),
        "&:focus": {
            backgroundColor: "#ddd",
        }
    }
}));

export default function Title({ title, listId }) {
    const [open, setOpen] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const {updateListTitle} = useContext(storeApi);
    const classes = useStyle();
    const handleOnChange = (e) => {
        setNewTitle(e.target.value);
    }

    const handleBlur = () => {
        updateListTitle(newTitle, listId);
        setOpen(false);
    }

    return (
        <div>
            {open ? (
                <div >
                    <InputBase
                        onBlur={handleBlur}
                        onChange={handleOnChange}
                        value={title}
                        autoFocus
                        inputProps={{
                            className: classes.input
                        }}
                        fullWidth
                    />
                </div>
            ) : (
                <div className={classes.editableTitleContainer}>
                    <Typography
                        onClick={() => setOpen(!open)}
                        className={classes.editableTitle}
                    >
                        {title}
                    </Typography>
                    <MoreHoriz />
                </div>
            )}
        </div>
    )
}