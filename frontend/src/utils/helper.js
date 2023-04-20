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
        console.log(resData);
        return resData;
    } catch (error) {
        console.log(error);
        return error
    }
}