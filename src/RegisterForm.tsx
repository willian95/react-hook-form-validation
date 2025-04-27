import { useForm} from "react-hook-form";
import { Input } from "./Input";

type RegisterForm = {
    name: string;
}

export function RegisterForm() {

    const initialValues = {
        name: '',
    }

    const {handleSubmit} = useForm({defaultValues: initialValues})

    const onSubmit = (data: RegisterForm) => {
        console.log(data);
    }
    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
               
                <Input
                    label='Nombre'
                    placeholder='Ingrese su nombre'
                />
                
                <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition duration-200">Register</button>

            </form>
        </>
    )
}