
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import TelaEntrada from './telaEntrada';
import PaginaInicioQuiz from './paiginaInicialQuiz';
import PaginaQuiz from './paginaQuiz';
import PaginaMissoes from './paginaMissoes';
import PaginaResultado from './paginaResultado';

export default function AppHome() {
  const [nome, setNome] = useState('');
  const [entrou, setEntrou] = useState(false);
  const [quizIniciado, setQuizIniciado] = useState(false);
  const [telaAtual, setTelaAtual] = useState('quiz');

  // Tela de entrada
  if (!entrou) {
    return (
      <SafeAreaProvider>
        <TelaEntrada
          nome={nome}
          setNome={setNome}
          aoEntrar={() => setEntrou(true)}
        />
      </SafeAreaProvider>
    );
  }

  // Tela inicial do quiz
  if (!quizIniciado) {
    return (
      <SafeAreaProvider>
        <PaginaInicioQuiz
          nome={nome}
          iniciarQuiz={() => {
            setTelaAtual('quiz');
            setQuizIniciado(true);
          }}
          sair={() => setEntrou(false)}
        />
      </SafeAreaProvider>
    );
  }

  // Resultado e missões são controlados pelo próprio quiz
  return (
    <SafeAreaProvider>
      <PaginaQuiz
        sair={() => {
          setQuizIniciado(false);
          setTelaAtual('quiz');
        }}
      />
    </SafeAreaProvider>
  );
}
