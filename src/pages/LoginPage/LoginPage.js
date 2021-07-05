

import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Button } from "../../components/buttons/Button"
import { Form } from "../../components/form/Form"
import { Input } from "../../components/inputs/Input"
import { LoginSeparator } from "../../components/separators/LoginSeparator"
import useForm from "../../hooks/useForm"
import login from "../../requests/login"
import loginOrSignUp from "../../requests/loginOrSignUp"
import signup from "../../requests/signup"
import { goToDetailsPage, goToHomePage, goToSignUpPage } from "../../routes/coorditator"

function LoginPage(params) {
    const [form, onChange] = useForm({ email: "", password: "" })


    const history = useHistory()



    useEffect(() => {
        // console.log('form  dentro do useEffect:', form)
        // console.log('formPassword  detrno do useEffect:', formPassword)
    })
    return (
        <>


            <h1>LoginPage</h1>


            <Form onSubmit={(evt) => loginOrSignUp(form, evt, history, "user/login")}>
                <Input
                    name="email"
                    onChange={onChange}
                    placeholder="email"
                    value={form.email}
                />

                <Input
                    name="password"
                    onChange={onChange}
                    placeholder="password"
                    value={form.password}
                />

                <Button
                    // onClick={(evt) => loginOrSignUp(form, evt, history, "user/login")}
                    text={"Login"}
                    backgroundColor="blue"
                />

                <LoginSeparator />
                <Button
                    onClick={(evt) => goToSignUpPage(history)}
                    text={"SignUp"} />

            </Form>





        </>
    )
}




export default LoginPage