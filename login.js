function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email === "joao123" && senha === "123") {
    localStorage.setItem("usuarioLogado", "true");
    window.location.href = "grade.html";
  } else {
    document.getElementById("erro").innerText = "Usuário ou senha inválidos";
  }
}