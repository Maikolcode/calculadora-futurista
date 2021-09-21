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

  useEffect(()=>{
    document.title = `Calculadora`;    
  })

  const classes = useStyles();
  const [ tipoOperador, setTipoOperador] = useState("");
  const [ currVal, setCurrVal ] = useState("");
  const [ nameHolder, setNameHolder] = useState("Digité un número");
  const [ operator, setOperator ] = useState(null);
  const [ prevVal, setPrevVal ] = useState(null);

  function logicaCaluladora(type, value)
  {  
    if(type === "numero") {
        setCurrVal(`${currVal}${value}`);
    }

    if(type === "operador") {
        setNameHolder("Siguiente numero");
        setOperator(value);
        setTipoOperador(value);
        setPrevVal(currVal);
        setCurrVal("");
    }

    if(type === "clear") {
        setCurrVal("");
        setTipoOperador("");
        setNameHolder("Todo limpio");
        setOperator(null);
        setPrevVal(null);
    }

    if(type === "%") {
        setCurrVal(`${parseFloat(currVal) * 0.01}`);
    }
    if(type === "igual") {
        const current = parseFloat(currVal);
        const previous = parseFloat(prevVal);

        if(operator === "+") {
            setCurrVal(previous + current);
            setOperator(null);
            setPrevVal(null);
        }

        if(operator === "/") {
            setCurrVal(previous / current);
            setOperator(null);
            setPrevVal(null);
        }

        if(operator === "-") {
            setCurrVal(previous - current);
            setOperator(null);
            setPrevVal(null);
        }

        if(operator === "*") {
            setCurrVal(previous * current);
            setOperator(null);
            setPrevVal(null);
        }
        setTipoOperador("");
    }
  
  }
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
                      <input className={classes.label} type="text" id="Name" name="Name" placeholder={nameHolder} value={currVal} />
                      <p style={{padding: '0', margin: '0'}}>{prevVal}{tipoOperador}{currVal}</p>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.btn}>
                      <Button variant="contained" color="secondary" onClick={() => logicaCaluladora("clear")}>
                        <p className={classes.txt}>AC</p>
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.btn}>
                      <Button variant="contained" onClick={() => logicaCaluladora("clear")}>
                        <p className={classes.txt}>CE</p>
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.btn}>
                      <Button variant="contained" color="primary" onClick={() => logicaCaluladora("%")}>
                        <p className={classes.txt}>%</p>
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.btn}>
                      <Button variant="contained" color="primary" onClick={() => logicaCaluladora("operador","/")}>
                        <p className={classes.txt}>/</p>
                      </Button>
                    </Paper>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <Paper className={classes.btn}>
                      <Button variant="contained" color="primary" onClick={() => logicaCaluladora("numero",7)}>
                        <p className={classes.txt}>7</p>
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.btn}>
                      <Button variant="contained" color="primary" onClick={() => logicaCaluladora("numero",8)}>
                        <p className={classes.txt}>8</p>
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.btn}>
                      <Button variant="contained" color="primary" onClick={() => logicaCaluladora("numero",9)}>
                        <p className={classes.txt}>9</p>
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.btn}>
                      <Button variant="contained" color="primary" onClick={() => logicaCaluladora("operador","*")}>
                        <p className={classes.txt}>x</p>
                      </Button>
                    </Paper>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <Paper className={classes.btn}>
                      <Button variant="contained" color="primary" onClick={() => logicaCaluladora("numero",4)}>
                        <p className={classes.txt}>4</p>
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.btn}>
                      <Button variant="contained" color="primary" onClick={() => logicaCaluladora("numero",5)}>
                        <p className={classes.txt}>5</p>
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.btn}>
                      <Button variant="contained" color="primary" onClick={() => logicaCaluladora("numero",6)}>
                        <p className={classes.txt}>6</p>
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.btn}>
                      <Button variant="contained" color="primary" onClick={() => logicaCaluladora("operador","-")}>
                        <p className={classes.txt}>-</p>
                      </Button>
                    </Paper>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <Paper className={classes.btn}>
                      <Button variant="contained" color="primary" onClick={() => logicaCaluladora("numero", 1)}>
                        <p className={classes.txt}>1</p>
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.btn}>
                      <Button variant="contained" color="primary" onClick={() => logicaCaluladora("numero", 2)}>
                        <p className={classes.txt}>2</p>
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.btn}>
                      <Button variant="contained" color="primary" onClick={() => logicaCaluladora("numero", 3)}>
                        <p className={classes.txt}>3</p>
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.btn}>
                      <Button variant="contained" color="primary" onClick={() => logicaCaluladora("operador","+")}>
                        <p className={classes.txt}>+</p>
                      </Button>
                    </Paper>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <Paper className={classes.btn}>
                      <Button variant="contained" color="primary" onClick={() => logicaCaluladora("numero", 0)}>
                        <p className={classes.txt}>0</p>
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.btn}>
                      <Button variant="contained" color="primary" onClick={() => logicaCaluladora("numero", ".")}>
                        <p className={classes.txt}>.</p>
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper className={classes.btn}>
                      <Button style={{width: '100%'}} variant="contained" color="primary" onClick={() => logicaCaluladora("igual")}>
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
