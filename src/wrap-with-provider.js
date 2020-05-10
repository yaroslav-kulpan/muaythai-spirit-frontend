import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import { Context } from './app/context/spirit.context'
import { spiritService } from './services/spirit.service'

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  return (
    <Provider store={store()}>
      <Context.Provider value={spiritService}>{element}</Context.Provider>
    </Provider>
  )
}
