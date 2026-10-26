import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { style } from './estilo';
import PaginaResultado from './paginaResultado';
import { SafeAreaView } from 'react-native-safe-area-context';

const perguntas = [
  {
    pergunta: 'Quando surge um problema inesperado no seu dia, o que você costuma fazer?',
    opcoes: [
      {texto: ' Tento encontrar uma solução prática para resolver a situação de uma vez por todas.', categoria: 'programacao'},
      {texto: ' Procuro primeiro entender o que está conectado ao problema e como uma coisa afeta a outra.', categoria: 'redes'},
      {texto: ' Penso no que pode dar errado e em como evitar que a situação piore.', categoria: 'seguranca'},
      {texto: ' Observo os detalhes para descobrir o que causou o problema.', categoria: 'dados'},
      {texto: ' Tento encontrar uma maneira diferente e mais simples de lidar com a situação.', categoria: 'design'},
    ],
  },
  {
    pergunta: 'Imagine que sua turma precisa organizar um evento na escola. Como você mais gostaria de contribuir?',
    opcoes: [
      {texto: ' Criando uma solução para facilitar as tarefas e evitar trabalho repetitivo.', categoria: 'programacao'},
      {texto: ' Organizando a comunicação entre as pessoas e garantindo que as informações cheguem a todos.', categoria: 'redes'},
      {texto: ' Pensando nos riscos e preparando o grupo para lidar com imprevistos.', categoria: 'seguranca'},
      {texto: ' Organizando as inscrições e analisando os dados para tomar decisões.', categoria: 'dados'},
      {texto: ' Criando os cartazes, a identidade visual e os materiais que serão apresentados.', categoria: 'design'},
    ],
  },  
  {
    pergunta: 'Se você pudesse criar algo para melhorar a vida das pessoas, o que teria mais vontade de fazer?',
    opcoes: [
      {texto: ' Uma ferramenta que facilitasse tarefas demoradas do dia a dia.', categoria: 'programacao'},
      {texto: ' Uma solução que ajudasse pessoas a se comunicarem melhor.', categoria: 'redes'},
      {texto: ' Um recurso que ajudasse as pessoas a se proteger', categoria: 'seguranca'},
      {texto: ' Uma ferramenta que ajudasse as pessoas a entender melhor suas despesas e hábitos.', categoria: 'dados'},
      {texto: ' Uma ferramenta simples e agradável que facilitasse alguma atividade cotidiana.', categoria: 'design'},
    ],
  },
  {
    pergunta: 'Quando você precisa tomar uma decisão importante, como escolher um curso ou comprar algo caro, o que costuma fazer?',
    opcoes: [
      {texto: ' Penso em como colocar meu plano em prática e quais etapas preciso seguir.', categoria: 'programacao'},
      {texto: ' Converso com outras pessoas e procuro diferentes informações antes de decidir.', categoria: 'redes'},
      {texto: ' Avalio os riscos e penso no que pode acontecer se minha escolha não der certo.', categoria: 'seguranca'},
      {texto: ' Comparo opções, preços e informações para encontrar a alternativa mais vantajosa.', categoria: 'dados'},
      {texto: ' Considero o que combina mais comigo, minhas preferências e a experiência que cada opção oferece.', categoria: 'design'},
    ],
  }, 
  {
    pergunta: 'Depois de passar semanas trabalhando em um projeto para a comunidade escolar, qual resultado faria você sentir mais orgulho?',
    opcoes: [
      {texto: ' Saber que consegui construir algo que funciona e resolve um problema real.', categoria: 'programacao'},
      {texto: ' Ver diferentes pessoas ou aparelhos trabalhando juntos sem dificuldades.', categoria: 'redes'},
      {texto: ' Saber que ajudei a evitar problemas e que as pessoas estão protegidas.', categoria: 'seguranca'},
      {texto: ' Descobrir algo importante que ajudou pessoas a tomar uma decisão melhor.', categoria: 'dados'},
      {texto: ' Ver outras pessoas usando o que criei e percebendo como é fácil e agradável.', categoria: 'design'},
    ],
  },
  {
    pergunta: 'Você e seus amigos estão organizando uma viagem. Qual das opções seria mais você?',
    opcoes: [
      {texto: ' Criar um planejamento para que tudo aconteça na ordem certa.', categoria: 'programacao'},
      {texto: ' Garantir que todos consigam se comunicar e que ninguém fique sem as informações necessárias.', categoria: 'redes'},
      {texto: ' Pensar nos imprevistos e preparar alternativas caso algo dê errado.', categoria: 'seguranca'},
      {texto: ' Comparar preços, horários e avaliações para ajudar o grupo a escolher.', categoria: 'dados'},
      {texto: ' Montar um roteiro bonito, organizado e fácil de consultar por todos.', categoria: 'design'},
    ],
  },
 
   
];

function contarRespostas(respostas) {
  const pontos = {
    programacao: 0,
    redes: 0,
    seguranca: 0,
    dados: 0,
    design:0
  };

  for (let resposta of respostas) {
    pontos[resposta]++;
  }

  return pontos;
}

export default function PaginaQuiz({ sair }) {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState('');
  const [respostas, setRespostas] = useState([]);  
  const [resultado, setResultado] = useState(null);

  const pergunta = perguntas[perguntaAtual];

  function selecionarResposta(categoria) {
    setRespostaSelecionada(categoria);
  }
  
  function proximaPergunta() {
    setRespostas(respostas.concat(respostaSelecionada));

    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
      setRespostaSelecionada('');} 
      
    else {
      const todasRespostas = respostas.concat(respostaSelecionada);
      
      const pontos = contarRespostas(todasRespostas);

      let maiorPontuacao = 0;
      
      for (let categoria in pontos) {
        if (pontos[categoria] > maiorPontuacao) {
          maiorPontuacao = pontos[categoria];
        }
      }
   
      const categoriasVencedoras = [];

      for (let categoria in pontos) {
        if (pontos[categoria] === maiorPontuacao) {
          categoriasVencedoras.push(categoria);
        }
      }
     
      setResultado(categoriasVencedoras);
    }
  }  
 
  if (resultado !== null) {
    return <PaginaResultado 
          resultado={resultado}
          sair={sair}/>;
  }
   
  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F6FC' }}> 
    <ScrollView
    style={style.scrollView}
    contentContainerStyle={style.conteudoScroll}
    keyboardShouldPersistTaps="handled">

      <Text style={style.tituloQuiz}>
        Pergunta {perguntaAtual + 1} de {perguntas.length}
      </Text>

      <Text style={style.perguntaQuiz}>
        {pergunta.pergunta}
      </Text>

      {pergunta.opcoes.map((opcao, index) => (
        <TouchableOpacity
          key={index}
          style={
            respostaSelecionada == opcao.categoria
              ? style.opcaoSelecionada
              : style.opcaoQuiz
          }
          onPress={() => selecionarResposta(opcao.categoria)}
          activeOpacity={0.75}>

          <Text style={style.textoOpcaoQuiz}>
            {opcao.texto}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={
          respostaSelecionada == ''
            ? style.botaoProximaDesabilitado
            : style.botaoProxima
        }
        onPress={proximaPergunta}
        disabled={respostaSelecionada == ''}
        activeOpacity={0.8}>

        <Text style={style.textoBotaoProxima}>
          {perguntaAtual === perguntas.length - 1
            ? 'VER MEU RESULTADO'
            : 'PRÓXIMA PERGUNTA →'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
);
}
