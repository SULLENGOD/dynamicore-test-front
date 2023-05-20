import { ChangeEvent, useState } from "react";

export interface FormState {
    [key: string]: string;
}

export const useForm = (initialForm: FormState = {}) => {

    const [ formState, setFormState ] = useState<FormState>(initialForm);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };
  return {
    formState,
    onChange
  } 
}