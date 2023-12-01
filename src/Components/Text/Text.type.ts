

type textStyleKeys = 'heading' | 'description';
/**
 * Vars of text style
 *
 * @export
 * @enum {textStyleKeys}
 */
export enum TextStyle {
  heading = 'components_text__style-heading',
  description = 'components_text__style-description'
}

type fontWeightKeys = 'normal' | 'bold' | 'thin';
/**
 * Vars of text weight
 *
 * @export
 * @enum {string}
 */
export enum FontWeight {
  normal = 'components_text__weight-normal',
  bold = 'components_text__weight-bold',
  thin = 'components_text__weight-thin'
}

type textColorKeys = 'dark' | 'light';

export enum TextColor {
  dark = 'components_text__color-dark',
  light = 'components_text__color-light'
}

/**
 * Props for textfield
 *
 * @export
 * @interface ITextProps
 * @typedef {ITextProps}
 */
export interface ITextProps {
  /** Content of textfield */
  content: string;
  /** Style for text field */
  textStyle?: textStyleKeys;
  /** Text field weight */
  fontWeight?: fontWeightKeys;
  textColor?: textColorKeys;
}