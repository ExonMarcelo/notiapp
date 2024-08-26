import apiFactos from "./apiFactos"

export const getNews = async () => {
    const resp = await apiFactos.get('/news?page=1&limit=5&searchTerm=')
    return resp.data;
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

export const getNewsDemo = async () => {
    await sleep(2000)
    const response = await fetch('https://catfact.ninja/facts');
    const facts = await response.json();
    return facts.data;
}

