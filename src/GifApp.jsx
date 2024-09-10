import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import GifForm from './components/GifForm.jsx';
import Gifs from './components/Gifs.jsx';
import {useState} from 'react';
import useFetch from './hooks/useFetch.jsx';

const GifApp = () => {
    const [gifs, setGifs] = useState([]);

    const onAddGif = async (gifName) => {
        if (gifs.includes(gifName)) return;
        setGifs([gifName, ...gifs]);
    };
    return <Container fixed>
        <h1>GifApp</h1>
        <GifForm onAddGif={onAddGif} />

        {
            gifs.length > 0 && gifs.map((item) => <Gifs key={item} gifs={item} gifTitle={item} />)
        }
    </Container>;
}

export default GifApp;