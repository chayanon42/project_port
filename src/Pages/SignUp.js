import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import firebaseConfig from '../Firebase/firebase'
import Navsign from '../components/Navber/Navsign'
const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        try {

            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);

        } catch(error) {
            alert(error);
        }
    }

    if (currentUser) {
        return <Redirect to="/Login" />
    }

    return (
        <>
        <Navsign/>
        {/* <h1 className="text-secondary text-uppercase"style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Sign up</h1> */}
            <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form onSubmit={handleSubmit}>
                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-4">
                            <label className="form-label text-secondary text-uppercase" for="form1Example13">Email</label>
                                <input type="email"name='email' id="form1Example13" className="form-control form-control-lg" />
                                
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-4">
                            <label className="form-label text-secondary text-uppercase" for="form1Example23">Password</label>
                                <input type="password"name="password" id="form1Example23" className="form-control form-control-lg" />
                                
                            </div>

                            <div className="d-flex justify-content-around align-items-center mb-4">
                                {/* <!-- Checkbox --> */}
                                {/* <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="form1Example3"
                                        onChange
                                    />
                                    <label className="form-check-label" for="form1Example3"> Remember me </label>
                                </div> */}
                                <a className ="text-secondary text-uppercase" href="/Login">Login</a>
                            </div>

                            {/* <!-- Submit button --> */}
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Sign up</button>
                         


                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default SignUp;
