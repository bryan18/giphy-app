import {useState} from 'react';
import {Grid2} from '@mui/material';

const useLoading = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleActiveLoading = () => setIsLoading(true);
    const handleRemoveLoading = () => setIsLoading(false);

    return {
        isLoading,
        activeLoading: handleActiveLoading,
        removeLoading: handleRemoveLoading,
        loadingComponent: <LoadingComponent />
    };
};

const LoadingComponent = () => {
    return <Grid2
        key={'loading'}
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingX: 10,
            minHeight: 180,}}
    >
        <img
            src={'https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-11-849_512.gif'}
            alt={'loading'}
            className={'loading-image'}
        />
    </Grid2>
};

export default useLoading;