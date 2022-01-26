import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Home from '../Pages/Home'
import LogIn from '../Pages/LogIn'
import SignUp from '../Pages/SignUp'
import Portfolio from '../Pages/Portfolio'
// import About from '../Pages/About'
// import SayHi from '../Pages/SayHi'

import { AuthProvider } from '../components/Auth/Auth'
import '../assets/Styles/icons.css';
import '../assets/Styles/footer.css';
import '../assets/Styles/styles.css';
function Routing() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LogIn} />
          {/* <Route exact path="/Home" component={Home} /> */}
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Portfolio" component={Portfolio} />
          {/* <Route exact path="/About" component={About} />
          <Route exact path="/SayHi" component={SayHi} /> */}

        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default Routing;
