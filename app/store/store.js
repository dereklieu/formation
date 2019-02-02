'use strict'
const { createStore, applyMiddleware, combineReducers, compose } = require('redux')
const thunk = require('redux-thunk').default

function getStore (initialState = {}) {
  const reducer = combineReducers({
    test: (initialState = {}) => initialState
  })
  return createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk))
  )
}
module.exports = getStore
