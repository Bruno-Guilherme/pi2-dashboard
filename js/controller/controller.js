import { 
    selecTCount,
    selectCountAll,
} from "../model/escolas.model.js";

const getRegioes = async () => {
    const regioes = ["norte", "nordeste", "centro", "sudeste", "sul", "brasil"];
    const brasil = document.getElementById('brasil-val');

    regioes.forEach(async (regiao) => {
        const elemento = document.getElementById(`${regiao}-val`);

        if (regiao != 'brasil') {
            let valor = await selecTCount(regiao);

            elemento.innerHTML = valor;
        }

    })
    //brasil.innerHTML = selecTCount();
    const teste = await selectCountAll();
    brasil.innerHTML = teste;
}

getRegioes()