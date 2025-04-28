import { FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form"

type InputTypeProps <T extends FieldValues> = {
    label: string
    placeholder?: string
    type?: string
    register?: UseFormRegister<T>
    registerField?: Path<T>
    validations?: RegisterOptions<T, Path<T>>
    errors?: string
}

export function Input<T extends FieldValues>({label, placeholder, type='text', register, registerField, validations, errors}: InputTypeProps<T>) {

    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor={label} className="block text-sm font-medium text-gray-700">{label}</label>
            <input  
                type={type} 
                id={label} 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-orange-500" 
                placeholder={placeholder} 
                {
                    ...register && registerField && validations && {
                        ...register(registerField, validations)
                    }
                }  
            />
            <p>
                {errors}
            </p>

        </div>
    );

}