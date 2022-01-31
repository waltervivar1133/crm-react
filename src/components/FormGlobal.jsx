import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alerts from "./Alerts";
import { useNavigate } from "react-router-dom";


const FormGlobal = () => {

  const navigate = useNavigate();

  const CustomerSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "El Nombre es muy corto")
      .max(20, "El Nombre es muy largo")
      .required("El nombre del cliente es obligatorio"),
    company: Yup.string().required("El nombre de la empresa es obligatorio"),
    email: Yup.string()
      .required("El email es obligatorio")
      .email("El campo email no tiene formato valido"),
    phone: Yup.number()
      .typeError("Solo se puede ingresar Numeros")
      .integer("Número no valido")
      .positive("Numero no valido"),
  });

  const handleSubmit = async(values) => {
    
    try {
      const url = 'http://localhost:4000/customers';
      const response = await fetch(url, {
        method : 'POST',
        body : JSON.stringify(values),
        headers : {
          'Content-Type' : 'application/json'
        }
      })
      // obtenemos el resultado del formulario y transmformamos en json
      const result = await response.json();

      // redireccionar a clientes lista

      navigate('/customers'); 
      return result;

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl text-center">
        Agregar Cliente
      </h1>
      <Formik
        initialValues={{
          name: "",
          company: "",
          email: "",
          phone: "",
          notas: "",
        }}
        onSubmit={ async(values , {resetForm }) => {
          await handleSubmit(values);
          resetForm();

        }}
        validationSchema={CustomerSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form className="mt-10">
              <div className="mb-4">
                <label htmlFor="name" className="text-gray-800 ">
                  Nombre:
                </label>
                <Field
                  className="mt-2 block w-full p-3 bg-gray-50"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombre del cliente"
                />
                {errors.name && touched.name ? (
                  <Alerts> {errors.name} </Alerts>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="company" className="text-gray-800 ">
                  Empresa:
                </label>
                <Field
                  className="mt-2 block w-full p-3 bg-gray-50"
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Empresa del cliente"
                />
                {errors.company && touched.company ? (
                  <Alerts> {errors.company} </Alerts>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-gray-800 ">
                  Correo electronico:
                </label>
                <Field
                  className="mt-2 block w-full p-3 bg-gray-50"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Correo electronico del cliente"
                />
                {errors.email && touched.email ? (
                  <Alerts> {errors.email} </Alerts>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="text-gray-800 ">
                  Telefono:
                </label>
                <Field
                  className="mt-2 block w-full p-3 bg-gray-50"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Correo electronico del cliente"
                />
                {errors.phone && touched.phone ? (
                  <Alerts> {errors.phone} </Alerts>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="notas" className="text-gray-800 ">
                  Notas:
                </label>
                <Field
                  as="textarea"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  type="text"
                  name="notas"
                  id="notas"
                  placeholder="Notas del cliente"
                />
              </div>

              <input
                type="submit"
                value="Agregar Cliente"
                className="bg-blue-900 p-3 text-white w-full mt-5 uppercase text-lg cursor-pointer"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormGlobal;
