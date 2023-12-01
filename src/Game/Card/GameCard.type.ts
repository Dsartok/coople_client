
/**
 * Props for game card component
 * @export
 * @interface IGameCardComponent
 * @typedef {IGameCardComponent}
 */
export interface IGameCardComponent {
  /** URL to image */
  imageUrl: string;
  /** Game title */
  title: string;
  /** Game description */
  description: string;
}

type BadgeIcons = 'steam' | 'person';


/**
 * Props for game badge components
 *
 * @export
 * @interface IBadgeProps
 * @typedef {IBadgeProps}
 */
export interface IBadgeProps {
  /** Used icons */
  icons: BadgeIcons[];
  /** Badge text */
  content?: string;
}