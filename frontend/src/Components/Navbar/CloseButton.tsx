import React from 'react'
import Icon from '../Common/Icon'

type Props = {
  onClick?: () => any
}

const CloseButton = (props: Props) => {
  return (
    <button className="w-full p-4" onClick={props.onClick}><Icon icon=""/></button>
  )
}

export default CloseButton