import React from 'react'
import iRootState from '../redux/rootState'
import { useSelector } from 'react-redux'

const copy_right = (state: iRootState): string | undefined => state.config.copy_right

export const CopyRight:React.FC = () => {
  const stateCopy_right = useSelector(copy_right)

  return (
    <div>
      {stateCopy_right}
    </div>
  )
}