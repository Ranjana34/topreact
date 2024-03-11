import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { BannerAsync } from '../../store/reducers/menu';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { banner } = useSelector((state: any) => state.bannerReducer);

    useEffect(() => {
        dispatch(BannerAsync());
    }, []);

    return (
        <>
            <Navbar />
            <div className="mycont">
                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Payment</h4>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Mobile Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Amount</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-md-12">
                                    <a href="paymentsummary">
                                        <button className="btn btn-success">
                                            Proceed
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrap">
                    <div id="dir-control-left" className="dir-control">
                        <i
                            className="fa fa-angle-left fa-5x"
                            aria-hidden="true"
                        ></i>
                    </div>
                    <div id="slider">
                        <div className="slide slide1">
                            <div className="slide-content"></div>
                        </div>
                        <div className="slide slide2">
                            <div className="slide-content"></div>
                        </div>
                        <div className="slide slide3">
                            <div className="slide-content"></div>
                        </div>
                    </div>
                    <div id="dir-control-right" className="dir-control">
                        <i
                            className="fa fa-angle-right fa-5x"
                            aria-hidden="true"
                        ></i>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-xl-3">
                            <div className="logo-maker text-center">
                                <img
                                    data-toggle="modal"
                                    data-target="#myModal"
                                    className="logo-auth"
                                    src="/public/assets/images/bpc.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-md-4 col-xl-3">
                            <div className="logo-maker text-center">
                                <img
                                    data-toggle="modal"
                                    data-target="#myModal"
                                    className="logo-auth"
                                    src="/public/assets/images/dstv.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-md-4 col-xl-3">
                            <div className="logo-maker text-center">
                                <img
                                    data-toggle="modal"
                                    data-target="#myModal"
                                    className="logo-auth"
                                    src="/public/assets/images/mascom.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-md-4 col-xl-3">
                            <div className="logo-maker text-center">
                                <img
                                    data-toggle="modal"
                                    data-target="#myModal"
                                    className="logo-auth"
                                    src="/public/assets/images/orange.jpeg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <img
                            className="bottombanner"
                            src="/public/assets/images/top.jpg"
                            alt="Bottom Banner"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
