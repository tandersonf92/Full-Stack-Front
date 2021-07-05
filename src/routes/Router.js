import { BrowserRouter, Route, Switch } from "react-router-dom"
import CreateMusicPage from "../pages/CreateMusicPage/CreateMusicPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import MainPage from "../pages/MainPage/MainPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <MainPage />
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


            </Switch>
        </BrowserRouter>
    )
}


export default Router