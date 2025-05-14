const URL = 'https://fakestoreapi.com/';


export const fetchProducts = async () => {
  const response = await fetch(`${URL}products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;

}

export const fetchProductById = async (id) => {

  try{
    const response = await fetch(`${URL}products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      // Si 404 ou autre erreur HTTP
      throw new Error(`Produit non trouvé (status: ${response.status})`);
    }

    const data = await response.json();
    return data;

  }catch(error){
    console.log(error);
  }
}
