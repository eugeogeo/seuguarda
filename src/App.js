import React, { useEffect, useState } from 'react';
import styles from '@material-ui/core/styles';
import { Button, Grid, IconButton, TextField, Typography } from '@material-ui/core';
import {Card, CardContent, CardMedia} from '@material-ui/core';
import { pesquisarVeiculo } from './utils/sinesp';
import { Search } from '@material-ui/icons';

function App() {
  const [ placaVeiculo, setPlacaVeiculo ] = useState('');
  const [ resultadoConsulta, setResultadoConsulta ] = useState({situacao:'sem nada'});

  const consultar = async (event) => {
    event.preventDefault()
    const auxResult = await pesquisarVeiculo(placaVeiculo)
    setResultadoConsulta()
  }

  useEffect(() => console.log(resultadoConsulta), [resultadoConsulta])
  return (
    <div>
      <Grid container style={{height: window.innerHeight}} direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h2">
            seuguarda
          </Typography>
        </Grid>
        <Grid item> 
          <form onSubmit={(consultar)}>
            <TextField id="placa" name="placa" label="Placa" onChange={(event) => setPlacaVeiculo(event.target.value)} variant="filled" />
            <IconButton color="primary" type="submit">
              <Search/>
            </IconButton>
          </form>
        </Grid>
        <Grid item>
          ablabal
          {resultadoConsulta.situacao}

          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be nev o lent
              </Typography>
              <Typography color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          </Card>




        </Grid>
      </Grid>
    </div>
  );
}

export default App;
