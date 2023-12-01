import React from 'react';
import { FontWeight, ITextProps, TextColor, TextStyle } from '~/Components/Text/Text.type';
import '~/Components/Text/Text.scss'

/**
 * Component for generating text field
 *
 * @export
 * @param {ITextProps} props Component props
 * @returns {JSX.Element}
 */
function Text(props: ITextProps): JSX.Element {
  const selectedClasses: string[] = [];
  selectedClasses.push(props.fontWeight ? FontWeight[props.fontWeight] : FontWeight.normal);
  selectedClasses.push(props.textStyle ? TextStyle[props.textStyle] : TextStyle.description);
  selectedClasses.push(props.textColor ? TextColor[props.textColor] : TextColor.dark);

  const className = `components_text ${selectedClasses.join(' ')}`;

  return (
    <div className={className}>
      {props.content}
    </div>
  )
}

export default Text;