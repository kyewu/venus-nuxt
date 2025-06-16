export interface Course {
  id: number
  title: string
  subTitle: string
  desc: string
  coverId: number | null
  author: number
  originPrice: number | null
  price: number | null
  status: number | null
  counts: number | null
  order: number | null
  detail: string
  type: string
  createdAt: string
  updatedAt: string
  users: User
}

export interface User {
  id: number
  username: string
  name: string
  type: number
  expired: string | null
  status: number
  phone: number
  email: string
  unionId: string
  openId: string
  createdAt: string
  updatedAt: string
}

export interface GetCourseResponse {
  id: number
  name: string
  courses: Course[]
}
