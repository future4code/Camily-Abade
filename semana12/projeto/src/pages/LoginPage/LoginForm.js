import LoginPage from "./LoginPage"
import useForm from '../../hooks/useForm'
import { useHistory } from "react-router-dom"
import { goToSignUp } from "../../routes/cordinator"


const LoginForm = () => {
    const [form, onChange, Clear] = useForm({email: "", password:""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
    }
    
    return(
    <div>
        <h3>LoginPage</h3>
        <form onSubmit={onSubmitForm}>
            <input 
                name={"email"} 
                value={form.email}
                onChange={onChange}
                label={"E-mail"}
                required
                type={'email'}
            />
           <input 
                name={"password"} 
                value={form.password}
                onChange={onChange}
                label={"Senha"}
                required
                typep={'password'}
            />
            <button
            type={'submit'}
            >Fazer Login</button>


        </form>
        <button
            onClick={() => goToSignUp (history)}
            type={'submit'}
            >Cdastre-se</button>
    </div>
    )
}
export default LoginForm;