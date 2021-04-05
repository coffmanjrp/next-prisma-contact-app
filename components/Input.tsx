interface InputProps {
  placeholder: string;
  name: string;
  formRef: any;
}

function Input({ name, placeholder, formRef }: InputProps) {
  return (
    <>
      <input
        type="text"
        className="rounded p-4 text-xl w-full"
        name={name}
        placeholder={placeholder}
        ref={formRef}
      />
    </>
  );
}

export default Input;
