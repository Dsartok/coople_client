import React from 'react';
import Button from '~/Components/Button/Button';
import Text from '~/Components/Text/Text';
import { IGameCardComponent } from '~/Game/Card/GameCard.type';
import '~/Game/Card/GameCard.scss'
import Badge from '~/Game/Card/Badge';


/**
 * Game's card component
 *
 * @param {IGameCardComponent} props
 * @returns {JSX.Element}
 */
function GameCard(props: IGameCardComponent): JSX.Element {
  return (
    <div className='game_card'>
      <div className='game_card__image'>
        <img src={ props.imageUrl } />
      </div>

      <div className='game_card__title'>
        <Text
          content={props.title}
          textStyle='heading'
          fontWeight='bold'
          />
      </div>

      <div className='game_card__description'>
        <Text
          content={props.description}
          textStyle='description'
          />
      </div>

      <div className='game_card__badges'>
        <Badge
          icons={['steam']}
        />

        <Badge
          icons={['person']}
          content='2-5'
        />
      </div>

      <Button
        title='Запланировать'
        />
    </div>
 )
}

export default GameCard;