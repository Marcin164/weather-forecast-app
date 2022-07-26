import React from 'react'
import Icon from '../Common/Icon'

type Props = {
  onClick?: () => any
}

const CloseButton = (props: Props) => {
  return (
    <Icon icon="" onClick={props.onClick}/>
  )
}

export default CloseButton