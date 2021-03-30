import styled from 'styled-components';

import { Navbar } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';

const NavPro = styled(Navbar)`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: nowrap;

  position: sticky;
  top: 0;
  z-index: 1020;
  padding: 0;

  min-width: 250px;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
`;

const ButtonPro = styled.a`
  margin-left: 0.5rem;
  padding: 0.25rem 0.25rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: none;

  cursor: pointer;
`;

const LogoLink = styled.a`
  flex-direction: column;
  display: inline-block;

  align-items: center;

  margin: 0;
  padding: 0 0.25rem;
`;

const Image = styled.img`
  box-sizing: border-box;
  vertical-align: middle;
  border-style: none;

  height: 40px;

  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
`;

export default function NavbarPro(){
  return (
    <NavPro>
      <ButtonPro>
        <FiMenu size={24} color="#FFF" />
      </ButtonPro>

      <LogoLink href="">

        <Image 
          src="/images/logo/proWhiteLogo.png" 
          alt="Prometeon" 
          loading="lazy" 
        /> 
      
      </LogoLink>
    </NavPro>
  );
};