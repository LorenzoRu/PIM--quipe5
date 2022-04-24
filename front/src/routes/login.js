import { useState } from "react";
import LogoAlt from "../components/logoalt";
import authService from "../services/auth";
import "./login.css";
export default function LoginForm({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();
    authService.login(email, password)
    console.log(authService.email);
  };
  const handleClick = (e) => {
    e.preventDefault();
    fetch("/api/auth/signup", {
	    method: "POST",
			body: JSON.stringify({email, password}),
			headers: {
					"Content-Type": "application/json"
			},
		})
		.then(res => res.json())
		.then(data => {
        console.log(data);
          
				const userEncrypted = data.token.split('.')[0]; // payload 2e partie du token
				const userJson = atob(userEncrypted); // Décryptage du user
				const user = JSON.parse(userJson);
				localStorage.setItem("token", data.token); // on persiste le token
				localStorage.setItem("user", userJson); // on persiste le user
        setUser(user);
		}); // format de retour d'un login JWT { token: "montoken" }
  };
  return (
    <div>
      <section className="hero">
        <h3>Connectez-vous</h3>
        <LogoAlt className="logo" />
      </section>
      <section  className="forms">
       <form onSubmit={handleSubmit} className="loginForms">
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
            <input type='submit' value="Se Connecter" className="signIn"></input>
          </div>
          <div className="formGroup">
            <input type='button' onClick={handleClick} value="S'inscrire" className="signUp"></input>
          </div>
       </form>
      </section>
      <h1>{authService.email}</h1>
    </div>
  );
}
