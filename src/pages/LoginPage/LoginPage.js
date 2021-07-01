
    
    import { useEffect } from "react"
    import { useHistory } from "react-router-dom"
    import useForm from "../../hooks/useForm"
    import login from "../../requests/login"
import loginOrSignUp from "../../requests/loginOrSignUp"
    import signup from "../../requests/signup"
    
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
                <form>
                    <input name="email" onChange={onChange} placeholder="email" value={form.email}></input>
                    <input name="password" onChange={onChange} placeholder="password" value={form.password}></input>
                </form>
    
    
    
                <button onClick={(evt) => loginOrSignUp(form, evt, history,"user/login")}>teste login</button>
            </>
        )
    }
    
    


export default LoginPage