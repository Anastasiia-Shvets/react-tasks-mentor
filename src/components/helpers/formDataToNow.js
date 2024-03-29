import { formatDistanceToNow } from 'date-fns'
import React from 'react'


export const formDataToNow = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: true })
  
}

