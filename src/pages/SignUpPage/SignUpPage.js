import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Button } from "../../components/buttons/Button"
import { Form } from "../../components/form/Form"
import { Input } from "../../components/inputs/Input"
import useForm from "../../hooks/useForm"
import login from "../../requests/login"
import loginOrSignUp from "../../requests/loginOrSignUp"
import signup from "../../requests/signup"

function SignUpPage(params) {
    const [form, onChange] = useForm({ name: "", email: "", nickname: "", password: "" })
    const [formPassword, onChangeConfirmPassword] = useForm({ confirmPassword: "" })


    useEffect(() => {

    }, [form.password])

    const history = useHistory()
    const checkFormPassword = event => {
        onChangeConfirmPassword(event)
        // console.log('to no EVENT DENTRO DO CHECK FORM.... qual e o EVENTO: ',event.target.value)
        // console.log(` form.password: ,${form.password} .... formPassword.confirmPassword: ${formPassword.confirmPassword}`)
        if (event.target.value.length > 5 && form.password.length > 5 && event.target.value !== form.password) {
            console.log('ta diferente , vem com a gente....')
        } else {
            console.log('PARABENS, pode prosseguir...')
        }
    }

    const checkMainPassword = event => {
        // console.log(` form.password: ,${form.password} .... formPassword.confirmPassword: ${formPassword.confirmPassword}`)
        onChange(event)
        if (event.target.value.length > 5 && formPassword.confirmPassword.length > 5 && event.target.value !== formPassword.checkFormPassword) {
            console.log('ta diferente , vem com a gente....')
        } else {
            console.log('PARABENS, pode prosseguir...')
        }
    }

    useEffect(() => {
        // console.log('form  dentro do useEffect:', form)
        // console.log('formPassword  detrno do useEffect:', formPassword)
    })
    return (
        <>
            <h1>MainPage</h1>
            <Form onSubmit={evt => loginOrSignUp(form, evt, history, "user/signup")} >
                <Input
                    name="name"
                    onChange={onChange}
                    placeholder="name"
                    value={form.name} />

                <Input name="email"
                    onChange={onChange}
                    placeholder="email"
                    value={form.email}
                />

                <Input name="nickname"
                    onChange={onChange}
                    placeholder="nickname"
                    value={form.nickname}
                />

                <Input name="password"
                    onChange={checkMainPassword}
                    placeholder="password"
                    value={form.password}
                />

                <Input name="confirmPassword"
                    onChange={checkFormPassword}
                    placeholder="confirmPassword"
                    value={formPassword.confirmPassword}
                />

                <Button
                    onClick={(evt) => signup(form, evt, history)}
                    msg={"Sign up"}
                />
            </Form>
        </>
    )
}


export default SignUpPage