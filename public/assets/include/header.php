<?php include('api/db/connection.php');

session_start();
if($_SESSION['username']==''){
    header('location:index'); }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Restaurant - POS</title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="images/logo.jpg">
        <!-- Datatable -->
        <!-- Toastr -->
    <link rel="stylesheet" href="vendor/toastr/css/toastr.min.css">
    <link href="vendor/datatables/css/jquery.dataTables.min.css" rel="stylesheet">
	<link rel="stylesheet" href="vendor/chartist/css/chartist.min.css">
    <link href="vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">

	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&amp;family=Roboto:wght@100;300;400;500;700;900&amp;display=swap" rel="stylesheet">
</head>
<body>
    <!--*******************
        Preloader start
    ********************-->
    <div id="preloader">
        <div class="sk-three-bounce">
            <div class="sk-child sk-bounce1"></div>
            <div class="sk-child sk-bounce2"></div>
            <div class="sk-child sk-bounce3"></div>
        </div>
    </div>
    <!--*******************
        Preloader end
    ********************-->

    <!--**********************************
        Main wrapper start
    ***********************************-->
    <div id="main-wrapper">

        <!--**********************************
            Nav header start
        ***********************************-->
        <div class="nav-header">
            <a href="dashboard" class="brand-logo">
                <!--<img class="logo-abbr" src="images/logo.png" alt="">-->
                <img class="" src="images/logo.jpg" alt="">
                <!--<img class="brand-title" src="images/logo-text.png" alt="">-->
            </a>

            <div class="nav-control">
                <div class="hamburger">
                    <span class="line"></span><span class="line"></span><span class="line"></span>
                </div>
            </div>
        </div>
        <!--**********************************
            Nav header end
        ***********************************-->
		<!--**********************************
            Header start
        ***********************************-->
        <div class="header">
            <div class="header-content">
                <nav class="navbar navbar-expand">
                    <div class="collapse navbar-collapse justify-content-between">
                        <div class="header-left">
                            <div class="dashboard_bar">
								Dashboard
                            </div>
                        </div>
                        <ul class="navbar-nav header-right">
							<!--<li class="nav-item">-->
							<!--	<div class="input-group search-area d-xl-inline-flex d-none">-->
							<!--		<input type="text" class="form-control" placeholder="Search here...">-->
							<!--		<div class="input-group-append">-->
							<!--			<span class="input-group-text"><a href="javascript:void(0)"><i class="flaticon-381-search-2"></i></a></span>-->
							<!--		</div>-->
							<!--	</div>-->
							<!--</li>-->
                            <li class="nav-item dropdown header-profile">
                                <a class="nav-link" href="javascript:void(0)" role="button" data-toggle="dropdown">
                                    <img src="images/profile/17.jpg" width="20" alt=""/>
									<div class="header-info">
										<span class="text-black"><strong>Brian Lee</strong></span>
										<p class="fs-12 mb-0">Admin</p>
									</div>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a href="" class="dropdown-item ai-icon">
                                        <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" class="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <span class="ml-2">Profile </span>
                                    </a>
                                    <!-- <a href="email-inbox.html" class="dropdown-item ai-icon">
                                        <svg id="icon-inbox" xmlns="http://www.w3.org/2000/svg" class="text-success" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        <span class="ml-2">Inbox </span>
                                    </a> -->
                                    <a href="logout" class="dropdown-item ai-icon">
                                        <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" class="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                        <span class="ml-2">Logout </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <!--**********************************
            Header end ti-comment-alt
        ***********************************-->

        <!--**********************************
            Sidebar start
        ***********************************-->
        <div class="deznav">
            <div class="deznav-scroll">
				<ul class="metismenu" id="menu">
                    <li><a class="ai-icon" href="dashboard" aria-expanded="false">
							<i class="flaticon-381-networking"></i>
							<span class="nav-text">Dashboard</span>
						</a>
                    </li>
                    <li><a class="ai-icon" href="store" aria-expanded="false">
                    <i class="fas fa-store"></i>
							<span class="nav-text">Store</span>
						</a>
                    </li> 
                    <li><a class="ai-icon" href="table" aria-expanded="false">
                    <i class="fas fa-couch"></i>
							<span class="nav-text">Table</span>
						</a>
                    </li>
                    <li><a class="ai-icon" href="category" aria-expanded="false">
							<i class="flaticon-381-controls-3"></i>
							<span class="nav-text">Category</span>
						</a>
                    </li>
                    <li><a class="ai-icon" href="items" aria-expanded="false">
                    <i class="fas fa-utensils"></i>
							<span class="nav-text">Items</span>
						</a>
                    </li>
                    <li><a class="ai-icon" href="javascript:void()" aria-expanded="false">
                    <i class="fas fa-users"></i>
							<span class="nav-text">Customers</span>
						</a>
                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                    <i class="fas fa-shopping-bag"></i>
							<span class="nav-text">Purchase</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="supplier">Supplier</a></li>
                            <li><a href="#">Create Purchase</a></li>
                            <li><a href="#">Purchase List</a></li>

                        </ul>
                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="fas fa-shopping-basket"></i>
                            <span class="nav-text">Sales</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="#">Create Order</a></li>
                            <li><a href="#">Order List</a></li>

                        </ul>
                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                    <i class="fas fa-file-alt"></i>
							<span class="nav-text">Reports</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="#">Sales Reports</a></li>
                            <li><a href="#">Product Summary</a></li>
                        </ul>
                    </li>
                    <li><a href="#" class="ai-icon" aria-expanded="false">
                    <i class="fas fa-wallet"></i>
							<span class="nav-text">Expenses</span>
						</a>
					</li>
                    <li><a href="logout" class="ai-icon" aria-expanded="false">
                    <i class="fas fa-sign-out-alt"></i>
							<span class="nav-text">Logout</span>
						</a>
					</li>
                </ul>
				<!-- <div class="copyright">
					<p><strong>Sego Restaurant Admin Dashboard</strong> © 2021 All Rights Reserved</p>
					<p>Made with <span class="heart"></span> by DexignZone</p>
				</div> -->
			</div>
        </div>
<style>
   [data-header-position="fixed"] .header{
        height:12% !important;
    }
    .nav-control{
        top:34% !important;
    }
</style>
       