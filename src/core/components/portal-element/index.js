import ReactDOM from 'react-dom'
import React from 'react'
import { hidePortalById } from '../../actions'

const RenderPortal = ({ portalId, Component, ...props }) => (
  <Component
    id={portalId}
    close={() => hidePortalById(portalId)}
    {...props}
  />
)

export const PortalElement = ({ portalId, portalsList, ...props }) => (
  ReactDOM.createPortal(
    <RenderPortal
      portalId={portalId}
      Component={portalsList[portalId]}
      {...props}
    />,
    document.getElementById(portalId)
  )
)
