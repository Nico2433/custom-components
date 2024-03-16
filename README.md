# Custom Components

This is a simple package I created for personal use. It contains some components that can be useful.

1. **Add the package to your index file:**
   To ensure that the package's styles integrate properly, add the package css to your index file:

   ```javascript
   import "@nico2433/custom-components/dist/style.css";
   ```

2. **Further customization with CSS:**
   You can customize the components to some degree using css classes.

> [!IMPORTANT]
> If you have [@tailwindcss/forms](https://www.npmjs.com/package/@tailwindcss/forms) in your tailwind plugins the default inputs styles probably will broke, so instead of importing the css in your index you will need to add the package route to your tailwind.config content.

## Components

1. **Inputs:**
   DateInput
   FileInput
   SelectInput
   TextInput

   > To use these you will need [react-hook-form](https://www.npmjs.com/package/react-hook-form).

2. **UI:**
   DocDelimiter (This component limits width of the page content).

### How to use inputs

```javascript
type InputType = "text" | "password" | "select" | "file" | "date";

interface InputsRules {
  required?: string;
  maxLength?: {
    value: number;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
  validate?: (value: any) => boolean | string;
}

interface InputConfig<T extends InputType = InputType> {
  name: string;
  type?: T;
  label?: string;
  placeholder?: string;
  rules?: InputsRules;
  optionalBtn?: {
    label: string;
    className?: string;
    onClick: (arg?: any) => Promise<void> | void;
  };
  options?: SelectInputOptions[];
}
```

```javascript
import type { InputConfig } from "@nico2433/custom-components";

const useExampleFormConfig = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fields: InputConfig[] = [
    {
      name: "example1",
      rules: {
        required: "This field is required",
      },
    },
    {
      name: "example2",
      rules: {
         maxLength: {
            value: 10;
            message: "This field accepts a max length of 10";
         },
         minLength: {
            value: 5;
            message: "This field field accepts a min length of 5";
         },
      }
    }
  ];

  return { fields, register, handleSubmit, errors }
};

export default useExampleFormConfig
```

```javascript
import type { FieldValues } from "react-hook-form";
import useExampleFormConfig from "your path";
import { TextInput } from "@nico2433/custom-components";

const Component = () => {
  const { fields, register, handleSubmit, errors } = useExampleFormConfig();

  const onSubmit = (values: FieldValues) => {
    console.log(values);
  };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div>
            {fields.map((field) => (
               <TextInput
               key={field.name}
               config={field}
               register={register}
               errors={errors}
               />
            ))}
         </div>
         <button>Submit</button>
      </form>;
   )
};
```
