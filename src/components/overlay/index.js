import clsx from 'clsx'
import React from 'react'
import css from './style.css'

export const Overlay = ({
  style,
  className,
  children,
  onOverlayClick
}) => {
  return (
    <section className={clsx(css.overlayStyle, className)} onClick={onOverlayClick} style={style}>
      <div className={css.overlayContainerStyle} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </section>
  )
}
