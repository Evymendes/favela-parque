import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  Logo,
  Face,
  Instagram
} from '../../assets';

import * as S from './styles';
  
function Menu() {
  const [currentPage, setCurrentPage] = useState(0);
  const [open, setOpen] = useState(false);
  const location  = useLocation();

  const listMenu = [
    {
      id: 0,
      name: 'O Programa',
      router: '/o-programa',
    },
    {
      id: 1,
      name: 'Edital 2023',
      router: '/edital',
    },
    {
      id: 2,
      name: 'As Comunidades',
      router: '/as-comunidades',
    },
    {
      id: 3,
      name: 'Galerias',
      router: '/galeria',
    },
    {
      id: 4,
      name: 'Realizadores',
      router: '/realizadores',
    },
    {
      id: 4,
      name: 'Você no Parque',
      router: '/vocenoparque',
    },
    {
      id: 5,
      name: 'Equipe',
      router: '/equipe',
    },
  ];

  const renderIconBurger = () => (
    <S.StyledBurger
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </S.StyledBurger>
  );

  const isPathname = location.pathname;

  return (
    <header>
      <S.Nav>
        <Link to='/'> <S.Logo src={Logo} alt='Logo' /></Link>
        {renderIconBurger()}
        <S.Ul open={open}>
          {listMenu.map(i =>
            <S.Li currentPage={isPathname === i.router} href={i.router}>
              <Link to={i.router}>
                {i.name}
                {i.id !== listMenu.length -1 && <span>|</span>}
              </Link>
            </S.Li>)
          }
          <S.ContentIcon>
            <li>
              <a 
                rel="noopener"
                target="_blank" 
                href='https://pt-br.facebook.com/favelaparque/' 
              >
                <S.ImgIcon src={Face} alt='Icon Face' />
              </a>
            </li>
            <li>
              <a 
                rel="noopener"
                target="_blank"
                href='https://instagram.com/favelaparque?igshid=YmMyMTA2M2Y='
              >
                <S.ImgIcon src={Instagram} alt='Icon Instagram' />
              </a>
            </li>
          </S.ContentIcon>
        </S.Ul>
      </S.Nav> 
    </header>
  );
}

export default Menu;
