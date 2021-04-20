import ReactDOM from 'react-dom'
import React from 'react'
import { PortalElement } from '../components/portal-element'
import { clientPortalsList } from '../../index'

export const hidePortalById = (portalId) => document.getElementById(portalId).remove()

export const createCustomPortal = ({ portalId, ...props }) => {
  const component = <PortalElement portalId={portalId} portalsList={clientPortalsList} {...props} />
  const portalContainer = document.createElement('div')
  portalContainer.setAttribute('id', portalId)
  document.body.appendChild(portalContainer)
  ReactDOM.render(component, document.getElementById(portalId))
}
