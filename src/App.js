import React, { useEffect, useState } from 'react';
import styles from '@material-ui/core/styles';
import { Button, CardMedia, Grid, IconButton, TextField, Typography } from '@material-ui/core';
import { pesquisarVeiculo } from './utils/sinesp';
import { Search } from '@material-ui/icons';

function App() {
  const [ placaVeiculo, setPlacaVeiculo ] = useState('');
  const [ resultadoConsulta, setResultadoConsulta ] = useState({situacao:'sem nada'});

  const consultar = async (event) => {
    event.preventDefault()
    const auxResult = await pesquisarVeiculo(placaVeiculo)
    setResultadoConsulta(auxResult)
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
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
