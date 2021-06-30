import useForm from '../../hooks/useForm'
import { useHistory } from "react-router-dom"
import { goToSignUp } from "../../routes/cordinator"
import {login} from '../../services/user'
import useUnProtectedPage from '../../hooks/useUnprotectedPage'


const LoginForm = ({setButtonLoginLogOut}) => {
    useUnProtectedPage()
    const history = useHistory()
    const [form, onChange, Clear] = useForm({email: "", password:""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, Clear, history, setButtonLoginLogOut)
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
            <p
            onClick={() => goToSignUp (history)}
            type={'submit'}
            >Ainda não tem cadastro? Clique aqui!</p>
    </div>
    )
}
export default LoginForm;