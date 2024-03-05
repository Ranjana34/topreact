import React from "react";

class Dashboard extends React.Component{
    render() {
       return (
    <div class="mycont">
		<div id="myModal" class="modal fade" role="dialog">
				<div class="modal-dialog">
					<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Payment</h4>
					</div>
					<div class="modal-body">
							<div class="form-group">
								<label>Mobile Number</label>
								<input type="text" class="form-control"/>
							</div>
							<div class="form-group">
								<label>Amount</label>
								<input type="text" class="form-control"/>
							</div>
							<div class="col-md-12">
							<a href="paymentsummary"><button class="btn btn-success">Proceed</button></a>
							</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
					</div>
				</div>
				</div>
				<div class="wrap">
        			<div id="dir-control-left" class="dir-control"><i class="fa fa-angle-left fa-5x" aria-hidden="true"></i>
				</div>
							<div id="slider">
								<div class="slide slide1">
									<div class="slide-content">
									</div>
								</div>
								<div class="slide slide2">
									<div class="slide-content">
									</div>
								</div>
								<div class="slide slide3">
									<div class="slide-content">
									</div>
								</div>
							</div>
							<div id="dir-control-right" class="dir-control"><i class="fa fa-angle-right fa-5x" aria-hidden="true"></i>
					</div>
    		</div>	
        <div class="container-fluid">
				<div class="row">
					<div class="col-md-4 col-xl-3">
						<div class="logo-maker text-center">
							<img data-toggle="modal" data-target="#myModal"  class="logo-auth" src="assets/images/bpc.jpg" alt=""/>
						</div>
					</div>
					<div class="col-md-4 col-xl-3">
					<div class="logo-maker text-center">
					<img data-toggle="modal" data-target="#myModal" class="logo-auth" src="assets/images/dstv.png" alt=""/>
					</div>
					</div>
					<div class="col-md-4 col-xl-3">
					<div class="logo-maker text-center">
					<img data-toggle="modal" data-target="#myModal" class="logo-auth" src="assets/images/mascom.png" alt=""/>
					</div>
					</div>
					<div class="col-md-4 col-xl-3">
					<div class="logo-maker text-center">
					<img data-toggle="modal" data-target="#myModal" class="logo-auth" src="assets/images/orange.jpeg" alt=""/>
					</div>
					</div>		
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 foot">
				<p class="footcol" align="center">©Copyright 2024  | Design By Squareitservices</p>
				</div>
         </div>
    </div>
    );
}
}
  
  export default Dashboard;