import { useState } from "react";
import { useDispatch } from "react-redux";
// import {setAuthentication  } from "../store/authAction"
import axios from "axios";

function Login(){
    const dispatch =useDispatch();

    type AuthType ={
        username:string
        password:string
        
    }

    

    const[form] =  useState({
        username:"",
        password:""
    });

    

    const handleSubmit = async (e:any) =>{
    // check if creds by user are correct
    // Update global state
       e.preventDefault();

       const formContent:AuthType ={
        username:form.username,
        password:form.password
       };
    //    hit the api with the creds from form

    try{
        const apiUrl ="http://127.0.0.1:5000/login";
        const response = await axios.post(apiUrl,formContent,{
        
            headers: {
                'Content-Type': 'application/json',
               
            }
        });
        

        console.log("Done: ",response);


         



         console.log("Done.",response)



    }catch(error){
        console.log(error)
    }

        // dispatch(setAuthentication(formContent))

    }

    return(
        <div>
            <form className='text-black' onSubmit={(e)=>handleSubmit(e)}>
                <input type="username" name="name" required/>
                <input type="password" name="password" required/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login;