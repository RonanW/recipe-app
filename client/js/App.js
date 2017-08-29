import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Header from "./components/Header"
import Recipe from "./pages/Recipe"
import RecipeList from "./pages/RecipeList"

// Temporary placeholder until user & user favourite functionality completed
const Home = ({ }) => (
  <div>
    <h3>Welcome!</h3>
    <Link to="/recipe-list">Go to Recipes</Link>
  </div>
)

const App = () => (
		<MuiThemeProvider>
			<div class="container">
				<Header />
				<Router>
					<Switch>
						<Route exact path="/recipe-list" component={RecipeList} />
						<Route path="/recipe:id" component={Recipe} />
						<Route exact path="/" component={Home} />
					</Switch>
				</Router>
			</div>
		</MuiThemeProvider>
	)

export default App
