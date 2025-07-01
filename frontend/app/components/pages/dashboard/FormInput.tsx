interface Props {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

export default function FormInput({
  name,
  label,
  type = "text",
  placeholder,
  value,
  className,
  onChange,
  onBlur,
  error,
  required,
}: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input 
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className={`${className} bg-[#E6E6E6] text-[#333333] mt-2 py-3 px-5 rounded-lg outline-none placeholder:text-[hsl(0,0%,60%)] ${
          error ? "ring-2 ring-offset-2 ring-red-500" : "focus:ring-2 focus:ring-offset-2 focus:ring-[#0080DB]"
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p className="text-sm text-red-600 mt-2" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}