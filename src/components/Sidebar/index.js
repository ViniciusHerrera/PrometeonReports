import { useState } from 'react';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { Collapse } from 'reactstrap';
import { FiHome, FiDatabase, FiPieChart, FiBarChart2
  , FiTrendingUp, FiLayers, FiChevronDown } from 'react-icons/fi'

const Side = styled(Nav)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  min-width: max-content;

  .nav-link {
    display: inline-flex;
    align-items: center;

    font-weight: 500;
    color: #333;
    white-space: nowrap;
  }

  .nav-link .icon {
    margin-right: 4px;
    color: #999;
  }

  .nav-link #chevron {
    margin-left: 8px;
    transition: .3s transform ease-in-out;

    &[data-status="false"] {
      transform: rotate(0deg);
    }
    
    &[data-status="true"] {
      transform: rotate(-180deg);
    }
  }

  .nav-link.active {
    color: #007bff;
  }

  .nav-link:hover .icon,
  .nav-link.active .icon {
    color: inherit;
  }

  @media(max-width: 420px){
    display: block;
    width: 100%;
  }
`;

const Sticky = styled.div`
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */

  @supports ((position: -webkit-sticky) or (position: sticky)) {
    position: -webkit-sticky;
    position: sticky;
  }
`;

export default function Sidebar(props){
  const [isOpen, setOpenState] = useState(false); 
  const iconSize = 18;
  
  return (
    <Side className={`bg-light ${props.className}`}>
      <Sticky className="pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <FiHome className="icon" size={iconSize}/>
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <FiDatabase className="icon" size={iconSize}/>
              Data Collection
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => setOpenState(!isOpen)}>
              <FiPieChart className="icon" size={iconSize}/>
              Força e Geometria
              <FiChevronDown 
                id="chevron"
                className="icon"
                size={iconSize}
                data-status={isOpen}
              />
            </a>

            <Collapse isOpen={isOpen}>
              <ul className="sidebar-dropdown list-unstyled ml-4">
                <li className="nav-item">
                  <a className="nav-link" href="#">UPGR</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">UPOC</a>
                </li>
              </ul>
            </Collapse>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <FiBarChart2 className="icon" size={iconSize}/>
              Primeiro Controle
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <FiTrendingUp className="icon" size={iconSize}/>
              Controle de Peso
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <FiLayers className="icon" size={iconSize}/>
              Raio X
            </a>
          </li>
        </ul>
      </Sticky>
    </Side>
  );
}