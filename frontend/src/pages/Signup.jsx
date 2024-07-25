import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"


export const Signup = () => {
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();


    return  <div className="bg-slate-300  h-screen flex justify-center">
      
      <div className="flex flex-col justify-center ">
        
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
           
              <Heading label={"Sign up"}></Heading>
              <SubHeading label={"Enter your information to create an account"}></SubHeading>
              <InputBox
                onChange={(e) => {
                    setFirstName(e.target.value);
                }}
              label={"First Name"} placeholder={"Shounak"}></InputBox>  
              
              <InputBox 
                onChange={(e) => {
                    setLastName(e.target.value);
                }}              
              label={"Last Name"} placeholder={"Joshi"}></InputBox>
             
              <InputBox 
                 onChange={(e) => {
                    setUsername(e.target.value);
                }}
              label={"Email "} placeholder={"Shounak@gmail.com"}></InputBox>
             
              <InputBox 
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label={"Password "} placeholder={"*****"}></InputBox>
             
              <div className="pt-3">
                  <Button  
                    onPress={async () => {
                     const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                        username : username,
                        firstName : firstName ,
                        lastName : lastName,
                        password : password
                     } );
                     localStorage.setItem("token" , response.data.token)
                     navigate("/dashboard")
                    } 
                    
                    }

                  label={"Sign up"}></Button>
              </div>
              <BottomWarning label={"Already have an account ?"} 
              buttonText={"Sign in"} to={"/signin"}></BottomWarning>
          </div>
      </div>
    </div>
}