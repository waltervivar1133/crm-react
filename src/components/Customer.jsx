import React from 'react';

const Customer = ({customer}) => {

    const { name ,company , email , phone , notas  } = customer;
  
  return (
  
  <tr className="border hover:bg-gray-200">
     <td className="p-2">  { name }</td>
     <td className="p-2">  
      <p><span className="text-gray-800 uppercase font-bold">email: {email}</span></p>
      <p><span className="text-gray-800 uppercase font-bold"> Tel: {phone}</span></p>
     </td>
     <td className="p-2">  { company }</td>
     <td className="p-2"> 
     <button type="button" className="bg-green-700 hover:bg-green-500 block w-full uppercase p-2 font-bold text-xs text-white mb-2">
        Editar
        </button> 
      <button type="button" className="bg-blue-700 hover:bg-blue-500 block w-full uppercase p-2 font-bold text-xs text-white mb-2">
        Editar
        </button> 
        <button type="button" className="bg-red-700 hover:bg-red-500 block w-full p-2 text-xs text-white font-bold uppercase">
          Eliminar
        </button>
      </td>
  
  </tr>
  
  
  );
};

export default Customer;
