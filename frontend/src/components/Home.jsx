import { NavLink } from "react-router";
import CreateEmp from "./CreateEmp";
function Home() {
  return (
    <div className="min-h-[80vh] flex justify-center items-center bg-gray-100 p-10">
      <div className="bg-white p-12 rounded-2xl shadow-2xl text-center w-[80%] max-w-4xl">
        
        <h1 className="text-5xl font-bold text-teal-700 mb-6">
          Employee Management System
        </h1>

        <p className="text-xl text-gray-600 leading-9 mb-8">
          Manage your employees efficiently with an easy-to-use dashboard.
          Create employee records, view employee details, and organize your
          workforce seamlessly.
        </p>

        <NavLink to="create-emp" className="px-8 py-4 text-lg bg-teal-700 text-white rounded-xl hover:bg-teal-800 transition duration-300">
          Get Started
        </NavLink>

      </div>
    </div>
  );
}

export default Home;