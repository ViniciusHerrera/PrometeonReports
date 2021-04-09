import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Navbar from '../../../src/components/NavbarPro';
import Sidebar from '../../../src/components/Sidebar';

export default function DataCollection() {
  return (
    <>
      <Navbar />

      <Container fluid>
        <Row>
          <Sidebar className="col-sm-4 col-md-3 col-lg-3 col-xl-2"/>

          <main className="col-sm-8 col-md-9 col-lg-9 col-xl-10 ml-auto">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Data Collection</h1>

              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="dropdown">
                  <button type="button" className="btn btn-sm btn-outline-secondary mr-1" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <span data-feather="filter"></span>
                  </button>

                  <div className="dropdown-menu dropdown-menu-right">
                    <h6 className="dropdown-header">Filtro</h6>
                    <div className="dropdown-divider"></div>

                    <form className="px-4 py-3">
                      <div className="form-group">
                        <select className="custom-select" id="iptGrpMaquina">
                          <option selected>Máquina</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <select className="custom-select" id="iptGrpMaterial">
                          <option selected>Material</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <select className="custom-select" id="iptGrpSequencial">
                          <option selected>Sequencial</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <select className="custom-select" id="iptGrpVariavel">
                          <option selected>Variável de Coleta</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>

                      <button type="submit" className="btn btn-primary">Aplicar</button>
                      <button type="submit" className="btn btn-primary">Limpar</button>
                    </form>
                  </div>
                </div>

                <button type="button" className="btn btn-sm btn-outline-secondary">
                  <span data-feather="refresh-cw"></span>
                </button>

                <div className="btn-group ml-2">
                  <button type="button" className="btn btn-sm btn-outline-secondary">
                    <span data-feather="share-2"></span>
                  </button>

                  <button type="button" className="btn btn-sm btn-outline-secondary">
                    <span data-feather="download"></span>
                  </button>
                </div>

                <button id="calendarRange" type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle ml-2">
                  <span data-feather="calendar"></span>
                  <span id="calendar"></span>
                </button>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>sit</td>
                  </tr>
                  <tr>
                    <td>1,002</td>
                    <td>amet</td>
                    <td>consectetur</td>
                    <td>adipiscing</td>
                    <td>elit</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>Integer</td>
                    <td>nec</td>
                    <td>odio</td>
                    <td>Praesent</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>libero</td>
                    <td>Sed</td>
                    <td>cursus</td>
                    <td>ante</td>
                  </tr>
                  <tr>
                    <td>1,004</td>
                    <td>dapibus</td>
                    <td>diam</td>
                    <td>Sed</td>
                    <td>nisi</td>
                  </tr>
                  <tr>
                    <td>1,005</td>
                    <td>Nulla</td>
                    <td>quis</td>
                    <td>sem</td>
                    <td>at</td>
                  </tr>
                  <tr>
                    <td>1,006</td>
                    <td>nibh</td>
                    <td>elementum</td>
                    <td>imperdiet</td>
                    <td>Duis</td>
                  </tr>
                  <tr>
                    <td>1,007</td>
                    <td>sagittis</td>
                    <td>ipsum</td>
                    <td>Praesent</td>
                    <td>mauris</td>
                  </tr>
                  <tr>
                    <td>1,008</td>
                    <td>Fusce</td>
                    <td>nec</td>
                    <td>tellus</td>
                    <td>sed</td>
                  </tr>
                  <tr>
                    <td>1,009</td>
                    <td>augue</td>
                    <td>semper</td>
                    <td>porta</td>
                    <td>Mauris</td>
                  </tr>
                  <tr>
                    <td>1,010</td>
                    <td>massa</td>
                    <td>Vestibulum</td>
                    <td>lacinia</td>
                    <td>arcu</td>
                  </tr>
                  <tr>
                    <td>1,011</td>
                    <td>eget</td>
                    <td>nulla</td>
                    <td>Class</td>
                    <td>aptent</td>
                  </tr>
                  <tr>
                    <td>1,012</td>
                    <td>taciti</td>
                    <td>sociosqu</td>
                    <td>ad</td>
                    <td>litora</td>
                  </tr>
                  <tr>
                    <td>1,013</td>
                    <td>torquent</td>
                    <td>per</td>
                    <td>conubia</td>
                    <td>nostra</td>
                  </tr>
                  <tr>
                    <td>1,014</td>
                    <td>per</td>
                    <td>inceptos</td>
                    <td>himenaeos</td>
                    <td>Curabitur</td>
                  </tr>
                  <tr>
                    <td>1,015</td>
                    <td>sodales</td>
                    <td>ligula</td>
                    <td>in</td>
                    <td>libero</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </Row>
      </Container>
    </>
  );
}
