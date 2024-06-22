// import React from "react"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import './App.css'



function App() {
 
 const [passwordVisibility, setPasswordVisibility] = useState("password")

 function showPassword(passwordVisibility){
  if( passwordVisibility=="text"){
    setPasswordVisibility("password")
  }else{
    setPasswordVisibility("text")
  }

 }

  return (
    <main className="flex h-screen flex-col justify-center items-center">
      <Card className="h-13 w-1/3">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter you Email to Login</CardDescription>
        </CardHeader>
        <CardContent>
          <Input type="email" placeholder="Enter your Email" ></Input>
          <div className="flex">
          <Input className="mt-3 w-full" type={passwordVisibility} placeholder="Password"/>
          {
            passwordVisibility === "password" ?<EyeOff className="relative mt-5 z-10 right-8 select-none" onClick={()=>showPassword(passwordVisibility)}></EyeOff>
            : <Eye className="relative mt-5 z-10 right-8 select-none" onClick={()=>showPassword(passwordVisibility)}></Eye>
            
          }
          {/* <Button className="mt-3 mr- absolute" size={"icon"} onClick={()=>{
            if(passwordVisibility==="text"){
              setPasswordVisibility("password")
            }else{
              setPasswordVisibility("text")
            }
          }
          
        }>
          {
            passwordVisibility==="password"?<Eye></Eye>:<EyeOff></EyeOff>
          }
        </Button> */}
          </div>
          <div className="flex justify-between mt-2 sm:flex-col md:flex-row">
          <a href="#" className="underline cursor-pointer md:ml-2">Forgot Password?</a> <a className="text-black md:ml-2" href="#">Signup</a> 
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Login</Button>
        </CardFooter>
      </Card>
    </main>
  )
}

export default App
