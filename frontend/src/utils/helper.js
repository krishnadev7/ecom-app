import { toast } from "react-hot-toast";
import axios from 'axios'

const base_server_url = import.meta.env.VITE_APP_SERVER_URL;


export async function SignUp(data){
    try {
        const fetchData = await fetch(`${base_server_url}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const resData = await fetchData.json();
        return toast(resData.msg);
    } catch (error) {
        console.log(error);
        return toast.error(error);
    }
}

export async function LogIn(creds){
  try {
    const fetchData = await fetch(`${base_server_url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(creds),
    });
    const resData = await fetchData.json();
     if(resData.alert){
      // toast.success(resData.msg)
      return resData
     }
     toast.error(resData.msg);
  } catch (error) {
    console.log(error);
    return toast.error(error);
  }
}