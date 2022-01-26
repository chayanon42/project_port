import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
// import { AuthContext } from './Auth'
import { AuthContext } from '../components/Auth/Auth';
import firebaseConfig from '../Firebase/firebase'
import Navlog from '../components/Navber/Navlog'

const LogIn = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

        try {

            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);

        } catch(error) {
            alert(error);
        }
    }

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/Portfolio" />;
    }

    return (
        <><Navlog/>
           <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
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
                                <a className="text-secondary text-uppercase"href="/SignUp">Sign Up</a>
                            </div>

                            {/* <!-- Submit button --> */}
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
                         


                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default LogIn;