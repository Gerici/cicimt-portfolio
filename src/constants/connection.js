// connection.js

const BASE_URL = 'https://pma.your-server.de'; // Sostituisci con l'URL del tuo backend su Aruba

// Funzione per fare una richiesta GET al backend
export const fetchDataFromBackend = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/data`);
    if (!response.ok) {
      throw new Error('Errore nel caricamento dei dati');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Errore:', error);
    return null;
  }
};

// Funzione per fare una richiesta POST al backend
export const postDataToBackend = async (postData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error('Errore nel salvataggio dei dati');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Errore:', error);
    return null;
  }
};
