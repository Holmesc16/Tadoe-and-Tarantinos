import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './components/App'
import StorePicker from './components/StorePicker'
import NotFound from './components/NotFound'
import './css/styles.css'

const Root = () => {
    return (
            <Router>
                 <Switch>
                    <Route exact path="/" component={StorePicker} />
                    <Route path="/store/:storeId" component={App} />
                    <Route path="*" component={NotFound}/>
                </Switch>
            </Router>
    )
}

render(<Root />, document.querySelector('#main'))