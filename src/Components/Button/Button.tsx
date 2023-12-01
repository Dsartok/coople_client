import React from 'react';
import { IButtonProps } from '~/Components/Button/Button.type';
import Text from '~/Components/Text/Text';
import '~/Components/Button/Button.scss'

/**
 * Component for Buttons
 */
function Button(props: IButtonProps): JSX.Element {
  const click: () => void = () => {
    console.log('click')
  }

  return (
    <div
      className="components_button components_button__default"
      onClick={click}
    >
      <Text
        content={props.title.toUpperCase()}
        fontWeight='bold'
      />
    </div>
  )
}

export default Button