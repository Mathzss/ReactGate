import { useState } from "react";
import "./App.css"; // Aqui acontece a mágica da conexão!

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Dados:", { email, password });
  };

  return (
    <div className="container">
      <div className="login-box">
        <h1 className="logo">
          React<span>Gate</span>
        </h1>
        <p className="subtitle">Selecione a Opção que deseja</p>

        <form onSubmit={handleLogin} className="form">
          <input
            type="email"
            placeholder="E-mail"
            className="input-field"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="input-field"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            Acessar Painel
          </button>
        </form>

        <footer className="footer-text">Desenvolvido com ❤ por fascode</footer>
      </div>
    </div>
  );
}

export default App;
