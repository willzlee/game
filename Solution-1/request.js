async function getSentence(url){
     const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            "x-rapidapi-key": "114f9d9d0emshb31b0ad922c76e5p10f98djsn525ba86c1359",
            "x-rapidapi-host": "linguatools-sentence-generating.p.rapidapi.com",
            "useQueryString": true
        }
    });
    return response.json();
}
