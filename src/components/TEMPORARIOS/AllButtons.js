import { useHistory } from "react-router-dom"
import { goToCreateMusicPage, goToHomePage, goToLoginPage, goToSignUpPage } from "../../routes/coordinator"
import { Button } from "../buttons/Button"




const AllButtons = props => {
    const history = useHistory()

    return (
        <div>
            <Button onClick={() => goToLoginPage(history)}
                text={"Login"}
                backgroundColor={"red"}
            />
            <Button onClick={() => goToSignUpPage(history)}
                text={"SignUp"}
                backgroundColor={"orange"}
            />
            <Button onClick={() => goToCreateMusicPage(history)}
                text={"Music"}
                backgroundColor={"pink"}
            />
            <Button onClick={() => goToHomePage(history)}
                text={"Home"}
                backgroundColor={"blue"}
            />

        </div>
    )

}

export default AllButtons