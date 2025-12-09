import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex justify-center items-center mt-auto h-screen'>{children}</div>
  )
}

export default layout