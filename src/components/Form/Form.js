import { useEffect, useState } from "react"
import InputField from "../Contact/InputField"
import SelectField from "../Contact/SelectField";
import TextareaField from "../Contact/TextareaField";
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

  const [validations, setValidations] = useState({
    fullname: '',
    email: '',
    cantidad: '',
    message: ''
  });

  const validateAll = () => {
    const { fullname, email, cantidad,message } = values
    const validations = { fullname: '', email: '', cantidad: '',message: '' } 
    let isValid = true

    if (!fullname) {
      validations.name = 'Name is required'
      isValid = false
    }
    
    if (fullname && fullname.length < 3 || fullname.length > 50) {
      validations.name = 'el nombre debe tener entre 3 y 50 caracteres'
      isValid = false
    }

    if (!email) {
      validations.email = 'Email es requerido'
      isValid = false
    }
    
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      validations.email = 'Email debe ser como example@mail.com'
      isValid = false
    }

    if (!cantidad) {
      validations.cantidad = 'Cantidad es requerida'
      isValid = false
    }
    if (!message) {
      validations.message = 'Mensaje es requerido'
      isValid = false
    }
    if (!isValid) {
      setValidations(validations)
    }
    
    return isValid
  }
  const validateOne = (e) => {
    const { name } = e.target
    const value = values[name]
    let message = ''
    
    if (!value) {
      message = `${name} is required`
    }
    
    if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
      message = 'El nombre debe contener entre 3 y 50 caracteres'
    }

    if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      message = 'Email debe ser como example@mail.com'
    }
    
    setValidations({...validations, [name]: message })
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateAll()
    
    if (!isValid) {
      return false
    }

    alert(JSON.stringify(values))
  
  
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

  const { name, email, gender } = values

  const { 
    fullname: fullnameVal, 
    email: emailVal, 
    cantidad: cantidadVal,
    message: messageVal 
  } = validations
  return (
    <div className="lg:mt-50 lg:mr-55 pt-6 pb-8 bg-white shadow-xl rounded p-5">
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
        <h3 className="text-gray-700 mb-7 text-xl font-semibold">Confirma tu asistencia</h3>
        <InputField value={values.fullName} handleChange={handleChange} label="Nombre Completo" name="fullname" type="fullname" placeholder="John Doe" />
        <div>{fullnameVal}</div>
        <InputField value={values.email} handleChange={handleChange} label="E-Mail" name="email" type="email" />
        <div>{emailVal}</div>
        <SelectField handleChange={handleChange} name="cantidad" label="Cantidad" type="cantidad" value={values.cantidad}/>
        <div>{cantidadVal}</div>
        <TextareaField value={values.message} handleChange={handleChange} label="Registra tu Confirmacion de asistencia" name="message" />
        <div>{messageVal}</div>
        <button type="submit"
          className="mt-4 bg-gray-900 text-gray-200 rounded hover:bg-gray-700 px-4 py-2 focus:outline-none"
        >Send <ChevronRightIcon className="w-6 ml-2 float-right" />
        </button>
      </form>
      {/* <div>
            <h2>Values of the form</h2>
            <p>{JSON.stringify(values)}</p>
        </div> */}
    </div>
  )
}

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>your message submitted successfully</p>
  </div>
)

export default ContactForm
