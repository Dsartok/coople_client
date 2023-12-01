import React from 'react';
import GameCard from '~/Game/Card/GameCard';

import '~/Styles/css-reset';
import '~/Styles/layout';

export default function App () {
  return <div className="main">
    <GameCard
      title='Counter-Strike 2'
      description='Не нуждающийся в представлении самый популярный в мире шутер'
      imageUrl='https://i.ibb.co/sKm7wMJ/photo-2021-12-30-10-05-38-2.jpg'
    />

    <GameCard
      title='Микрафт'
      description='Не нуждающийся в представлении самый популярный микрафт в этом мире и другом мире тоже'
      imageUrl='https://i.ibb.co/sKm7wMJ/photo-2021-12-30-10-05-38-2.jpg'
    />

    <GameCard
      title='Кубиковое безумие'
      description='Не нуждающийся в lorem ipsum dolor sit amet lorem ipsum'
      imageUrl='https://i.ibb.co/sKm7wMJ/photo-2021-12-30-10-05-38-2.jpg'
    />
  </div>
}