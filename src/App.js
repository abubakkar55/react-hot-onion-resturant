import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllProvider from './components/Context/AllProvider';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Signup from './Pages/Signup';
import MealsDetails from './Pages/MealsDetails';
import AllMeals from './components/MealMenu/AllMeals/AllMeals';
import OrderReview from './Pages/OrderReview';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (

    <div className="App">
      <AllProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={AllMeals} />
            <Route path="/review" component={OrderReview} />
            <Route path="/login" component={Login} />
            <Route path="/cart" component={Cart} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={Signup} />
            <Route path="/signup">
              <MealsDetails />
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </AllProvider>
    </div>
  );
}

export default App;