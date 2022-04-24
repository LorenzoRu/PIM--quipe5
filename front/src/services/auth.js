
export default {
	
	user: JSON.parse(localStorage.getItem("user")|| "null"),
	login(email, password) {
			return fetch("api/auth/signin", {
			    method: "POST",
					body: JSON.stringify({email, password}),
					headers: {
							"Content-Type": "application/json"
					},
			})
			.then(res => res.json())
			.then(data => {
					console.log(data);
					console.log(data.email)
					this.token = data.token;
					const userEncrypted = data.token.value.split('.')[1];
					const userJson = atob(userEncrypted);
					this.user = JSON.parse(userJson);
					localStorage.setItem("token", data.token);
					localStorage.setItem("user", userJson);
					this.callbacks.forEach((c) => c(this.user));
			});
	},
	logout() {
		this.user = null; // on réinitialise le user à null
		localStorage.removeItem("token"); // on vide le token
		localStorage.removeItem("user"); // on vide le user
		this.callbacks.forEach((c) => c(this.user));
	},
	isLogged() {return this.user !== null;},
	onUserChanged(callback) { // Ajout du design pattern EventListener
		this.callbacks.push(callback);
	}
}