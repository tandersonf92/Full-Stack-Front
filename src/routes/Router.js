import { BrowserRouter, Route, Switch } from "react-router-dom"
import CreateMusicPage from "../pages/CreateMusicPage/CreateMusicPage"
import HomePage from "../pages/HomePage/HomePage"
import LoadingPage from "../pages/LoadingPage/LoadingPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home">
                    <HomePage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/signUp">
                    <SignUpPage />
                </Route>
                <Route exact path="/music">
                    <CreateMusicPage />
                </Route>
                <Route exact path='/'>
                    <LoadingPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}


export default Router