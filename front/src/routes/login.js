import { useState } from "react";
import LogoAlt from "../components/logoalt";
import "./login.css";
export default function LoginForm({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({email, password }), 
      headers: {
        "Content-Type": "application/json" 
      },
    })
      .then(res => res.json())
      .then(data => (console.log(data)));
  };
  const handleClick = (e) => {
    e.preventDefault(); 
    fetch("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify({email, password }), 
      headers: {
        "Content-Type": "application/json" 
      },
    })
      .then(res => res.json())
      .then(data => {
        const userEncripted = data.token.split('.')[1];
        const userJson = atob(userEncripted);
        const user = JSON.parse(userJson);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", userJson);
        setUser(user);
      })
  };
  return (
    <div>
      <section className="hero">
        <h3>Connectez-vous</h3>
        <LogoAlt className="logo" />
      </section>
      <section onSubmit={handleSubmit} className="forms">
       <form className="loginForms">
          <div className="formGroup">
            <label>Email</label>
            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} id="email" required />
          </div>
          <div className="formGroup">
            <label>Mot de passe</label>
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} id="password" required />
            <span className="forgot">Mot de passe oublier</span>
          </div>
          <div className="formGroup">
            <input type='button' onClick={ handleClick} value="Se Connecter" className="signIn"></input>
          </div>
          <div className="formGroup">
            <input type='submit'  value="S'inscrire" className="signUp"></input>
          </div>
       </form>
      </section>
    </div>
  );
}
