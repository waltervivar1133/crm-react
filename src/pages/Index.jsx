import { useEffect, useState } from "react";
import Customer from "../components/Customer";

const Index = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const url = "http://localhost:4000/customers";
        const response = await fetch(url);
        const result = await response.json();
        setCustomers(result);
      } catch (error) {
        console.log(error);
      }
    };
    getCustomers();
  }, []);

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900 ">Clientes</h1>
      <p>Aqui veremos todos los clientes</p>

      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            customers.map(customer => (

                <Customer 
                  key={customer.id}
                  customer= { customer}
                />
              ))
          }
        </tbody>
      </table>
    </>
  );
};

export default Index;
