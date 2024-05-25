import { 
    selecTCount,
    selectCountAll,
    selectDependencias,
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

const getDependencias = async () => {
    const dependencias = ['federal', 'estadual', 'municipal', 'privada'];
    let data = [];

    for (let i = 0; i < dependencias.length; i++) {
        data[i] = await selectDependencias(i + 1);
    }

    //console.log(data)

    return data;

}

getRegioes()
const teste = getDependencias();

export { getDependencias }