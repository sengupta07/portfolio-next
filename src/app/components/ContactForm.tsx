import Button from '@/common/components/Button';
import Link from 'next/link';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

type FormField = {
  name: keyof FormValues;
  label: string;
  type: 'text' | 'textarea';
  rules: object;
};

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const formFields: FormField[] = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    rules: { required: 'First Name is required' },
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    rules: { required: 'Last Name is required' },
  },
  {
    name: 'email',
    label: 'Enter your e-mail',
    type: 'text',
    rules: {
      required: 'Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Invalid email format',
      },
    },
  },
  {
    name: 'message',
    label: 'Type your message',
    type: 'textarea',
    rules: { required: 'Message is required' },
  },
];

const Field: React.FC<{
  field: FormField;
  control: any;
  error: string | undefined;
}> = ({ field, control, error }) => {
  const commonStyles = `h-14 w-full rounded-md border border-white px-3 py-2 text-sm text-white bg-[#222223] focus:outline-none focus:ring-2 ${
    error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-c-primary-marine-blue border-opacity-10'
  }`;

  return (
    <div
      className={`${
        field.name === 'email' || field.name === 'message' ? 'md:col-span-2' : ''
      } space-y-2 max-md:col-span-2`}
    >
      {/* <label className="text-sm font-medium text-c-primary-marine-blue">{field.label}</label> */}
      <Controller
        name={field.name}
        control={control}
        rules={field.rules}
        render={({ field: controllerField }) =>
          field.type === 'textarea' ? (
            <textarea
              {...controllerField}
              className={`!h-44 !flex-1 ${commonStyles}`}
              placeholder={field.label}
            ></textarea>
          ) : (
            <input {...controllerField} className={commonStyles} placeholder={field.label} />
          )
        }
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

const ContactForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form Submitted:', data);
  };

  return (
    <div className="w-full p-10 max-md:p-6 flex flex-col gap-8">
      <div className="space-y-2">
        <h4 className="font-medium text-white">Fill the form below</h4>
        <div>
          <p className="text-white opacity-85 inline">Alternatively, contact me on </p>
          <Button asChild variant={'link'} className="text-white opacity-85 inline underline">
            <Link href="tel:+917908304170">+91 7908304170</Link>
          </Button>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
        {formFields.map((field) => (
          <Field key={field.name} field={field} control={control} error={errors[field.name]?.message} />
        ))}

        {/* Submit Button */}
        <Button type="submit" variant={'primary'} className="!rounded-elements !py-3 !px-6 col-span-2">
          Submit
        </Button>
        {/* <button
          type="submit"
          className="h-10 w-full col-span-2 rounded-md bg-primaryTheme text-white font-medium hover:bg-c-primary-marine-blue-hover focus:ring-2 focus:ring-c-primary-marine-blue focus:outline-none"
        ></button> */}
      </form>
    </div>
  );
};

export default ContactForm;
