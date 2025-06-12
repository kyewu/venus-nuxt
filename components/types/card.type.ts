/**
 * @param image - The image URL for the card background.
 * @param icon - The icon URL for the card.
 * @param title - The title of the card.
 * @param subTitle - The subtitle of the card.
 * @param url - The URL to navigate to when the card is clicked.
 */
export interface Card {
  image?: string
  imageType?: Avatar
  icon?: string
  title?: string
  subTitle?: string
  url?: string
  border?: boolean
}

type Avatar = 'default' | 'rounded' | 'avatar'
