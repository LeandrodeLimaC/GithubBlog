import { api } from './config'

export interface AuthenticatedUser {
  avatar_url: string
  bio: string
  blog: string
  followers: number
  followers_url: string
  following: number
  following_url: string
  html_url: string
  location: string
  name: string
}

export async function getAuthenticatedUser() {
  const response = await api.get<AuthenticatedUser>('/user')

  return response
}
