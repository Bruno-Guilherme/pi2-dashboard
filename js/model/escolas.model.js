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


const selecTCount = async (regiao) => {
  const params = new URLSearchParams({
    count: 1,
    where: JSON.stringify({
      regiao: { "$regex": regiao, "$options": "i" },
    }),
  });

  try {
    const resposta = await fetch(`${url}?${params.toString()}`, {
      method: "GET",
      headers: headers,
    })

    if (resposta.ok) {
      const data = await resposta.json();

      console.log(`Contagem para ${regiao}:`, data.count);
      return data.count;
    } else {
      console.log("Erro resposta.")
    }
  } catch (error) {
    console.log("Erro: " + error)
  }

};

export { selectCountAll, selecTCount }