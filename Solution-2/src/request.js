export async function getSentence(params){
  let host = 'https://linguatools-sentence-generating.p.rapidapi.com/realise' + params;
  const response = await fetch(host, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        "x-rapidapi-key": "",
        "x-rapidapi-host": "linguatools-sentence-generating.p.rapidapi.com",
        "useQueryString": true
    }
  });
  return response.json();
}
