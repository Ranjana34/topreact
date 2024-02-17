import React from "react";

class Home extends React.Component{
    render() {
       return (
		<div id="login-form-wrap">
		<div class="backup">
		 <img class="" src="assets/images/logo.png" alt="" width="80"/>
		 </div>	
		<form id="login-form">
		  <p>
		  <input type="text" id="username" name="username" placeholder="Username" required/>
		  </p>
		  <p>
		  <input type="email" id="email" name="email" placeholder="Email Address" required/>
		  </p>
		  <p>
		  <input type="submit" id="login" value="Login"/>
		  </p>
		</form>
		<div id="create-account-wrap">
		  
		</div>
	  </div>
       );
    }
}

export default Home;