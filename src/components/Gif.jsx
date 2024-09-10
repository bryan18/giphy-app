import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material';

const Gif = ({image_url, title}) => {
    return <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={image_url}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
};

export default Gif;