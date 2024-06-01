import { useEffect, useState } from "react"
import { deleteEmployeeSer, listOfEmployees } from "../services/EmployeeService";
import '../App.css';
import { useNavigate } from "react-router-dom";
const ListEmployeeComponent = () =>{

    const [employees,setEmployees] =useState([]);
    useEffect(()=>{
        listOfEmployees().then((response)=> setEmployees(response.data))
        .catch(
            (error)=>console.log(error)
        )
    })

    const navigator = useNavigate();
    const addEmployee = ()=>{
        navigator("/add-employee")
    }

     const updateEmployee=(empId)=>{
        navigator(`/update-employee/${empId}`) 
    }

    const deleteEmployee=(empId)=>{
        deleteEmployeeSer(empId);
        navigator("/employees") 
    }
    return(
        <div className="container">
            <h2 className="text-center">List of employees</h2>
            <button className="btn btn-primary mb-2" onClick={addEmployee}>Add Employee</button>
           <table className="table table-striped table-bordered">
            <thead>
                 <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Actions</th>
                 </tr>
            </thead>
            
                {
                    employees.map(emp=>
                        <tr id={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.firstName}</td>
                        <td>{emp.lastName}</td>
                        <td>{emp.email}</td>
                        <td><button className="btn btn-info" onClick={()=>updateEmployee(emp.id)}>Update</button></td>
                        <td><button className="btn btn-warning" onClick={()=>deleteEmployee(emp.id)}>Delete</button></td>
                        </tr>
                    )
                }
            

           </table>
        </div>
    )
}

export default ListEmployeeComponent