import useForm from '../../hooks/useForm'
import { useHistory } from "react-router-dom"
import useUnProtectedPage from '../../hooks/useUnprotectedPage'
import { signUp } from '../../services/user'

const SignUpForm = () => {
    useUnProtectedPage()
    const [form, onChange, Clear] = useForm({ username:"", email: "", password:""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, Clear, history)
    }
    
    return(
    <div>
        <h3>FAZER CADASTRO</h3>
        <form onSubmit={onSubmitForm}>
        <input 
                name={"username"} 
                value={form.username}
                onChange={onChange}
                label={"Nome"}
                required
                type={'text'}
            />
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
                type={'password'}
            />
            <button
            type={'submit'}
            >Fazer cadastro</button>

        </form>
     
    </div>
    )
}
export default SignUpForm;