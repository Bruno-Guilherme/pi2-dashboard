const sobre = document.getElementById('sobre');

sobre.onclick = () => {
    const htmlContent = `
 <h1 class="titulo-sobre">Sobre o Dashboard</h1>
 <div class="normal">
     <h2>Problema encontrado:</h2>
     <p class="paragrafo">A falta de dados precisos e atualizados dificultava a implementação de políticas inclusivas. Sem uma compreensão abrangente da situação, era difícil identificar áreas com maior necessidade de investimento e aprimoramento.</p>
 </div>
 <div class="normal">
     <h2>O que mostramos no dashboard:</h2>
     <p>Através do um dashboard interativo, faz-se uma demonstração de indicadores.</p>
 </div>
 <div class="normal">
     <h2>Como essa ferramenta pode ajudar no problema encontrado:</h2>
     <p>Esse dashboard pode ser usado como uma ferramenta poderosa para visualizar dados relevantes e tomar decisões informadas sobre políticas públicas de educação inclusiva.</p>
 </div>
`;

const dashboardContent = document.getElementById('main');

dashboardContent.innerHTML = htmlContent;
}