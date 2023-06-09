import { useEffect, useState } from "react";
import { BASE_URL } from "@/constants/api_all";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/slice/authSlice";
import { useRouter } from "next/router";
import { loginMe } from "@/interfaces/authInterface";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const {Login}=useSelector((data:any)=>{
    return data.authReducer
  })
  const Router=useRouter()
  const dispatch=useDispatch()
  const [inputs, setinputs] = useState<loginMe>({
    email: "",
    password: "",
  });
  const handleLogin = async (e:any) => {
    e.preventDefault()
    let loginData:any={
      email:inputs.email,
      password:inputs.password
      
    }
    if(!inputs.email || !inputs.password){
      toast.warn("all the fields are required")
    }
    loginData=JSON.stringify(loginData)
    try {
      
      
      // const res = await axios.post(`${BASE_URL}/user/login`,
      //  loginData)
      //   ;
      toast("loading>>")
      const response=await fetch(`${BASE_URL}/user/login`,{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          
        },
        body:loginData
      });
      const json=await response.json()
      console.log(json.sucess);
      if(json.sucess){
        toast.success("user login sucessfully")
      }
      dispatch(loginUser(json))
      
    } catch (error) {
      toast.warn("login failed")
      console.log(error)
      
  }
};
  useEffect(()=>{
    if(Login.sucess){
      localStorage.setItem('token',Login.token)
      Router.push('/content')
    }
  })
  return (
    <div>
         <ToastContainer />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={inputs.email}
                  onChange={(e:any)=>{
                    e.preventDefault()
                    setinputs({...inputs,email:e.target.value})
                  }}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={inputs.password}
                  onChange={(e:any)=>{
                    e.preventDefault()
                    setinputs({...inputs,password:e.target.value})
                  }}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleLogin}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

// mongodb+srv://rohitkc8848:aBFc4mt1AiItQftU@cluster0.lkxbuza.mongodb.net/todos?retryWrites=true&w=majority
