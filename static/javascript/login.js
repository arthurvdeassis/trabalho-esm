document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevenir comportamento padrão do formulário
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    try {
      const response = await axios.post('https://seu-servidor.com/api/login', {
        username: username,
        password: password
      });
  
      // Supondo que o servidor retorne o JWT no campo 'token'
      const token = response.data.token;
  
      // Armazenar o token no localStorage
      localStorage.setItem('jwt', token);
  
      // Redirecionar para uma página protegida
      window.location.href = 'pagina-protegida.html';
    } catch (error) {
      // Exibir mensagem de erro caso o login falhe
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Login ou senha incorretos. Tente novamente.';
    }
  });
  