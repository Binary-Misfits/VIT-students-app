import React, {useState} from 'react'
import { json, Link , useNavigate} from 'react-router-dom'

let data = null;

const Login_Card = () => {

  const [email, setEmail] = useState(null)
  const [pwd, setPwd] = useState(null)
  const navigate = useNavigate(null)

  const login_user = async (e) => {
    e.preventDefault();
    const res = await fetch('/',{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email:email,pwd:pwd
      })
    });
     data = await res.json(); // READ TYPE FROM HERE AND THEN SHOW XYZ PAGE ACCORDING TO IT!! after everything is working work on data security! and complaint.
    
    if(res.status === 400 || !data ){
      window.alert("Invalid credentials",data);
    }
    else if (data){
      // redirect to dashboard according to the permission!
      console.log(data.type)
      const type = data.type.toLowerCase();
      console.log(type);
      if ( type == "admin" || "root"){
        if(type == "root"){
          window.alert("Welcome ZODIAC3K! {ROOT} ");
          navigate('../dashboard/admin_dashboard');
        }
        if ( type == "admin") {
          window.alert("Successful");
          navigate('../dashboard/admin_dashboard');
        }
      }
      if (type ==  "staff"){
        window.alert("Successful Staff");
        navigate('../dashboard/staff_dashboard');
      }
      if(type ==  "student"){
        window.alert("Successful Student");
        navigate('../dashboard/student_dashboard');
      }
      // console.log(data); // my user object from database coming throught backend! and i can store it in redux and access everything mongodb querry using it!!
      
    }
  }


  return (
    <React.Fragment>
        <div className='md:w-[34vw] w-[56vw] m-10 p-10 md:p-0 md:m-10'>
        
          <form method='POST'>
              {/* ----------------- */}
              <label for="helper-text" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              {/* Email */}
              <input type="email" value={email} onChange={(e)=>{
                setEmail(e.target.value)
              }} id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-[#F9C041] focus:border-[#F9C041] outline-none block w-full p-2.5  mb-2.5" placeholder="name@xyz.com"/>
              {/* ----------------- */}
              <label for="helper-text" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
              {/* Password */}
              <input type="password"  value={pwd} onChange={(e)=>{
                setPwd(e.target.value)
              }} id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-[#F9C041] focus:border-[#F9C041] outline-none block w-full p-2.5 mb-2.5 " placeholder="password"/>
                  <div className='flex flex-col md:flex-row justify-center items-center w-full'>
                      <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 my-2 md:py-0">Do you have any <Link to='/support'><a href="#" className="font-medium  text-[#F9C041] hover:underline">issue?</a></Link>.</p>
                      <div className='mx-10'>
                          <button onClick={login_user} className="block truncate uppercase mx-auto shadow bg-[#F9C041] hover:bg-[#F9C000] focus:shadow-outline focus:outline-none text-white text-sm py-3 px-10 rounded-lg">Log in</button>
                      </div>
                  </div>        
          </form>
        </div>
    </React.Fragment>
  )
}
export  {data};
export default Login_Card
