import React from "react";

class Home extends React.Component{
    render() {
       return (
		<div class="fix-wrapper">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-6">
                    <div class="card mb-0 h-auto">
                        <div class="card-body">
                            <div class="text-center mb-3">
                                <img class="logo-auth" src="assets/images/logo.png" alt=""/>
                            </div>
                            <form action="config/login.php" method="post">
                                <div class="form-group mb-4">
                                    <label class="form-label" for="username">Username</label>
                                    <input required type="text" class="form-control" placeholder="Enter username" name="username"/>
                                </div>
                                <div class="mb-sm-4 mb-3 position-relative">
                                    <label class="form-label" for="dlab-password">Password</label>
                                    <input required type="password" id="dlab-password" class="form-control" name="password"/>
                                    <span class="show-pass eye">
                                        <i class="fa fa-eye-slash"></i>
                                        <i class="fa fa-eye"></i>
                                    </span>
                                </div>
                                
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

       );
    }
}

export default Home;