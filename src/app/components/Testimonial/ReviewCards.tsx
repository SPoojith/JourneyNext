import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

interface ReviewCardProps{
    altText: string;
    imageSrc: string;
    title: string;
    subheaderLink: string;
    bodyText: string;
}

export default function ReviewCard({altText, imageSrc, title, subheaderLink, bodyText}:ReviewCardProps) {
  return (
    <Card sx={{ margin:'10px'}}>   
      <CardHeader
        avatar={
            <Avatar 
              sx={{ width: 56, height: 56 }} 
              alt={altText || ''}
              src={imageSrc} 
            />
          }
        title={title || ''}
        subheader={
            <a href={subheaderLink} target="_blank" rel="noopener noreferrer">
              {subheaderLink}
            </a>
          }
        sx={{textAlign: 'left'}}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary',fontSize: '1rem',alignItems: 'left' }}>
            {bodyText || ''}
        </Typography>
      </CardContent>
    </Card>
  );
}