import React, { useEffect, useState } from 'react'
import './App.css'
import Axios from 'axios'
import { Grid, makeStyles } from '@material-ui/core'
import { GlobalStats, CountriesStats, FixedFooter } from './Components'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  }
}));

function App() {
  const classes = useStyles()
  const [initValue, setInitValue] = useState({ global: {}, countries: [], date: '' })
  const fetchSummary = () => {
    Axios.get(`https://api.covid19api.com/summary`)
      .then(res => {
        setInitValue({
          global: res.data.Global,
          countries: res.data.Countries,
          date: res.data.Date
        })
        console.log(res.data)
      })
  }

  useEffect(() => {
    fetchSummary()
  }, [])

  return (
    <div className={classes.root}>
      <Grid container>
        <GlobalStats global={initValue.global} />
        <CountriesStats countries={initValue.countries} />
        <FixedFooter lastUpdate={initValue.date} />
      </Grid>
      <Grid container style={{ height: '100px' }}>
      </Grid>
    </div>
  )
}

export default App;
