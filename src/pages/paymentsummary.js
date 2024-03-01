import React from "react";

class PaymentSummary extends React.Component{
    render() {
       return (
    <div class="mycont">
        <div class="row">
                <div class="col-md-12 logo-maker text-center">
		            <h2 class="mycol">Payment Summary</h2>
                    <table width="100%">
                        <tr>
                            <td><b>Service</b></td>
                            <td>Mascom</td>
                        </tr>
                        <tr>
                            <td><b>Number</b></td>
                            <td>71367859</td>
                        </tr>
                        <tr>
                            <td><b>Amount Payable</b></td>
                            <td>P10</td>
                        </tr>
                        <tr>
                            <td colspan="2">Next step will generate your bill!</td>
                        </tr>
                    </table>
                    <h2 class="mycol">Payment Options</h2>
                    <button class="btn btn-warning">Cash</button>
                    <div class="col-md-12">
                    <input type="checkbox"/> Use Commission Wallet
                    </div>
                    <div class="col-md-12">
                    <button class="btn btn-success">Pay</button>
                    </div>
                </div>
        </div>
        <div class="row">
         <div class="col-md-12">
         <img class="bottombanner" src="assets/images/top.jpg" alt="Bottom Banner"/>
         </div>
         </div>
    </div>
    );
}
}
  
  export default PaymentSummary;