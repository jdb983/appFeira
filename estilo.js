
import { StyleSheet, Platform } from 'react-native';

const cores = {  
  fundo: '#050B27',
  branco: '#FFFFFF',
  principal: '#7547FF',
  principalEscuro: '#5832D6',
  destaque: '#15234C',
  texto: '#F5F7FF',
  textoSecundario: '#B7C4E4',
  borda: '#273D70',
  sucesso: '#15803D',
  erro: '#DC4545',
  desabilitado: '#46516F',
};

export const style = StyleSheet.create({

  // ESTILO GERAL

  containerTelaLogin: {
    flex: 1,
    backgroundColor: '#050B27',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 26,
    paddingVertical: 28,
  },

  // TELA DE ENTRADA

  tituloTelaEntrada: {
    fontSize: 34,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 42,
    marginBottom: 12,
    letterSpacing: -0.7
  },

  subtituloTelaEntrada: {
    fontSize: 16,
    color: '#C6D2F0',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 25,
    paddingHorizontal: 8
  },

  campoInput: {
    width: '100%',
    maxWidth: 420,
    minHeight: 56,
    backgroundColor: '#101A3A',
    borderWidth: 1.5,
    borderColor: cores.borda,
    borderRadius: 14,
    paddingHorizontal: 18,
    fontSize: 16,
    color: '#FFFFFF',
    ...(Platform.OS == 'web'
      ? { outlineStyle: 'none' }
      : {}),
  },

  ilustracao: {
    width: '100%',
    maxWidth: 310,
    height: 235,
    alignSelf: 'center',
    marginVertical: 8,
  },

  // CONTEÚDO DAS TELAS

  containerInicioQuiz: {
    flex: 1,
    backgroundColor: cores.fundo,
    paddingHorizontal: 22,
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // CABEÇALHO

  cabecalho: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },

  saudacao: {
    flex: 1,
    fontSize: 21,
    fontWeight: '800',
    color: cores.texto,
    marginRight: 12,
  },

  // BOTÃO SAIR

  botaoSairCustomizado: {
    backgroundColor: '#FDEBEC',
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotaoSair: {
    color: cores.erro,
    fontSize: 14,
    fontWeight: '700',
  },

  // TELA INICIAL DO QUIZ

  avisoQuiz: {
    width: '100%',
    maxWidth: 520,
    fontSize: 23,
    lineHeight: 31,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 14,
    fontWeight: '800',
    color: cores.texto,
  },

  textoQuiz: {
    width: '100%',
    maxWidth: 520,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 26,
    color: cores.textoSecundario,
  },

  botaoEntrarQuiz: {
    width: '100%',
    maxWidth: 340,
    minHeight: 56,
    backgroundColor: '#7547FF',
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 18,
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  textoBotaoEntrarQuiz: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 0.6,
  },

  // ÁREA DO QUIZ

  conteudo: {
    flex: 1,
    backgroundColor: cores.fundo,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  scrollView: {
    flex: 1,
    backgroundColor: cores.fundo,
  },

  conteudoScroll: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 40,
  },

  // TÍTULO E PERGUNTA

  tituloQuiz: {
    width: '100%',
    maxWidth: 600,
    fontSize: 25,
    fontWeight: '800',
    textAlign: 'center',
    color: cores.texto,
    marginBottom: 18,
    lineHeight: 34,
  },

  textoProgresso: {
    fontSize: 14,
    fontWeight: '700',
    color: cores.principal,
    textAlign: 'center',
    marginBottom: 12,
  },

  perguntaQuiz: {
    width: '100%',
    maxWidth: 600,
    fontSize: 19,
    lineHeight: 29,
    fontWeight: '600',
    color: cores.texto,
    textAlign: 'center',
    marginBottom: 28,
  },

  // OPÇÕES DE RESPOSTA

  opcaoQuiz: {
    width: '100%',
    maxWidth: 560,
    minHeight: 66,
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderWidth: 1.5,
    borderColor: cores.borda,
    borderRadius: 16,
    marginBottom: 13,
    backgroundColor: cores.branco,
    justifyContent: 'center',
  },

  opcaoSelecionada: {
    width: '100%',
    maxWidth: 560,
    minHeight: 66,
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderWidth: 2,
    borderColor: cores.principal,
    borderRadius: 16,
    marginBottom: 13,
    backgroundColor: cores.destaque,
    justifyContent: 'center',
  },

  textoOpcaoQuiz: {
    fontSize: 16,
    lineHeight: 24,
    color: '#050B27',
    textAlign: 'center',
  },

  // BOTÃO PRÓXIMA

  botaoProxima: {
    width: '100%',
    maxWidth: 340,
    minHeight: 54,
    padding: 15,
    backgroundColor: cores.principal,
    borderRadius: 15,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  botaoProximaDesabilitado: {
    width: '100%',
    maxWidth: 340,
    minHeight: 54,
    padding: 15,
    backgroundColor: cores.desabilitado,
    borderRadius: 15,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  textoBotaoProxima: {
    color: cores.branco,
    fontSize: 16,
    fontWeight: '800',
  },

  // RESULTADO

  cartaoResultado: {
    width: '100%',
    maxWidth: 560,
    backgroundColor: cores.branco,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: cores.borda,
    padding: 22,
    marginBottom: 18,
    alignSelf: 'center',
  },

  tituloResultado: {
    fontSize: 21,
    lineHeight: 29,
    color: cores.principal,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
  },

  descricaoResultado: {
    fontSize: 16,
    lineHeight: 26,
    color: cores.textoSecundario,
    textAlign: 'center',
  },

  agradecimento: {
    fontSize: 16,
    color: cores.texto,
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 20,
    fontWeight: '600',
  },

  
  botaoMissoes: {
    backgroundColor: '#6C4CE3',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },

  textoBotaoMissoes: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  containerMissoes: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 40,
    backgroundColor: '#F7F5FF',
  },

  tituloMissoes: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#35245E',
    marginBottom: 12,
  },

  subtituloMissoes: {
    fontSize: 16,
    textAlign: 'center',
    color: '#55516A',
    lineHeight: 24,
    marginBottom: 24,
  },

  cartaoMissao: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E4DDFB',
  },

  emojiMissao: {
    fontSize: 42,
    textAlign: 'center',
    marginBottom: 12,
  },

  tituloCartaoMissao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#35245E',
    textAlign: 'center',
    marginBottom: 12,
  },

  descricaoMissao: {
    fontSize: 15,
    lineHeight: 23,
    color: '#55516A',
    marginBottom: 18,
  },

  botaoMissao: {
    backgroundColor: '#6C4CE3',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBotaoMissao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  voltarMissoes: {
    textAlign: 'center',
    color: '#6C4CE3',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 16,
  },
  imagemMissao: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
  },
});
