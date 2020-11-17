import React from 'react';
import { Card, CardMedia, Button } from '@material-ui/core';

import useStyles from '../styles/GameCardStyles';

interface GameCardProps {
  gameTitle: string;
  gameImage: any;
  gameLink: string;
}

const GameCard = ({ gameTitle, gameImage, gameLink }: GameCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} id='mario'>
      <CardMedia className={classes.media} image={gameImage} />
      <a className={classes.hyperlink} href={gameLink}>
        <Button className={classes.overlay}>{gameTitle}</Button>
      </a>
    </Card>
  );
};

export default GameCard;
