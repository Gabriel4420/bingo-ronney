import React from 'react'
import { BallsFinished, SessionStatus } from '@/ui'

const TopArea: React.FC = () => {
  return (
    <>
      <BallsFinished />
      <SessionStatus />
    </>
  )
}

export default TopArea
