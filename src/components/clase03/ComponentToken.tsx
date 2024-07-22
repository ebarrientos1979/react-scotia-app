import React from 'react'
import { useState, useCallback } from 'react'
import axios from 'axios'

type Props = {}

const ComponentToken = (props: Props) => {
    const [email, setEmail] = useState<string>("anonimo@gmail.com");
    const [password, setPassword] = useState<string>("123456");


    const getToken = useCallback(() => {
        console.log("GET TOKEN");
        axios.post("http://localhost:8089/api/v1/auth/signin",
            {
                email: email,
                password: password
            }

        ).then(
            res => {
                console.log(res.data);
            }
        ).catch(
            error =>{
                console.error("ERROR");
                console.error(error);
            }
        );
    }, []);

  return (
    <>
        <form>
            <div className="mb-3">
                
                <input type="text" className="form-control" id="email" placeholder=''/>                
            </div>
            <div className="mb-3">
                
                <input type="password" className="form-control" id="password" placeholder='' />
            </div>
            <button type="submit" className="btn btn-primary" onClick={getToken}>Submit</button>
        </form>
    </>
  )
}

export default ComponentToken;