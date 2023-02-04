import { Link } from 'react-router-dom';
import Menu from '../../components/Menu';
import {
  Logo,
  ICMBio,
  Corcovado,
  PrecisaSer,
  PNTijuca,
} from '../../assets';

import * as S from './styles';
  
  function Home() {

    return (
      <S.Container>
        <Menu />
        <S.Main>
          <S.Background />
          <S.Section>
            <>
              <S.ImgLogo src={Logo} alt='Logo'  />
              <S.LogoText>Programa de Educação Socioambiental do Parque Nacional da Tijuca</S.LogoText>
            </>
            <S.Text>
              Realizado em parceria com quatro comunidades do entorno da Floresta
              Nacional da Tijuca: Cerro-Corá, Guararapes, Morro dos Prazeres e Vila Cândido
            </S.Text>
            <S.Footer>
            <Link to='/edital' >
              <S.ContentHighlight>
                <S.Span color={`var(--color_green)`} />
                <S.TextHighlight> Edital de Recursos 2023 </S.TextHighlight>
                <S.BackHighlight>
                  <S.Span none color={`var(--color_brown)`} />
                  <S.Span color={`var(--color_white)`} />
                  <S.Span color={`var(--color_blue)`} />
                </S.BackHighlight>
              </S.ContentHighlight>
              </Link>
              <S.TextAchievement>Realização</S.TextAchievement>
              <S.ContentPartnerships>
                <S.ImgPartnerships src={Corcovado} alt='Logo Corcovado'  />
                <S.ImgPartnerships src={PNTijuca} alt='Logo PNTijuca'  />
                <S.ImgICM src={ICMBio} alt='Logo ICMBio'  />
                <S.ImgPartnerships src={PrecisaSer} alt='Logo PrecisaSer'  />
              </S.ContentPartnerships>
            </S.Footer>
          </S.Section>
        </S.Main>
      </S.Container>
    );
  }
  
  export default Home;
  