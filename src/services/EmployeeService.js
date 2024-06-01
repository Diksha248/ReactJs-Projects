import axios from "axios";

const URL="http://localhost:8080/api/employees"
export const listOfEmployees = ()=>{
    return(
        axios.get(URL)
    )   
}  

export const addEmployee = (employee)=>{
    return(
        axios.post(URL,employee)
    )
}

export const getEmployeeById = (empId)=>{
    return(
        axios.get(URL+"/"+empId)
    )   
} 

export const updateEmployee = (empId,emp)=>{
    return(
        axios.put(URL+"/"+empId,emp)
    )   
} 

export const deleteEmployeeSer = (empId)=>{
    return(
        axios.delete(URL+"/"+empId)
    )   
} 