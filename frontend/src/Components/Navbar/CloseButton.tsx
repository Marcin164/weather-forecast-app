import React from 'react'
import Icon from '../Common/Icon'

type Props = {
  onClick?: () => any
}

const CloseButton = (props: Props) => {
  return (
    <Icon icon="/images/close.ico" className='xl:hidden 2xl:hidden p-4' onClick={props.onClick}/>
  )
}

export default CloseButton