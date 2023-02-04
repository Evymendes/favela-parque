import Layout from '../Layout';
import FileEdital from '../../files/EditalDeAcessoARecursos2023.docx';

import * as S from './styles';
  
function Notice() {
  return (
    <Layout>
      <S.BackText>
        O Edital de Acesso a Recursos 2023 é a primeira iniciativa do Programa Favela-
        Parque. Ao longo de 2023 teremos ainda o Edital de Fortalecimento Comunitário
        (voltado para coletivos já organizados e permanentes nas comunidades) e atividades
        socioambientais de aprofundamento da relação do Parque com as comunidades e
        vice-versa.
        Esta primeira ação visa identificar propostas de interesse comunitário, qualificar seus
        proponentes e ações e financiar as ações ao final do processo.
      </S.BackText>
      <S.BackText>
      <a href={FileEdital} download>Baixe aqui o Edital 2023.</a>
      </S.BackText>
    </Layout>
  );
}
  
export default Notice;
  