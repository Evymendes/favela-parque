import {
    Logo,
    ICMBio,
    Corcovado,
    PrecisaSer,
    PNTijuca,
    ImgFavela
  } from '../../assets';
  
    import Menu from '../../components/Menu';
  
    import * as S from './styles';
    
    function Layout({children}) {
  
      return (
        <S.Container>
          <Menu />
          <S.Main>
            <S.Background>
              <S.ContentText>
               {children}
              </S.ContentText>
              </S.Background>
            <S.Section>
              <S.ContentLogo>
                <S.ImgLogo src={Logo} alt='Logo'  />
                <S.LogoText>Programa de Educação Socioambiental do Parque Nacional da Tijuca</S.LogoText>
              </S.ContentLogo>
              <S.BackgBlack />
              <S.Footer>
                <div>
                  <S.TextAchievement>Realização</S.TextAchievement>
                  <S.ContentPartnerships>
                      <S.ImgPartnerships src={Corcovado} alt='Logo Corcovado'  />
                      <S.ImgPartnerships src={PNTijuca} alt='Logo PNTijuca'  />
                      <S.ImgICM src={ICMBio} alt='Logo ICMBio'  />
                      <S.ImgPartnerships src={PrecisaSer} alt='Logo PrecisaSer'  />
                  </S.ContentPartnerships>
                </div>
                <S.ContentImageFav />
              </S.Footer>
            </S.Section>
          </S.Main>
        </S.Container>
      );
    }
    
    export default Layout;
    