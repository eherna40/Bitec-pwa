import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Layout from '../components/Layout/Layout'

const AppRoute = ({
  component: Component,
  path,
  exact
}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={({ location }) => {
    
        return (
            <Component />
          
        )
      }}
    />
  )
}

AppRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool
}

export default AppRoute
