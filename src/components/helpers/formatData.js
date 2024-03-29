import React from 'react'
import format from 'date-fns'

export const formatData = (data) => {
  return (
      format(new Date(data), 'MM/dd/yyyy, h:mm a')
  )
}

