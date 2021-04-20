import { overlayContentContainerStyle, overlayStyle } from '../../styles'
import React from 'react'

export const Overlay = ({
  style,
  className,
  children,
  onOverlayClick
}) => {
  const styleConf = { ...overlayStyle, ...style }

  return (
    <section onClick={onOverlayClick} style={styleConf} className={className}>
      <div onClick={(e) => e.stopPropagation()} style={overlayContentContainerStyle}>
        {children}
      </div>
    </section>
  )
}
