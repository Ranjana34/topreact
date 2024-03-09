import React from 'react';

const PaymentSummary = () => {
    return (
        <div className="mycont">
            <div className="row">
                <div className="col-md-12 logo-maker text-center">
                    <h2 className="mycol">Payment Summary</h2>
                    <table width="100%">
                        <tr>
                            <td>
                                <b>Service</b>
                            </td>
                            <td>Mascom</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Number</b>
                            </td>
                            <td>71367859</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Amount Payable</b>
                            </td>
                            <td>P10</td>
                        </tr>
                        <tr>
                            <td>Next step will generate your bill!</td>
                        </tr>
                    </table>
                    <h2 className="mycol">Payment Options</h2>
                    <button className="btn btn-warning">Cash</button>
                    <div className="col-md-12">
                        <input type="checkbox" /> Use Commission Wallet
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-success">Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentSummary;
