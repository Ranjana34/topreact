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
	<div class="row">
					<div class="col-md-12">
					<img class="topbanner" src="assets/images/top.jpg" alt="Top Banner"/>
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
    </div>
    );
}
}
  
  export default Dashboard;