import useFetch from '../hooks/useFetch.jsx';

const giphy = () => {
    const url = 'https://api.giphy.com/v1/gifs/search';
    const apiKey = 'Ht0k1LPqZIxb1BocgCJQm2lqZYxotpls';
    const fetch = useFetch();

    const getGifs = async (search, limit = 10) => {
        const resp = await fetch.get(`${url}?api_key=${apiKey}&limit=${limit}&q=${search}`);
        const {data} = await resp.json();
        console.log(data);
        return data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
    }

    return {getGifs};
}

export default giphy;