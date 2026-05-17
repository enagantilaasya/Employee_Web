import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmpoyee = (empObj) => {
    //navigate to /employee along with selected emp obj
    navigate("/employee", { state: empObj });
  };

  const gotoEditEmpoyee = (empObj) => {
    //navigate to /employee along with selected emp obj
    navigate("/edit-emp",{state:empObj});
  };
  const deleteEmpById = async (id) => {

  try {

    let res = await fetch(
      `http://localhost:4000/emp-api/employees/${id}`,
      {
        method: "DELETE",
      }
    );

    if (res.status === 200) {

      // REMOVE DELETED EMPLOYEE FROM UI
      setEmps(emps.filter((emp) => emp._id !== id));

    }

  } catch (err) {

    console.log(err);

  }

};
  useEffect(() => {
    async function getEmps() {
      let res = await fetch("http://localhost:4000/emp-api/employees");
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      }
    }
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center mb-4">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {emps.map((empObj) => (
          <div key={empObj._id} className="bg-blue-200 p-5 rounded-2xl text-center ">
            
            <p className="font-semibold">{empObj.name}</p>
            <p className="text-gray-500 text-sm">{empObj.email}</p>
            {/* 3 buttons */}
            <div className="flex justify-around mt-6">
              <button onClick={() => gotoEmpoyee(empObj)} className="bg-green-600 p-2 rounded-2xl text-white">
                View
              </button>
              <button onClick={()=>gotoEditEmpoyee(empObj)} className="bg-yellow-600 p-2 rounded-2xl text-white">
                Edit
              </button>
              <button onClick={() => deleteEmpById(empObj._id)} className="bg-red-600 p-2 rounded-2xl text-white">
              Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;