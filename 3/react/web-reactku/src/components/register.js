import React from 'react';
import '../assets/vendor/fontawesome-free/css/all.min.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';

const Register = () => {
    return(
            <div className="container-login">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-12 col-md-9">
                        <div class="card shadow-sm my-5">
                            <div class="card-body p-0">
                                <div class="row">
                                    <div className="col-lg-12">
                                        <div className='card-body'>
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-4">Register</h1>
                                            </div><br></br>
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input type="text" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Masukkan Email Baru Anda"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" class="form-control" id="exampleInputPassword" placeholder="Masukkan Password Baru Anda"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Role</label>
                                                <input type="text" class="form-control" name="" readonly value="customer"/>
                                            </div><br></br>
                                            <div class="form-group">
                                                <a href="#" class="btn btn-primary btn-block">Register</a>
                                            </div><br></br>
                                            <div class="text-center">
                                                <a class="font-weight-bold small" href="#">Kembali ke halaman login !!</a>
                                            </div><br></br>
                                            <div class="text-center">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Register

        
