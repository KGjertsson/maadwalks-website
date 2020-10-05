import React from 'react';
import {
  Card,
  CardMedia,
  CardActionArea,
  Button,
  CardActions,
  Avatar,
  CardHeader,
} from '@material-ui/core';

import useStyles from '../styles/GameCardStyles';

import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

interface GameCardProps {
  gameTitle: string;
  gameImage: any;
  gameLink: string;
}

const GameCard = ({ gameTitle, gameImage, gameLink }: GameCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            <a className={classes.hyperlink} href={gameLink}>
              <Button>Play</Button>
            </a>
          </Avatar>
        }
        title={gameTitle}
      />
      <CardMedia className={classes.media} image={gameImage} />
    </Card>
  );
};

export default GameCard;
