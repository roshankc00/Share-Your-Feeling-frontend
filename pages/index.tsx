import { BASE_URL } from "@/constants/api_all";
import { RegisterInterface } from "@/interfaces/authInterface";
import { registerUser } from "@/slice/authSlice";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const router=useRouter()
  const dispatch=useDispatch()
  const [profile, setprofile] = useState("")
  const [inputs, setinputs] = useState<RegisterInterface>({
    name:"",
    email:"",
    password:""
  })
  
  const handleSubmit=async(e:any)=>{
    e.preventDefault()
    const formdata=new FormData();
    formdata.append('name',inputs.name)
    formdata.append('email',inputs.email)
    formdata.append('password',inputs.password)
    formdata.append('profile',profile)
    console.log(formdata)
    const res=await axios.post(`${BASE_URL}/api/v1/user/register`,formdata);
    dispatch(registerUser(res.data))
    
  }
  
  
  const data=useSelector((data:any)=>{
    return data.authReducer
  })
  useEffect(()=>{
    if(data.sucess){
      router.push('/login')      
    }
  })
  
  return (
    <>
      <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
              Explore your Feeling
            </h1>
          </div>
          <h1 className="mt-10 text-center text-3xl  leading-9 tracking-tight text-gray-900">
            Registration form{" "}
          </h1>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
              <div>
                <div className="mt-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={inputs.name}
                    onChange={(e:any)=>{
                      e.preventDefault()
                      setinputs({...inputs,name:e.target.value})
                    }}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    password
                  </label>
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
                <div className="mt-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    profile
                  </label>
                  <input
                    id="password"
                    name="profile"
                    type="file"
                    onChange={(e:any)=>{
                      e.preventDefault()
                      setprofile(e.target.files[0])
                    }}
                    enctypes='multipart/form-data'

                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
