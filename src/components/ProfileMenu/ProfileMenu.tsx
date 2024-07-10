import React from 'react'
import ProfileDropdown from './ProfileDropdown'
import AuthActions from './AuthActions'

export default function ProfileMenu() {
  return (
    <>
      {true ? (
        <ProfileDropdown/>
      ) : (
        <div className="flex items-center space-x-6">
          <AuthActions />
        </div>
      )}
    </>
  )
}
