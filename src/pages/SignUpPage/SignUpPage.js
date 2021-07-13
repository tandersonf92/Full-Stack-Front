import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Button } from "../../components/buttons/Button"
import { Form } from "../../components/Form/Form"
import { Input } from "../../components/Inputs/Input"
import AllButtons from "../../components/TEMPORARIOS/AllButtons"
import useForm from "../../hooks/useForm"
import loginOrSignUp from "../../requests/loginOrSignUp"
// import signup from "../../requests/signup"

function SignUpPage(params) {
    const [form, onChange] = useForm({ name: "", email: "", nickname: "", password: "" })
    const [formPassword, onChangeConfirmPassword] = useForm({ confirmPassword: "" })


    useEffect(() => {

    }, [form.password])

    const history = useHistory()
    const checkFormPassword = event => {
        onChangeConfirmPassword(event)
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
                    placeholder="Name and Last name"
                    required
                    pattern={"^([a-zA-Z]{2,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?)"}
                    value={form.name} />

                <Input name="email"
                    onChange={onChange}
                    placeholder="email@email.com"
                    required
                    pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
                    value={form.email}
                />

                <Input name="nickname"
                    onChange={onChange}
                    placeholder="Nickname: ex: GreenBoy"
                    required
                    pattern={"^.{4,}"}
                    value={form.nickname}
                />

                <Input name="password"
                    onChange={checkMainPassword}
                    placeholder="password"
                    required
                    pattern={"^.{6,}"}
                    value={form.password}
                    type="password"
                />

                <Input name="confirmPassword"
                    onChange={checkFormPassword}
                    placeholder="confirmPassword"
                    required
                    pattern={"^.{6,}"}
                    type="password"
                    value={formPassword.confirmPassword}
                />

                <Button
                    // onClick={(evt) => signup(form, evt, history)}
                    text={"Sign up"}
                    backgroundColor={"red"}
                    color={"white"}
                />
                {/* <AllButtons /> */}
            </Form>
        </>
    )
}


export default SignUpPage