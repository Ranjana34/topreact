import React from "react";

class Dashboard extends React.Component{
    render() {
       return (
    <div class="content-body">
        <div class="container-fluid">
	      <div class="row">
					<div class="col-md-4 col-xl-3">
									<div class="card bg-c-blue order-card">
										<div class="card-block">
											<h6 class="m-b-20">Total Users</h6>
											<h2 class="text-right"><i class="fa fa-cart-plus f-left"></i><span>486</span></h2>
										</div>
									</div>
								</div>
								<div class="col-md-4 col-xl-3">
									<div class="card bg-c-green order-card">
										<div class="card-block">
											<h6 class="m-b-20">Total Users</h6>
											<h2 class="text-right"><i class="fa fa-rocket f-left"></i><span>486</span></h2>
											
										</div>
									</div>
								</div>
								
								<div class="col-md-4 col-xl-3">
									<div class="card bg-c-yellow order-card">
										<div class="card-block">
											<h6 class="m-b-20">Total Users</h6>
											<h2 class="text-right"><i class="fa fa-refresh f-left"></i><span>486</span></h2>
											
										</div>
									</div>
								</div>
								
								<div class="col-md-4 col-xl-3">
									<div class="card bg-c-pink order-card">
										<div class="card-block">
											<h6 class="m-b-20">Total Users</h6>
											<h2 class="text-right"><i class="fa fa-credit-card f-left"></i><span>486</span></h2>
											
										</div>
									</div>
								</div>		
				</div>
				<div class="row">
					<div class="col-md-4 col-xl-3">
						<div class="logo-maker text-center">
							<img class="logo-auth" src="assets/images/bpc.jpg" alt=""/>
						</div>
					</div>
					<div class="col-md-4 col-xl-3">
					<div class="logo-maker text-center">
					<img class="logo-auth" src="assets/images/dstv.png" alt=""/>
					</div>
					</div>
					<div class="col-md-4 col-xl-3">
					<div class="logo-maker text-center">
					<img class="logo-auth" src="assets/images/mascom.png" alt=""/>
					</div>
					</div>
					<div class="col-md-4 col-xl-3">
					<div class="logo-maker text-center">
					<img class="logo-auth" src="assets/images/orange.jpeg" alt=""/>
					</div>
					</div>		
				</div>
			</div>
    </div>
	
    );
}
}
  
  export default Dashboard;