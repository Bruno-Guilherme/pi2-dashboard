import { render } from "./graphs.js";

const dependencias = document.getElementById('dependencias');

dependencias.onclick = () => {
    const dashboardContent = document.getElementById('main');

    const htmlContent = `
    <main id="main" class="main-container">
            <h2>Quantidade de Escolas Questionadas por Região</h2>
            <div class="main-cards">
              <div class="card">
                <div class="card-inner">
                  <h3>NORTE</h3>
                </div>
                <h1 id="norte-val">240</h1>
              </div>
        
              <div class="card">
                <div class="card-inner">
                  <h3>NORDESTE</h3>
                </div>
                <h1 id="nordeste-val">240</h1>
              </div>
        
              <div class="card">
                <div class="card-inner">
                  <h3>CENTRO OESTE</h3>
                </div>
                <h1 id="centro-val">240</h1>
              </div>
        
              <div class="card">
                <div class="card-inner">
                  <h3>SUDESTE</h3>
                </div>
                <h1 id="sudeste-val">240</h1>
              </div>
        
              <div class="card">
                <div class="card-inner">
                  <h3>SUL</h3>
                </div>
                <h1 id="sul-val">240</h1>
              </div>
        
              <div class="card">
                <div class="card-inner">
                  <h3>BRASIL</h3>
                </div>
                <h1 id="brasil-val">240</h1>
              </div>
            </div>
        
            <div class="charts">
              <div class="charts-card">
                <h2>Dependências Administrativas</h2>
                <div id="bar-chart"></div>
              </div>
        
              <div class="charts-card">
                <h2>Zona de Localização</h2>
                <div id="donut"></div>
              </div>
            </div>
        
          </main>
    `

    dashboardContent.innerHTML = htmlContent;

    render();
}