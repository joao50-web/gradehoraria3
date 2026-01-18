function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("erro");

  erro.textContent = "";

  if (!email || !senha) {
    erro.textContent = "Preencha todos os campos.";
    return;
  }

  // Login simulado
  if (email === "joao123" && senha === "123") {
    localStorage.setItem("usuarioLogado", email);
    window.location.href = "grade.html";
  } else {
    erro.textContent = "Usuário ou senha inválidos.";
  }
}