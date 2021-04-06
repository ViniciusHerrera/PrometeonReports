import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';

const NavPro = styled(Navbar)`
  justify-content: start;
  min-width: 250px;
  background-color: ${({ theme }) => theme.colors.primary};

  .navbar-brand {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }

  .brand-image {
    box-sizing: border-box;
    vertical-align: middle;
    border-style: none;

    height: 40px;
  }
`;

const Button = styled.button`
  display: inline-flex;

  text-align: center;
  vertical-align: middle;

  padding: 0.25rem;
  background-color: transparent;

  border: none;
  border-radius: 0.25rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light_primary};
    border-color: transparent;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.dark_primary};
    box-shadow: none;
    border-color: transparent;
  }
`;

export default function NavbarPro(){
  return (
    <NavPro className="navbar-dark sticky-top flex-md-flex-nowrap p-0 shadow">
      <Button type="button" className="ml-2">
        <FiMenu size={24} color="#FFF" />
      </Button>

      <NavPro.Brand href="#">
        <img 
          src="/images/logo/proWhiteLogo.png"
          alt="Prometeon"
          loading="lazy"
          className="brand-image"
        />
      </NavPro.Brand>
    </NavPro>
  );
};