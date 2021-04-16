import React from 'react'
import ReactDOM from 'react-dom'

let clientPortalsList = null

export const createPortal = ({ portalId, ...props }) => {
  const component = <PortalElement portalId={portalId} {...props} />
  const portalContainer = document.createElement('div')
  portalContainer.setAttribute('id', portalId)
  document.body.appendChild(portalContainer)
  ReactDOM.render(component, document.getElementById(portalId))
}

export const hidePortalById = portalId => {
  document.getElementById(portalId).remove()
}

const RenderPortal = ({ portalId, Component, ...props }) => (
  <Component
    id={portalId}
    close={() => hidePortalById(portalId)}
    {...props}
  />
)

export const PortalElement = ({ portalId, ...props }) => (
  ReactDOM.createPortal(
    <RenderPortal
      portalId={portalId}
      Component={clientPortalsList[portalId]}
      {...props}
    />,
    document.getElementById(portalId)
  )
)

const Portals = ({ portalsList }) => {
  clientPortalsList = portalsList

  return (<></>)
}

export default Portals
