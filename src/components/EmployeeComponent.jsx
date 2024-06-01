import { useState ,useEffect} from "react"
import { addEmployee,getEmployeeById, updateEmployee } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeComponent = ()=>{
const[firstName,setFirstName]=useState("");
const[lastName,setLastName]=useState("");
const[email,setEmail]=useState("");
const navigator=useNavigate();
const[errors,setErrors]=useState({
    firstName:'',
    lastName:'',
    email:''
});

const saveOrUpdateEmployee=(e)=>{
    if(validateForm()){
      e.preventDefault();

      const employee={firstName,lastName,email};
      if(id)
       updateEmployee(id,employee)
      else
      addEmployee(employee);
      navigator("/employees");
    }
}

function validateForm(){
    let isValid=true;
   const error={...errors};
   if(!firstName.trim())
    {
    error.firstName="FirstName is required"
    isValid=false;
    }
   if(!lastName.trim()){
    error.lastName="LastName is required"
    isValid=false;}
   if(!email.trim()){
    error.email="Email is required"
    isValid=false;}

   if(!isValid)
    setErrors(error);
return isValid;

}
const{id}=useParams('id');
useEffect(()=>{
    getEmployeeById(id).then((response)=>{
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setEmail(response.data.email)
    })
    
    .catch((error)=>console.log(error))
},[id])
const title=()=>{
    if(id)
       return <h2 className='text-center'>Update Employee</h2> 
    else
    return <h2 className='text-center'>Add Employee</h2>
}

    return(
        <div className='container'>
            <br/> <br/>
            <div className='row'>
            <div className='card col-md-6 offset-md-3'>
                 {title()}
                 <div className='card-body'>
           <form>
            <div className='form-group mb-2'>
            <label className="form-label">First Name</label>
            <input required placeholder="Enter First Name" type="text" value ={firstName} name="firstName"
            className={`form-control ${errors.firstName?'is-invalid':''}`} onChange={(e)=>setFirstName(e.target.value)}></input> 
            {errors.firstName && <div className='invalid-feedback'>{errors.firstName} </div>}
            </div>
            
            <div className='form-group mb-2'>
            <label className="form-label">Last Name</label>
            <input required placeholder="Enter Last Name" type="text" value ={lastName} name="lastName"
            className='form-control' onChange={(e)=>setLastName(e.target.value)}></input> </div>
            
            <div className='form-group mb-2'>
            <label className="form-label">Email</label>
            <input required="true" placeholder="Enter Email" type="text" value ={email} name="email"
            className='form-control' onChange={(e)=>setEmail(e.target.value)}></input> </div>

            <input type="submit" onClick={saveOrUpdateEmployee}></input>
           </form></div></div></div>
        </div>
    )
}

export default EmployeeComponent