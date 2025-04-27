type InputTypeProps = {
    label: string
    placeholder?: string
    type?: string
}

export function Input({label, placeholder, type='text'}: InputTypeProps) {

    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor={label} className="block text-sm font-medium text-gray-700">{label}</label>
            <input  
                type={type} 
                id={label} 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-orange-500" 
                placeholder={placeholder}   
            />

        </div>
    );

}