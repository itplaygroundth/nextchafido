import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
}));

export default function ChatBot() {
    const classes = useStyles();

    return (
        <Fragment>
            <div >
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid item md={12} xs={12}>
                       
                        <TextField
                            id="email"
                            label="Email"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        
                        <TextField
                            id="password"
                            label="Password"
                            margin="normal"
                            variant="outlined"
                            type="password"
                        />
                    </Grid>
                </Grid>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                >

                    <Grid item md={12} xs={12}>
                        
                        <TextField
                            id="confirm-password"
                            label="Confirm Password"
                            margin="normal"
                            variant="outlined"
                            type="password"
                        />
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}