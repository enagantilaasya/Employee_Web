import { useLocation } from "react-router";

function Employee() {
  //read state received in navigation
  const { state } = useLocation();

  return (
    <div className="p-16 text-center text-3xl shadow-2xl ml-50 mr-50">
      <p>Name: {state.name}</p>
       <p>Email: {state.email}</p>
       <p>Mobile No: {state.mobile}</p>
       <p>Designation: {state.designation}</p>
      <p>Company Name: {state.companyName}</p>
    </div>
  );
}

export default Employee;