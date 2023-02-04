import Layout from '../Layout';

import * as S from './styles';
  
function YouAtThePark() {
  return (
    <Layout>
      <S.BackText>
        Com o objetivo de ampliar o conhecimento socioambiental das populações das
        comunidades com ações educativas lúdicas dentro da Unidade de Conservação do
        Parque Nacional da Tijuca, realizaremos uma série de passeios e atividades ao longo
        de 2023, unindo o lazer, a vivência ambiental na prática e a descoberta de locais
        especiais do PNT. E de quebra você também pode conhecer o Cristo Redentor no
        passeio especial do Trem do Corcovado.
        Inscreva-se aqui e entraremos em contato para agendar as datas das atividades
        comunitárias.
      </S.BackText>
      <S.BackText>
        <a href='https://forms.gle/sCAqAibJr4VHPEVr9'
          rel="noreferrer"
          target="_blank"
        >
          Link para um formulário.
        </a>
      </S.BackText>
    </Layout>
  );
}
  
export default YouAtThePark;
  