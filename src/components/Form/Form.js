import { useEffect, useState } from "react"
import InputField from "./InputField"
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import { ChevronRightIcon } from '@heroicons/react/solid'
import emailjs from 'emailjs-com';
import "../../index.css"


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
    emailjs.send('service_rtmk88c', 'template_b3jiw9e', values, 'Od40H_FJw5kN5boM3')
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
    <div className="lg:mt-180 lg:mr-50 pt-6 pb-8 bg-white shadow-xl rounded p-5">
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
        <h3 className="text-gray-400 mt-0 mb-0 text-xl font-semibold">Confirma Asistencia</h3>
        <InputField value={values.fullName} handleChange={handleChange} label="Nombre" name="fullname" type="fullname" placeholder="John Doe" />
        <InputField value={values.email} handleChange={handleChange} label="E-Mail" name="email" type="email" />
        <SelectField handleChange={handleChange} name="cantidad" label="Cantidad que asistiran " type="cantidad" value={values.cantidad}/>
        <TextareaField value={values.message} handleChange={handleChange} label="Registra tu Confirmacion de asistencia" name="message" placeholder="Asistiremos(cantidad) personas con este registro"/>
        <button type="submit"
          className="mt-4 bg-gray-900 text-gray-200 rounded hover:bg-gray-700 px-4 py-2 focus:outline-none">
          Enviar <ChevronRightIcon className="w-6 ml-2 float-right" />
        </button>
      </form>
      </div>

  )
}

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>El mensaje se a enviado satisfactoriamente</p>
  </div>
)

export default ContactForm
