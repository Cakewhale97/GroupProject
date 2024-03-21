import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia'; // Make sure this is imported

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomCard = styled(Card)({
  maxWidth: 345,
});

export default function ProfileCard() {
  return (
    <CustomCard>
      <CardHeader
        avatar={
          // Assuming you have a URL for the person's image
          <Avatar aria-label="profile-picture" src="https://source.unsplash.com/random">
            R
          </Avatar>
        }
        title="John Doe"
        subheader="September 14, 2022"
      />
       <CardMedia
        component="img"
        height="194"
        image="https://source.unsplash.com/random"
        alt="Random"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" color="primary">
          View Profile
        </Button>
      </CardActions>
    </CustomCard>
  );
}



