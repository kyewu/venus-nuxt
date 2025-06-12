interface ContactType {
  email: string
  phone?: string
  address?: string
  wechat?: string
  sina?: string
}

interface LinkType {
  name: string
  url: string
}

/**
 * Footer component props type
 * @param icp - ICP information
 * @param copyRight - Copyright information
 * @param links - Array of links to be displayed in the footer
 * @param contacts - Array of contact information to be displayed in the footer
 */
export interface FooterType {
  icp?: string
  copyRight?: string
  links?: LinkType[]
  contacts?: ContactType
}
