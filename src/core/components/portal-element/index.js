import ReactDOM from 'react-dom'
import React from 'react'
import { hidePortalByIdAction } from '../../actions'

const RenderPortal = ({ portalId, Component, ...props }) => (
  <Component
    id={portalId}
    close={() => hidePortalByIdAction(portalId)}
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
