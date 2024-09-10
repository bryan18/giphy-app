import {useContext, useState} from 'react';
import {TextField} from '@mui/material';

const GifForm = ({onAddGif}) => {
    const [inputValue, setInputValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        onAddGif(inputValue);
        setInputValue('');
    };

    return <form onSubmit={onSubmit}>
        <TextField
            id="outlined-basic"
            label="Search Gif"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
        />
    </form>
};

export default GifForm;