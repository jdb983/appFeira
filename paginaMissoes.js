
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';

import { style } from './estilo';

export default function PaginaMissoes({ aoVoltar }) {
  return (
    <ScrollView
      style={style.scrollView}
      contentContainerStyle={style.conteudoScroll}>
      
      <Text style={style.textoQuiz}>
        Agora que você descobriu seu perfil, chegou a
        hora de conhecer os desafios preparados para você.{'/n'}       
      </Text>
      
      <View style={style.cartaoMissao}>
        <Text style={style.emojiMissao}>🚀</Text>

        <Text style={style.tituloCartaoMissao}>
          Missão: O Buraco Negro
        </Text>

        <Image
          source={require('./assets/espaco.jpeg')}
          style={style.imagemMissao}
          resizeMode="cover"
          />

        <Text style={style.descricaoMissao}>
          O futuro da tripulação está em suas mãos!
          {'\n\n'}
          Uma equipe de astronautas recebe um alerta
          assustador: um buraco negro está se aproximando
          e ameaça destruir tudo pelo caminho.
          {'\n\n'}
          Para sobreviver, será preciso investigar as
          informações recebidas, resolver enigmas e
          tomar decisões importantes. Mas será que esse
          alerta conta toda a verdade?
          {'\n\n'}
          <Text style={{ fontWeight: 'bold' }}>
            Você está preparado para essa missão?
          </Text>
        </Text>
      </View>
     
      <View style={style.cartaoMissao}>
        <Text style={style.emojiMissao}>🏛️</Text>

        <Text style={style.tituloCartaoMissao}>
          Missão: O Mistério do Museu
        </Text>

        <Image
          source={require('./assets/museu.jpg')}
          style={style.imagemMissao}
          resizeMode="cover"
          />

        <Text style={style.descricaoMissao}>
          Um mistério está prestes a ser revelado!
          {'\n'}
          Visitantes começaram a desaparecer em um museu,
          e uma antiga relíquia parece estar relacionada
          aos acontecimentos. Há rumores de que o artefato
          teria poderes mágicos e seria capaz de levar
          pessoas para outra dimensão.
          {'\n'}
          Investigue as pistas, questione os relatos e
          descubra se existe algo escondido por trás
          dessa história, antes que mais pessoas desapareçam.
          {'\n'}
          <Text style={{ fontWeight: 'bold' }}>
            Você consegue descobrir o que realmente aconteceu?
          </Text>
        </Text>
      </View>

      <Text style={style.agradecimento}>
        Escolha seu desafio e boa sorte! 
      </Text>

      <TouchableOpacity
        style={style.botaoMissao}
        onPress={aoVoltar}
        activeOpacity={0.8}
      >
        <Text style={style.textoBotaoMissao}>
          Voltar ao meu perfil
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
