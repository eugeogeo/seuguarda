import { search } from 'sinesp-api' 

export async function pesquisarVeiculo(placa) {
  let veiculo = await search(placa);
  console.log(veiculo)
  return veiculo;
}