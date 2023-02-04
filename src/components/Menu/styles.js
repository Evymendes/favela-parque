import styled from "styled-components";

export const Header = styled.header`
  display: flex;
`;

export const Nav = styled.nav`
  padding: 0 3rem 0 3rem;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    margin: auto;
    padding: 0 0 1rem 0;
    width: 90%;
  }
`;

export const Logo = styled.img`
  width: 4rem;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-end;
  z-index: 2;
  
  @media (max-width: 970px) {
    padding-top: 3.5rem;
    flex-flow: column nowrap;
    align-items: flex-start;
    background-color: var(--color_green);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 1rem 1rem 0 2rem;
      color: #fff;
    }
  }
`;

export const ContentIcon = styled.div`
  display: flex;
  
  li {
    padding: 0;
  }
  
  @media (max-width: 970px) {
    padding: 1rem 0 0 2rem;
  }
`;

export const Li = styled.li`
  display: flex;

  a {
    font-size: 1rem;
    color: ${props => props.currentPage ? '#000' : '#ccc'};
    font-family: HandSean;
    text-decoration: none;
    cursor: pointer;

    span  {
      color: #000;
    }

    :hover  {
      color: #000;
    }

    @media (max-width: 970px) {
      color: var(--color_white);

      span  {
        display: none;
      }
    }
  }

  span {
    padding: 0 1rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  max-width: 560px;
`;

export const ImgIcon = styled.img`
  margin-left: 1rem;
  width: 1.125rem;
  cursor: pointer;

  @media (max-width: 970px) {
    margin-left: 0;
    margin-right: 1rem;
    width: 1.563rem;
  }
`;

export const StyledBurger = styled.div`
  display: none;
  
  @media (max-width: 970px) {
    width: ${({ open }) => !open && '2rem'};
    height: 1.5rem;
    z-index: 20;
    display: none;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: ${({ open }) => open && '1.6rem'};
    height: .10rem;
    background-color: ${({ open }) => open ? '#fff' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;