import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ReusablePieChart from './ReusablePieChart'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))


function GlobalStats({ global }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container justify='center' alignItems='center'>
                <Grid item align='center' xs={12} sm={12} lg={12} xl={12} style={{ marginTop: '71px', marginBottom: '45px', padding: '10px', backgroundColor: '#f50057' }}>
                    <Typography variant='h4' align='center'>COVID19
                    </Typography>
                    <span style={{ fontSize: '1em', fontWeight: '600' }}>UPDATES</span>
                </Grid>
                <Grid item align='center' xs={12} sm={12} lg={12} xl={12} >
                    <Typography variant='h4' style={{ textAlign: 'center', marginBottom: '25px', padding: '10px', backgroundColor: '#000', textTransform: 'uppercase' }}>
                        Global Stats
            </Typography>
                </Grid>

                {/*total cases*/}
                <Grid item lg={5} style={{ margin: '15px auto 35px auto' }}>
                    <Paper variant='elevation' elevation={5} style={{ padding: '35px 24px 25px 24px', margin: 'auto 17px', backgroundColor: '#222222' }}>
                        <Grid container justify='center' alignItems='center'>
                            <Grid item>
                                <ReusablePieChart confirmed={global.TotalConfirmed} recovered={global.TotalRecovered} deaths={global.TotalDeaths} title='New Cases' />
                            </Grid>
                            <Grid item>
                                <Paper className='paper' variant='elevation' elevation={0} style={{ minWidth: '180px', backgroundColor: '#222222', color: '#aaa' }}>
                                    <Typography align='left' variant='h5' style={{ color: '#ddd', marginTop: '15px' }}>Total Cases</Typography>
                                    <Typography align='left' variant='body1' style={{ color: '#ff5b4d' }}><b>Confirmed:</b> {global.TotalConfirmed}</Typography>
                                    <Typography align='left' variant='body1' style={{ color: '#ffac00' }}><b>Recovered:</b> {global.TotalRecovered}</Typography>
                                    <Typography align='left' variant='body1' style={{ color: '#00ac48' }}><b>Deaths:</b> {global.TotalDeaths}</Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                {/*new cases*/}
                <Grid item lg={5} style={{ margin: '15px auto 35px auto' }}>
                    <Paper variant='elevation' elevation={5} style={{ padding: '35px 24px 25px 24px', margin: 'auto 17px', backgroundColor: '#222222' }}>
                        <Grid container justify='center' alignItems='center'>
                            <Grid item>
                                <ReusablePieChart confirmed={global.NewConfirmed} recovered={global.NewRecovered} deaths={global.NewDeaths} title='New Cases' />
                            </Grid>
                            <Grid item>
                                <Paper className='paper' variant='elevation' elevation={0} style={{ minWidth: '180px', backgroundColor: '#222222', color: '#aaa' }}>
                                    <Typography align='left' variant='h5' style={{ color: '#ddd', marginTop: '15px' }}>New Cases</Typography>
                                    <Typography align='left' variant='body1' style={{ color: '#ff5b4d' }}><b>Confirmed:</b> {global.NewConfirmed}</Typography>
                                    <Typography align='left' variant='body1' style={{ color: '#ffac00' }}><b>Recovered:</b> {global.NewRecovered}</Typography>
                                    <Typography align='left' variant='body1' style={{ color: '#00ac48' }}><b>Deaths:</b> {global.NewDeaths}</Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid >
        </div>
    )
}
export default GlobalStats
