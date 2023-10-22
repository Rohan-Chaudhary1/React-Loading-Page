import React from 'react'
import Loading from './TopLoading'
import MiddleLoading from './MiddleLoading'
import LowerLoading from './LowerLoading'

const MainLoading = () => {
  return (
    <div className='animate-pulse '>
      <Loading />
      <MiddleLoading/>
      <LowerLoading/>
    </div>
  )
}

export default MainLoading