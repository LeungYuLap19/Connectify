import React from 'react'
import useDateTag from '../../hooks/useDateTag'

export default function Index({ isCreatePost, dateTime }) {
  const dateTag = useDateTag(isCreatePost, dateTime)

  return (
    <div>
      {dateTag}
    </div>
  )
}
