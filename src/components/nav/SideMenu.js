import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Drawer} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    drawer: {
        width: "400px",
    },
    menu: {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-around',
    },
    box: {
        width:'45%',
        height:'90px',
        backgroundColor: 'blue',
        borderRadius: '9px'
    },
}))

export default function SideMenu({ openSideMenu, setOpenSideMenu }) {
    const classes = useStyle();
    return (
        <div>
            <Drawer
                open={openSideMenu}
                anchor="right"
                onClose={() => setOpenSideMenu(false)}
            >
                <div className={classes.drawer}>
                    <div className={classes.menu}>
                        <div className={classes.box}>

                        </div>
                        <div className={classes.box}>

                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}