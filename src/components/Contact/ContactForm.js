import { useEffect, useState } from "react"
import InputField from "../Form/InputField"
import SelectField from "../Form/SelectField";
import TextareaField from "../Form/TextareaField";
import { ChevronRightIcon } from '@heroicons/react/solid'
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    cantidad: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_ybx1o66', 'template_yu9gtba', values, 'zJg6GTUEVaeqSrV_7')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullname: '',
          email: '',
          cantidad: '',
          message: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <div className="lg:mt-48 lg:mr-48 pt-6 pb-8 bg-white shadow-xl rounded p-5">
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
        <h3 className="text-gray-700 mb-7 text-xl font-semibold">Send us message</h3>
        <InputField value={values.fullName} handleChange={handleChange} label="Nombre" name="fullname" type="fullname" placeholder="John Doe" />
        <InputField value={values.email} handleChange={handleChange} label="E-Mail" name="email" type="email" />
        <SelectField handleChange={handleChange} name="cantidad" label="cantidad" type="cantidad" value={values.cantidad}/>
        <TextareaField value={values.message} handleChange={handleChange} label="Registra tu Confirmacion de asistencia" name="message" />
        <button type="submit"
          className="mt-4 bg-gray-900 text-gray-200 rounded hover:bg-gray-700 px-4 py-2 focus:outline-none"
        >Send <ChevronRightIcon className="w-6 ml-2 float-right" />
        </button>
      </form>
    </div>
  )
}

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>your message submitted successfully</p>
  </div>
)

export default ContactForm
