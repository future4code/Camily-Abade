import { useState } from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const handleInputhange = (event) => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }

    const Clear = () => {
        setForm(initialState)
    }

    return[form, handleInputhange, Clear]
}

export default useForm;