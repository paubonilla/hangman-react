import React from 'react'
import { NotificationContainer } from '../styled'

function Notification({ showNotification }) {
  return (
    <NotificationContainer className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </NotificationContainer>
  )
}

export default Notification
