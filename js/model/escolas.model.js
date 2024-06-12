const url = "https://parseapi.back4app.com/classes/escolas";
const headers = {
  "X-Parse-Application-Id": "vzRffxsUOhrXi1JGalRE2jQqXUEijoG8cHwgF6UB",
  "X-Parse-REST-API-Key": "FKRy01p8VSjySwQQ0q4lUt2k08vL6WJDRp9m56zN",
};
const content_type = { "Content-Type": "application/json" };

const selectCountAll = async () => {
  const params = new URLSearchParams({
    count: 1,
  });

  try {
    const resposta = await fetch(`${url}?${params.toString()}`, {
      method: "GET",
      headers: headers,
    });

    if (resposta.ok) {
      const data = await resposta.json();

      return data.count;
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.log(error)
  }
};


const selecTCount = async (reg) => {
  // SELECIONA A QUANTIDADE DE CADA LINHA POR REGIÃO
  // SELECT COUNT(regiao) WHERE regiao ILIKES reg;

  const params = new URLSearchParams({
    count: 1,
    where: JSON.stringify({
      regiao: { "$regex": reg, "$options": "i" },
    }),
  });

  try {
    const resposta = await fetch(`${url}?${params.toString()}`, {
      method: "GET",
      headers: headers,
    })

    if (resposta.ok) {
      const data = await resposta.json();

      //console.log(`Contagem para ${reg}:`, data.count);
      return data.count;
    } else {
      console.log("Erro resposta.")
    }
  } catch (error) {
    console.log("Erro: " + error)
  }

};

const selectDependencias = async (dep) => {
  const params = new URLSearchParams({
    count: 1,
    where: JSON.stringify({
      dependencia: dep,
    }),
  });

  try {
    const resposta = await fetch(`${url}?${params.toString()}`, {
      method: "GET",
      headers: headers,
    });

    if (resposta.ok) {
      const data = await resposta.json();
      return data.count;
    } else {
      // Se a resposta não estiver OK, lançar um erro
      throw new Error("A solicitação não foi bem-sucedida. Código de status: " + resposta.status);
    }
  } catch (error) {
    // Rejeitar explicitamente a Promessa em caso de erro
    console.error("Deu erro: " + error);
    throw error;
  }
}

const selectLocalizacao = async (tipo) => {
  const params = new URLSearchParams({
    count: 1,
    where: JSON.stringify({
      localizacao: tipo,
    }),
  });

  try {
    const resposta = await fetch(`${url}?${params.toString()}`, {
      method: "GET",
      headers: headers,
    });

    if (resposta.ok) {
      const data = await resposta.json();
      console.log("Localizacao" + data)
      return data.count;

    } else {
      throw new Error("A solicitação não foi bem-sucedida. Código de status: " + resposta.status);

    }
  } catch (error) {
    console.error("Deu erro: " + error);
    throw error;
  }
}

export { selectCountAll, selecTCount, selectDependencias, selectLocalizacao }