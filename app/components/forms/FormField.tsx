type FormFieldProps ={
    label:string;
    name: string;
    onChange:(value:string) => void;
    placeholder?: string;
    disabled?:boolean;
    type?:string;
    value?:string;
    className?:string;
};

export default function FormField({
    label,
    name,
    onChange,
    placeholder, 
    disabled, 
    type = "text",
    value,
    className ="",
}:FormFieldProps){
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name}>
                {label}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
                className={`
                    border
                    border-button-border
                    rounded-md
                    p-2
                    ${disabled ? "bg-gray-200" : ""}
                    ${className ?? ''}
                `}
            />
        </div>
    );
}