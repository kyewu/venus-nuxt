export * from './card.type'
export * from './footer.type'
export * from './swiper-item.type'

export interface GenericType<T> {
  items: T[]
  selectedItem?: T
}
