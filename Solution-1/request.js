async function getSentence(url){
     const response = await fetch(url, {
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
