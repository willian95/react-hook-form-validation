import { useForm} from "react-hook-form";
import { Input } from "./Input";

type RegisterForm = {
    name: string;
    email: string;
    password: string;
}

export function RegisterForm() {

    const initialValues = {
        name: '',
        email: '',
        password: ''
    }

    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: initialValues})

    const onSubmit = (data: RegisterForm) => {
        console.log(data);
    }
    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
               
                <Input
                    label='Nombre'
                    placeholder='Ingrese su nombre'
                    register={register}
                    registerField="name"
                    validations={
                        {
                            required: {
                                value: true,
                                message: 'Nombre es requerido'
                            },
                            minLength: {
                                value: 3,
                                message: 'Nombre debe tener al menos 3 caracteres'
                            }
                        }
                    }
                    errors={errors.name?.message}
                />
                
                <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition duration-200">Register</button>

            </form>
        </>
    )
}