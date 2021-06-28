import { useEffect } from "react"
import useForm from "../../hooks/useForm"

function SignUpPage(params) {
    const [form, onChange] = useForm({ name: "", nickname: "", email: "", password: "" })
    const [formPassword, onChangeConfirmPassword] = useForm({ confirmPassword: "" })

    useEffect(() => {
        // console.log('form  detrno do useEffect:',form)
        // console.log('formPassword  detrno do useEffect:',formPassword)
    }, )
    return (
        <>
            <h1>MainPage</h1>
            <form>
                <input name="name" onChange={onChange} placeholder="name" value={form.name}></input>
                <input name="email" onChange={onChange} placeholder="email" value={form.email}></input>
                <input name="nickname" onChange={onChange} placeholder="nickname" value={form.nickname}></input>
                <input name="password" onChange={onChange} placeholder="password" value={form.password}></input>
                <input name="confirmPassword" onChange={onChangeConfirmPassword} placeholder="confirmPassword" value={formPassword.confirmPassword}></input>
            </form>

        </>
    )
}


export default SignUpPage