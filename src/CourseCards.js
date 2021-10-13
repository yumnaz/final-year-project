import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';


function CourseCards(){
    return(
        <div >
            <div style={{display:'flex', alignItems:'center'}}>
            <p> Over 100,000 Interactive Online Classes</p>
            
            </div>   
             <div style={{height: '500px', display:'flex', alignItems:'center'}}>
             <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
        //   width: 128,
        //   height: 128,
        },
      }}
    >
            <button>
    <Card sx={{ maxWidth: 250 }} style={{margin:'10px'}}>
      <CardMedia
        component="img"
        height="170"
        image="https://images.unsplash.com/photo-1613905780946-26b73b6f6e11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80"
        alt="math course"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Course xyx 
        </Typography>
      </CardContent>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Miss abc"
      />
    </Card>
    </button>
    <button>
    <Card sx={{ maxWidth: 250 }} style={{margin:'10px'}}>
      <CardMedia
        component="img"
        height="170"
        image="https://images.unsplash.com/photo-1613905780946-26b73b6f6e11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80"
        alt="math course"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Course xyz
        </Typography>
      </CardContent>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Miss abc"
      />
    </Card>
    </button>
    <button>
    <Card sx={{ maxWidth: 250 }} style={{margin:'10px'}}>
      <CardMedia
        component="img"
        height="170"
        image="https://images.unsplash.com/photo-1613905780946-26b73b6f6e11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80"
        alt="math course"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Course xyz
        </Typography>
      </CardContent>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Miss abc"
      />
    </Card>
    </button>
    <button>
    <Card sx={{ maxWidth: 250 }} style={{margin:'10px'}}>
      <CardMedia
        component="img"
        height="170"
        image="https://images.unsplash.com/photo-1613905780946-26b73b6f6e11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80"
        alt="math course"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Course xyz
        </Typography>
      </CardContent>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Miss abc"
      />
    </Card>
    </button>
    </Box>
        </div>
        </div>
    );
}

export default CourseCards;