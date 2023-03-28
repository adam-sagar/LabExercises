import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SimpleDialogDemo from './SimpleDialog';

export default function StudentCard({id, name, location, set = 'set1'}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={`https://robohash.org/${name}?size=50x50&set=${set}`}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Based in {location}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <SimpleDialogDemo
                    open={open}
                    // onClose={handleClose}
                    id={id}
                    name={name}
                    location={location}
                />
            </CardActions>
        </Card>
    );
}