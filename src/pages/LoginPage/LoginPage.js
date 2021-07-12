

import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Button } from "../../components/buttons/Button"
import { Form } from "../../components/form/Form"
import { Input } from "../../components/inputs/Input"
import { LoginSeparator } from "../../components/separators/LoginSeparator"
import useForm from "../../hooks/useForm"
import loginOrSignUp from "../../requests/loginOrSignUp"
import {  goToSignUpPage } from "../../routes/coordinator"

function LoginPage(params) {
    const [form, onChange] = useForm({ email: "", password: "" })


    const history = useHistory()



    useEffect(() => {
        window.localStorage.removeItem('token')
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