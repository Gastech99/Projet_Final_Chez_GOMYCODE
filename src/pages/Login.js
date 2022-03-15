import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const auth = getAuth();


  const login = async () => {
    {/** Identification de l'utilisateur de jea existant */}
    try {
      setLoading(true)
      const result = await signInWithEmailAndPassword(auth, email, password)
      localStorage.setItem("currentUser", JSON.stringify(result))
      setLoading(false)
      toast.success("Identification reussie")
      window.location.href="/"
    }catch(error) {
      console.log(error)
      toast.error("Une erreur est survenue")
      setLoading(false)
    }
  }

  return (
    <div className="login-parent">
      {loading && (<Loader/>)}
      <div className="row justify-content-center">
        <div className="col-md-4 z1">
          <div className="login-form">
            <h2>Login</h2>
            <hr></hr>
            <input
              type="text"
              className="form-control"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button className="my-3" onClick={login}>Login</button>
            
            <hr></hr>

            <Link to="/register">Inscrivez-vous,</Link>si vous n'avez pas de compte
          </div>
        </div>
        <div className="col-md-5 z1">
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_6wutsrox.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="login-bottom">

        </div>

      </div>
    </div>
  );
}

export default Login;
