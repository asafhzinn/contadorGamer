//Importa o React e o useState
// useState serve para criar valores que podem mudar na tela
import React, {useState} from "react";
//Importa componentes nativos do react native
import { 
  View, //caixa / area da tela
  Text, // textos
  Button, //botao
  StyleSheet,// estilos
  TouchableOpacity // botao customizável
 } from "react-native-web";

 // componente principal APP
export default function App(){
  // Crai uma estado (variavel php) chamado "pontos"
  // pontos = valor atual 
  // setPontos = função para alterar o valor
  // 0 = valor inicial
  const [pontos,setPontos] = useState(0); 
// função para aumentar 1 ponto
  function aumentar(){
    // pega o valor auto e soma +1
    setPontos(pontos+1);
  }
// função para diminuir 1 ponto
  function diminuir(){
   // pega o valor atual e subtrai 1
    setPontos(pontos-1);
  }
// função para resetar o contador 
  function resetar(){
    // volta o valor para 0
    setPontos(0);
  }
// tudo que est no RETURN aparece na tela 
  return(
    // View principal no APP
    <View style={styles.container}>
    {/* titulo no APP */}
      <Text style={styles.titulo}>
        🎮 Contador Gamer
      </Text>
      {/* Mostra o valor dos pontos */}
      <Text style={styles.pontos}>{pontos}</Text>
      {/* area dos botoes +1 e -1 */}
      <View style={styles.areaBotoes}>
       <TouchableOpacity onPress={aumentar}
       style={styles.botao}>
        <Text style={styles.textoBotao}>+1</Text>
       </TouchableOpacity>
        <TouchableOpacity onPress={diminuir}
       style={styles.botao}>
        <Text style={styles.textoBotao}>-1</Text>
       </TouchableOpacity>
      </View>
      {/* botão resetar */}
       <TouchableOpacity onPress={resetar}
       style={styles.botaoReset}>
        <Text style={styles.textoBotao}>Reset</Text>
       </TouchableOpacity>
    </View>
  );
}
//Area de estilos do APP
const styles = StyleSheet.create({
  //Estilo da tela principal
  container:{
    // Ocupo a tela toda
    flex:1,
    // Cor do fundo
    backgroundColor:'#121212',
    // Centraliza Horizonalmente
    alignItems:'center',
    // Centraliza Verticalmente
    justifyContent:'center',
    //Espaço Interno
    padding:20,
  },
// ESTILO DO TITULO
  titulo:{
    // TAMANHO DA FONTE
    fontSize:32,
    // COR DO TEXTO
    color:'#00ff88',
    // TEXTO EM NEGRITO
    fontWight:'bold',
    // ESPAÇO ABAIXO
    marginBottom:30,
  },
// ESTILO DOS PONTOS
  pontos:{
    // TAMANHO GIGANTE
    fontSize:80,
    // COR BRANCA
    color:'#ffffff',
    // ESPAÇO ABAIXO
    marginBottom:40,
    // NEGRITO
    fontWeight:'bold',
  },
 // ARÉA DOS BOTÕES
  areaBotoes:{
    // DEIXA UM BOTÃO AO LADO DO OUTRO
    flexDirection: 'row',
    // ESPAÇO ABAIXO
    marginBottom:20,
  },
// ESTILO DOS BOTÕES +1 E -1
  botao:{
    // COR DO BOTÃO
    backgroundColor:'#00ff88',
   // ESPAÇAMENTO VERTICAL 
    paddingVertical:15,
    // ESPAÇAMENTO HORIZONTAL
    paddingHorizontal:30,
    // ARREDONDA AS BORDAS
    borderRadius:12,
    // ESPAÇO ENTRE BOTÕES
    marginHorizontal:10,
  },
// ESTILO DE BOTÃO RESETAR
  botaoReset:{
    // COR VERMELHA
    backgroundColor:'#ff3b30',
    // ESPAÇAMENTOS
    paddingVertical:15,
    paddingHorizontal:40,
    // BORDAS ARREDONDADAS
    borderRadius:12,
  },
// ESTILO DO TEXTO DOS BOTÕES 
  textoBotao:{
    // TAMANHO DA LETRA
    fontSize:22,
    // COR DO TEXTO 
    color:'#000',
    // NEGRITO
    fontWeight:'bold',

  }
});
