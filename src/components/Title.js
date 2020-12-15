import React, {useState} from 'react';
import {Typography, InputBase } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import MoreHoriz from '@material-ui/icons/MoreHoriz';

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

export default function Title({ title }) {
    const [open, setOpen] = useState(false);
    const classes = useStyle();
    return (
        <div>
            {open ? (
                <div >
                    <InputBase
                        value={title}
                        autoFocus
                        inputProps={{
                            className: classes.input
                        }}
                        fullWidth
                        onBlur={() => setOpen(!open)}
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