import React, { useState } from 'react'
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core'
import ReusablePieChart from './ReusablePieChart'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))

export default function PieChartCountry({ countries }) {

    //style
    const classes = useStyles()

    //search query
    const [query, setQuery] = useState('')
    const handleQuery = (e) => {
        e.preventDefault()
        setQuery(e.target.value)
    }

    //filter by index
    const filteredCountry = countries.filter((country) => {
        return country.Country.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })

    return (
        <div className={classes.root}>
            {/* total Cases Countrywise*/}
            <Typography variant='h4' style={{ textAlign: 'center', marginTop: '25px', marginBottom: '-14px', padding: '10px', backgroundColor: '#000', textTransform: 'uppercase' }}>
                All Country Stats
            </Typography>
            <input type='text' name='Search' placeholder='Search Country' value={query} onChange={handleQuery} />
            {filteredCountry.map((country) =>
                (
                    <Grid container justify='center' alignItems='center' key={country.Slug}>
                        <Typography variant='h4' align='center' style={{ backgroundColor: '#076997', width: '100%', margin: '32px 2% 0px', borderRadius: '6px', padding: '8px 8px 8px' }}>
                            {country.Country}
                        </Typography>
                        < Grid item lg={5} style={{ margin: '15px auto 35px auto' }}>
                            <Paper variant='elevation' elevation={5} style={{ padding: '35px 24px 25px 24px', margin: 'auto 17px', backgroundColor: '#222222' }}>
                                <Grid container justify='center' alignItems='center'>
                                    <Grid item>
                                        <ReusablePieChart confirmed={country.TotalConfirmed} recovered={country.TotalRecovered} deaths={country.TotalDeaths} title='slow' />
                                    </Grid>
                                    <Grid item>
                                        <Paper className='paper' variant='elevation' elevation={0} style={{ minWidth: '180px', backgroundColor: '#222222', color: '#aaa' }}>
                                            <Typography align='left' variant='h5' style={{ color: '#ddd', marginTop: '15px' }}>Total Cases</Typography>
                                            <Typography align='left' variant='body1' style={{ color: '#ff5b4d' }}><b>Confirmed:</b> {country.TotalConfirmed}</Typography>
                                            <Typography align='left' variant='body1' style={{ color: '#ffac00' }}><b>Recovered:</b> {country.TotalRecovered}</Typography>
                                            <Typography align='left' variant='body1' style={{ color: '#00ac48' }}><b>Deaths:</b> {country.TotalDeaths}</Typography>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid >
                        {/* new Cases Countrywise */}
                        < Grid item lg={5} style={{ margin: '15px auto 35px auto' }}>
                            <Paper variant='elevation' elevation={5} style={{ padding: '35px 24px 25px 24px', margin: 'auto 17px', backgroundColor: '#222222' }}>
                                <Grid container justify='center' alignItems='center'>
                                    <Grid item>
                                        <ReusablePieChart confirmed={country.NewConfirmed} recovered={country.NewRecovered} deaths={country.NewDeaths} title='slow' />
                                    </Grid>
                                    <Grid item>
                                        <Paper className='paper' variant='elevation' elevation={0} style={{ minWidth: '180px', backgroundColor: '#222222', color: '#aaa' }}>
                                            <Typography align='left' variant='h5' style={{ color: '#ddd', marginTop: '15px' }}>New Cases</Typography>
                                            <Typography align='left' variant='body1' style={{ color: '#ff5b4d' }}><b>Confirmed:</b> {country.NewConfirmed}</Typography>
                                            <Typography align='left' variant='body1' style={{ color: '#ffac00' }}><b>Recovered:</b> {country.NewRecovered}</Typography>
                                            <Typography align='left' variant='body1' style={{ color: '#00ac48' }}><b>Deaths:</b> {country.NewDeaths}</Typography>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid >
                    </Grid>
                )
            )}
        </div >
    )
}
