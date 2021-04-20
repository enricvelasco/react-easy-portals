import React from 'react'
import { createCustomPortal, hidePortalById } from './core/actions'
import { Overlay } from './components/overlay'
// import { overlayContentContainerStyle, overlayStyle } from './styles'

export let clientPortalsList = null

// const createCustomPortal = ({ portalId, ...props }) => createCustomPortalAction({ portalId, portalsList: clientPortalsList, ...props })

// const hidePortalById = portalId => hidePortalByIdAction(portalId)

const Portals = ({ portalsList }) => {
  clientPortalsList = portalsList

  return (<></>)
}

export {
  createCustomPortal,
  hidePortalById,
  Overlay
}

export default Portals
