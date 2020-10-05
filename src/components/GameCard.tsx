import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import useStyles from '../styles/GameCardStyles';

interface GameCardProps {
  gameTitle: string;
  gameImage: any;
}

const GameCard = ({ gameTitle, gameImage }: GameCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={gameImage} />
      {gameTitle}
    </Card>
  );
};

export default GameCard;
