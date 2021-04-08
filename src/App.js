import React, { useEffect,useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  label: {
    fontFamily: 'Orbitron',
    width: '100%',
    height: '80px',
    border: 'none',
    fontSize: '45px',
    margin: '0',
    textAlign: 'start',
    outline: 'none',
  },
  root: {
    fontFamily: 'Orbitron',
    flexGrow: 1,
  },
  paper: {
    fontFamily: 'Orbitron',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  btn: {
    fontFamily: 'Orbitron',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  btnTxt:{
    fontFamily: 'Orbitron',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    backgroundColor: 'transparent',
    width: '90%',
  },
  txt:{
    fontFamily: 'Orbitron',
    fontSize : '30',
  },
  suma:{
    fontFamily: 'Orbitron',
    height : '80px',
    marginBottom: '20px',
  }
}));


function App() {
  const classes = useStyles();
  return (
    <div>
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="sm">
        <div>
          <Typography component="div" style={{ backgroundColor: 'rgba(6, 5, 66, 1)', height: '110vh', marginTop: '10px', borderRadius: '20px', marginBottom: '40px', padding: '20px', boxShadow: '2px 3px 2px 3px rgba(0, 0, 0, 0.4)'}}>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <input className={classes.label} type="text" id="Name" name="Name" placeholder="Digite un numero"/>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.btn}>
                    <Button variant="contained" color="secondary">
                      <p className={classes.txt}>AC</p>
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.btn}>
                    <Button variant="contained">
                      <p className={classes.txt}>CE</p>
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.btn}>
                    <Button variant="contained" color="primary">
                      <p className={classes.txt}>%</p>
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.btn}>
                    <Button variant="contained" color="primary">
                      <p className={classes.txt}>/</p>
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Paper className={classes.btn}>
                    <Button variant="contained" color="primary">
                      <p className={classes.txt}>7</p>
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.btn}>
                    <Button variant="contained" color="primary">
                      <p className={classes.txt}>8</p>
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.btn}>
                    <Button variant="contained" color="primary">
                      <p className={classes.txt}>9</p>
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.btn}>
                    <Button variant="contained" color="primary">
                      <p className={classes.txt}>x</p>
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Paper className={classes.btn}>
                    <Button variant="contained" color="primary">
                      <p className={classes.txt}>4</p>
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.btn}>
                    <Button variant="contained" color="primary">
                      <p className={classes.txt}>5</p>
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.btn}>
                    <Button variant="contained" color="primary">
                      <p className={classes.txt}>6</p>
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.btn}>
                    <Button variant="contained" color="primary">
                      <p className={classes.txt}>-</p>
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Paper className={classes.btn}>
                    <Button variant="contained" color="primary">
                      <p className={classes.txt}>1</p>
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.btn}>
                    <Button variant="contained" color="primary">
                      <p className={classes.txt}>2</p>
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.btn}>
                    <Button variant="contained" color="primary">
                      <p className={classes.txt}>3</p>
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.btn}>
                    <Button variant="contained" color="primary">
                      <p className={classes.txt}>+</p>
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Paper className={classes.btn}>
                    <Button variant="contained" color="primary">
                      <p className={classes.txt}>0</p>
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.btn}>
                    <Button variant="contained" color="primary">
                      <p className={classes.txt}>.</p>
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.btn}>
                    <Button style={{width: '100%'}} variant="contained" color="primary">
                      <p className={classes.txt}>=</p>
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </div>
            <p style={{color: 'gray', marginBottom: '5px', fontSize: '13px', fontFamily: 'Orbitron'}}>By Michael Parra</p>
          </Typography>
        </div>
      </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
