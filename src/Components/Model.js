import iconLogoGoogle from '../static/images/img-model/logo-google.png'
import iconLogoFace from '../static/images/img-model/logo-face.png'
import logoProfile from '../static/images/img-model/ex_setprofile.jpg'
function Model(){
    return (
        <div>
            <div className="model-login">
                <div className="model-form">

                    <div className="model-form__header">
                        Login
                    </div>


                    <div className="model-form__body">

                        <div className="model-body__email">
                            <label htmlFor="model-body__emailIpt">Email</label>
                            <div className="model-body-ipt model-body__email-ipt">
                                <input type="email" id="model-body__emailIpt" placeholder="Enter email..." />
                                <i className="fa-solid fa-envelope fa-beat-fade"></i>
                            </div>
                        </div>

                        <div className="model-body__pass">
                            <label htmlFor="model-body__passIpt">Password</label>
                            <div className="model-body-ipt model-body__pass-ipt">
                                <input type="password" id="model-body__passIpt" placeholder="Enter password..." />
                                <i className="fa-solid fa-lock fa-beat-fade"></i>
                            </div>
                        </div>


                        <div className="model-body__remember">
                            <div className="model-body__remember-wrap">
                                <div className="model-body__rememberMe js-model-changepass">
                                    Remember Me?
                                </div>
                                <div className="model-body__forgotPass js-model-forget">
                                    Forgot Password?
                                </div>
                            </div>
                            <button type="submit">Login
                                <i className="fa-solid fa-right-to-bracket"></i>
                            </button>
</div>

                    </div>


                    <div className="model-form__footer">
                        <div className="model-footer__login">
                            <div>
                                <span>With</span>
                                <img src={iconLogoGoogle} alt="" />
                                <span>Or</span>
                                <img src={iconLogoFace} alt="" />
                            </div>
                            <div className="model-footer__regiter">
                                <span className="js-model-setprofileO">Don't have a account?</span>
                                <span className="js-model-registerO">Register</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="model-register">
                <div className="model-form">

                    <div className="model-form__header">
                        Sign up
                    </div>

                    <div className="model-form__body">
                        <div className="model-body__ipts">
                            <div className="model-body__ipt--email">
                                <input type="text" className="model-body__ipt" placeholder="Email..." />
                                <i className="fa-solid fa-envelope fa-fade"></i>
                            </div>
                            <div className="model-body__ipt--phone">
                                <input type="text" className="model-body__ipt" placeholder="Phone number..." />
                                <i className="fa-solid fa-phone fa-fade"></i>
                            </div>
                            <div className="model-body__ipt--fullname">
                                <input type="text" className="model-body__ipt" placeholder="Fullname..." />
                                <i className="fa-solid fa-user fa-fade"></i>
                            </div>
                            <div className="model-body__ipt--address">
                                <input type="text" className="model-body__ipt" placeholder="Address..." />
                                <i className="fa-solid fa-map-pin fa-fade"></i>
                            </div>
                            <div className="model-body__ipt--birthday">
                                <input type="text" className="model-body__ipt" placeholder="Birthday..." />
                                <i className="fa-solid fa-cake-candles fa-fade"></i>
                            </div>
                            <div className="model-body__ipt--pass">
                                <input type="text" className="model-body__ipt" placeholder="Password..." />
                                <i className="fa-solid fa-key fa-fade"></i>
                            </div>
                            <div className="model-body__ipt--confirm">
<input type="text" className="model-body__ipt" placeholder="Confirm Password..." />
                                <i className="fa-solid fa-lock fa-fade"></i>
                            </div>
                        </div>
                        <button type="submit">
                            Sign up
                            <i className="fa-solid fa-user-plus fa-fade"></i>
                        </button>
                    </div>

                    <div className="model-form__footer">
                        <div className="model-footer__login">
                            <div>
                                <span>With</span>
                                <img width="3%" src={iconLogoGoogle} alt="" />
                                <span>Or</span>
                                <img width="3%" src={iconLogoFace} alt="" />
                            </div>
                            <div className="model-footer__regiter">
                                <span className="js-model-loginO">Login</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="model-forget">
                <div className="model-form">


                    <div className="model-form__header">
                        Forget Password
                    </div>

                    <div className="model-form__body">
                        <div className="model-body__ipts">
                            <div className="model-body__ipt-wrap">
                                <input type="email" className="model-body__ipt"
                                    placeholder="Enter email..." />
                                <i className="fa-solid fa-envelope fa-fade"></i>
                            </div>
                            <div className="model-body__ipt-wrap">
                                <input type="text" className="model-body__ipt"
                                    placeholder="Enter Capcha..." />
                                <button className="model-body__ipt-capcha">
                                    Gửi mã
                                </button>
                            </div>
                            <div className="model-body__ipt-wrap">
                                <input type="text" className="model-body__ipt"
                                    placeholder="Enter Password..." />
                                <i className="fa-solid fa-key fa-fade"></i>
                            </div>
                            <div className="model-body__ipt-wrap">
                                <input type="text" className="model-body__ipt"
                                    placeholder="Confirm Password..." />
                                <i className="fa-solid fa-lock fa-fade"></i>
                            </div>
</div>
                    </div>

                    <div className="model-form__footer">
                        <button className="model-form__btn">
                            Change
                        </button>
                        <div className="model-form__backlogin js-model-login">
                            Login
                        </div>
                    </div>


                </div>
            </div>

            <div className="model-changepass">
                <div className="model-form">

                    <div className="model-form__header">
                        Change Password
                    </div>


                    <div className="model-form__body">
                        <div className="model-body__ipts">

                            <div className="model-body__ipt-wrap">
                                <input type="email" className="model-body__ipt"
                                    placeholder="Enter email..." />
                                <i className="fa-solid fa-envelope fa-fade"></i>
                            </div>

                            <div className="model-body__ipt-wrap">
                                <input type="password" className="model-body__ipt"
                                    placeholder="Enter password..." />
                                <i className="fa-solid fa-key fa-fade"></i>
                            </div>

                            <div className="model-body__ipt-wrap">
                                <input type="password" className="model-body__ipt"
                                    placeholder="New password..." />
                                <i className="fa-solid fa-key fa-fade"></i>
                            </div>

                            <div className="model-body__ipt-wrap">
                                <input type="password" className="model-body__ipt"
                                    placeholder="Confirm password..." />
                                <i className="fa-solid fa-lock fa-fade"></i>
                            </div>
                        </div>
                    </div>


                    <div className="model-form__footer">
                        <button>Change Password</button>
                    </div>
                </div>
            </div>

            <div className="model-setprofile">
                <div className="model-form">


                    <div className="model-form__header">
                        Set Profile
                        <button className="model-form__header--btn">
                            <i className="fa-solid fa-xmark fa-spin"></i>
                        </button>
                    </div>


                    <div className="model-form__body">
                        <div className="model-body__avt-wrap">
                            <div className="model-body__img"
                                style={{
backgroundImage: `url(${logoProfile})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}></div>
                            <input type="file" />
                        </div>
                        <div className="model-body__ipts">

                            <div className="model-body__ipt-wrap">
                                <input type="text" className="model-body__ipt"
                                    placeholder="Enter fullname..." />
                                <i className="fa-solid fa-user"></i>
                            </div>

                            <div className="model-body__ipt-wrap">
                                <input type="text" className="model-body__ipt"
                                    placeholder="Enter phone..." />
                                <i className="fa-solid fa-phone"></i>
                            </div>

                            <div className="model-body__ipt-wrap">
                                <input type="text" className="model-body__ipt"
                                    placeholder="Enter address..." />
                                <i className="fa-solid fa-location-dot"></i>
                            </div>

                            <div className="model-body__ipt-wrap">
                                <input type="date" className="model-body__ipt model-body__ipt--birthday"
                                    placeholder="Enter birth..." />
                                <i className="fa-solid fa-calendar"></i>
                            </div>

                            <div className="model-body__ipt-wrap">
                                <input type="email" className="model-body__ipt"
                                    placeholder="Enter email..." />
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                        </div>
                    </div>


                    <div className="model-form__footer">
                        <button>
                            SET
                            <i className="fa-solid fa-wrench fa-fade"></i>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Model