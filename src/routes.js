import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// pages
import Home from './pages'

const RedirectPage = ({ component: Component, ...rest }) => <Route {...rest} render={props => <Redirect to={{ pathname: '/Brazil', state: { from: props.location } }} />}/>

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <RedirectPage exact path="/" component={() => <span>Redirect</span>} />
        <Route exact path="/:search" component={Home} />
        <RedirectPage path="/*" component={() => <h1>Redirect</h1>} />
      </Switch>
    </BrowserRouter>
  )
}
