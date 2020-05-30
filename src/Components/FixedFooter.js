import React from 'react'
import { Grid, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    }
}));

function FixedFooter({ lastUpdate }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container justify='center' style={{ backgroundColor: '#000', padding: '20px', position: 'fixed', top: '0px', left: '0px' }}>
                <p>
                    <span className='legendB confirmed'>Confirmed</span>&nbsp;&nbsp;&nbsp;
                    <span className='legendB recovered'>Recovered</span>&nbsp;&nbsp;&nbsp;
                    <span className='legendB deaths'>Deaths</span>
                </p>
            </Grid>
            <Grid container justify='center' style={{ backgroundColor: '#000', marginBottom: '-10px', paddingTop: '13px', bottom: '0', left: '0', position: 'fixed' }}>
                <Grid item lg={6} align='center'>
                    <Button variant='contained' color='secondary' style={{ textTransform: 'capitalize' }}>
                        Last Updated: {new Date(lastUpdate).toDateString()}, {new Date(lastUpdate).toLocaleTimeString()}
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    &nbsp;
                </Grid>
            </Grid>
        </div>
    )
}

export default FixedFooter;