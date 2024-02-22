import "./App.css"
import Header from "./components/common/header/Header"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import Blog from "./components/blog/Blog"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import CourseHome from "./components/allcources/CourseHome"
import Contact from "./components/Contact/contact"
import Home from "./components/home/Home"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/courses' component={CourseHome}/>
          <Route exact path='/about' component={About} />
          <Route exact path='/' component={Home}/>
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App




//
//
//
//


//
//