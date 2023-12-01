import React from 'react';
import IconSteam from '~/icons/icon_steam.svg';
import IconPerson from '~/icons/Icon_person.svg';
import Text from '~/Components/Text/Text';
import { IBadgeProps } from '~/Game/Card/GameCard.type';


/**
 * Badge component for game card
 *
 * @param {IBadgeProps} props
 * @returns {JSX.Element}
 */
function Badge(props: IBadgeProps): JSX.Element {
  return (
    <div className='game_badge'>
      {props.icons.includes('steam') ? <IconSteam /> : null}

      {props.content ?
        <Text
          content={props.content}
          fontWeight='normal'
          textStyle='description'
          textColor='light'
          />
        : null
      }

      {props.icons.includes('person') ? <IconPerson /> : null}
     </div>
   )
}

export default Badge;