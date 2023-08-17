import { useCallback, useEffect, useState } from 'react'
import { AuthenticatedUser, getAuthenticatedUser } from './api'

export function App() {
  const [user, setUser] = useState<AuthenticatedUser>()

  const handleLoadUser = useCallback(async () => {
    const { data } = await getAuthenticatedUser()

    setUser(data)
  }, [])

  useEffect(() => {
    handleLoadUser()
  }, [handleLoadUser])

  return (
    <>
      <h1>Into the design system</h1>
      <div>{user?.name}</div>
    </>
  )
}
