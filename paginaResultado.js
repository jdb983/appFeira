
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { style } from './estilo';
import { SafeAreaView } from 'react-native-safe-area-context';
import PaginaMissoes from './paginaMissoes';

const perfis = {
  programacao: {
    personagem: 'Estrategista - Desenvolvedor(a) de Software / BackEnd',
    descricao:
      'Você é uma pessoa lógica, curiosa e persistente. Gosta de entender o porquê das coisas e costuma pensar antes de agir. Diante de um desafio, prefere analisar as possibilidades e encontrar sua própria solução. Para você, desistir não é a primeira opção: sempre existe outra maneira de tentar.',
    frase:
      'Todo problema tem uma solução esperando para ser programada!',
  },

  dados: {
    personagem: 'Investigador(a) - Analista de Dados',
    descricao:
      'Você é uma pessoa observadora, analítica e questionadora. Percebe detalhes que muitas vezes passam despercebidos e gosta de entender o que está por trás de cada situação. Antes de tirar conclusões, prefere reunir informações, comparar possibilidades e descobrir o que realmente faz sentido.',
    frase: 'Os números sempre têm uma história para contar!',
  },

  design: {    
    personagem: 'Visionário(a) - Designer de Interfaces / FrontEnd',
    descricao:
      'Você é uma pessoa criativa, expressiva e cheia de imaginação. Gosta de enxergar possibilidades onde os outros veem apenas o comum. Tem facilidade para pensar em novas ideias, valoriza os detalhes e procura maneiras diferentes de tornar tudo mais interessante, bonito e agradável.',
    frase: 'Uma boa ideia merece ser vista!',
  },

  redes: {    
    personagem: 'Articulador(a) - Redes',
    descricao:
      'Você é uma pessoa prática, colaborativa e organizada. Gosta de entender como as coisas se relacionam e acredita que um bom resultado depende de tudo funcionar em conjunto. Costuma manter a calma diante de imprevistos, procura soluções viáveis e valoriza a cooperação para alcançar objetivos.',
    frase: 'Conectando pessoas, dispositivos e possibilidades!',
  },

  seguranca: {
    personagem: 'Guardiã(o) - Segurança da Informação',
    descricao:
      'Você é uma pessoa atenta, prudente e estratégica. Costuma observar o ambiente antes de confiar e gosta de estar preparada para diferentes situações. Leva suas responsabilidades a sério, percebe possíveis riscos e prefere agir com cuidado a tomar decisões precipitadas. Proteger aquilo que considera importante é algo natural para você.',
    frase:
      'A melhor defesa é perceber o perigo antes que ele apareça!',
  },
};

export default function PaginaResultado({ resultado, sair }) {
  const [mostrarMissoes, setMostrarMissoes] = useState(false);

  // Exibe a tela de escolha das missões
  if (mostrarMissoes) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#050B27' }}>
        <PaginaMissoes
          aoEscolherMissao={(missao) => {
            // Os links dos jogos serão conectados depois.
            console.log('Missão escolhida:', missao);
          }}
          aoVoltar={() => setMostrarMissoes(false)}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#050B27' }}>
      <ScrollView
        style={style.scrollView}
        contentContainerStyle={style.conteudoScroll}
      >
        <View style={style.cabecalho}>
          <Text style={style.saudacao}>
            Resultado do teste!
          </Text>

          <TouchableOpacity
            style={style.botaoSairCustomizado}
            onPress={sair}
            activeOpacity={0.8}
          >
            <Text style={style.textoBotaoSair}>
              Voltar
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={style.tituloQuiz}>
          Seu perfil é:
        </Text>

        {resultado.map((categoria) => (
          <View
            key={categoria}
            style={style.cartaoResultado}
          >
            <Text style={style.tituloResultado}>
              {perfis[categoria]?.personagem ?? categoria}
            </Text>

            <Text style={style.descricaoResultado}>
              {perfis[categoria]?.titulo ?? ''}
            </Text>

            <Text style={style.descricaoResultado}>
              {perfis[categoria]?.descricao ?? ''}
            </Text>
          </View>
        ))}

        <Text style={style.agradecimento}>
          Obrigado por participar! 
        </Text>

        <TouchableOpacity
          style={style.botaoMissoes}
          onPress={() => setMostrarMissoes(true)}
          activeOpacity={0.8}
        >
          <Text style={style.textoBotaoMissoes}>
            Receba sua missão 🚀
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
