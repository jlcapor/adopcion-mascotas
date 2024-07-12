import React from 'react'
import ProfileDropdown from './ProfileDropdown'
import AuthActions from './AuthActions'

export default function ProfileMenu() {
  return (
    <>
      {false ? (
        <ProfileDropdown/>
      ) : (
        <AuthActions />
      )}
    </>
  )
}
