import React from 'react'
import { NotificationContainer } from '../../styled'

function Notification({ showNotification, warmNotification }) {
  const warning = [
    "You have already entered this letter",
    "Bruh pressing the same letter will not help you win",
  ];
  warmNotification = warning[Math.floor(Math.random() * warning.length)];
  return (
    <NotificationContainer className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>{warmNotification}</p>
    </NotificationContainer>
  )
}

export default Notification
