import React, { useState } from 'react';
import './App.css';
import pt from './flags/pt.gif'
import uk from './flags/uk.gif'

function App() {

	const [lang, setLang] = useState("UK")

	return (
		<body>

			<div className="language">
				<img src={pt} alt="" onClick={() => setLang("PT")} style={{ opacity: lang === "UK" ? "0.3" : "1"}} />
				<img src={uk} alt="" onClick={() => setLang("UK")} style={{ opacity: lang === "UK" ? "1" : "0.3"}} />
			</div>
			
			<div className="card">

				<div className="signup-box">

					<div className="logo">Cabril do Ceira</div>

					<div className="form">

						<h4>{lang === "UK" ? "Welcome!" : "Bem-vindo!"}</h4>

						<p>{lang === "UK" ? "Sign in by entering the information below." : "Faça login inserindo as informações abaixo."}</p>

						<input type="text" placeholder="email" size="40" className="inputs"></input>

						<input type="password" placeholder="password" size="40" className="inputs"></input>

						<div className="checks">
							<input type="checkbox" className="remember-me"/>{lang === "UK" ? "Remember me" : "Lembrar de mim"}
						</div>
						

						<button className="login-btn">{lang === "UK" ? "Continue" : "Continuar"}</button>
						
					</div>

				</div>

				<div className="signup-image">
					<img src="https://www.vortexmag.net/wp-content/uploads/2019/07/37270831351_811a996cba_h-e1564490852972.jpg" alt="cabril do ceira" />
				</div>

			</div>
			<h5 className="login"> {lang === "UK" ? "Dont have an account?" : "Não possuí uma conta?"} <span>{lang === "UK" ? "Sign up" : "Inscreva-se"}</span></h5>
		</body>
	);
	}

export default App;
