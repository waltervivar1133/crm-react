import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ArrowRight } from "../assets/icons/ArrowRight";

function Layout() {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Clientes
        </h2>
        <nav className="mt-10">
          <div className="flex flex-row items-center justify-center">
            {currentUrl === "/customers" ? <ArrowRight /> : null}
            <Link
              to=""
              className={`${
                currentUrl === "/customers"
                  ? "text-blue-400 underline-offset-1"
                  : "text-white"
              }  text-2xl   hover:text-blue-400 w-full transition-all`}
            >
              
              Clientes
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center">
            {currentUrl === "/customers/create" ? <ArrowRight /> : null}
            <Link
              to="/customers/create"
              className={`${
                currentUrl === "/customers/create"
                  ? "text-blue-400 underline-offset-1 "
                  : "text-white"
              }  text-2xl   hover:text-blue-400 w-full transition-all`}
            >
              
              Nuevo Cliente
            </Link>
          </div>
        </nav>
      </div>
      <div className="md:w-3/4 p-10 bg-gray-200 md:h-screen overflow-y-scroll ">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
