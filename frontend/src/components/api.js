const API_URL = 'http://localhost:5000';

export const fetchDataFromAPI = async (searchTerm) => {
  try {
    const response = await fetch(`${API_URL}/characters/?q=${searchTerm}`);
    if (!response.ok) {
      throw new Error('Error al buscar datos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};