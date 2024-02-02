import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="container mt-5">
            <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#1c2331" }}>
                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3 p-4">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h4 className="text-uppercase fw-bold">My TextUtils</h4>
                                <p>
                                    Here you can use rows and columns to organize your footer
                                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h4 className="text-uppercase fw-bold">Products</h4>
                                <p>Convert To UpperCase</p>
                                <p>Convert To LowerCase</p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h4 className="text-uppercase fw-bold">Useful links</h4>
                                <p><Link to="/" className="navbar-brand text-white">Home</Link></p>
                                <p><Link to="/about" className="navbar-brand text-white">About</Link></p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h4 className="text-uppercase fw-bold">Contact</h4>
                                <p>Author</p>
                                <p></p>
                            </div>

                        </div>

                    </div>
                </section>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <Link className="navbar-brand text-white" to="/"> My-TextUtils.com</Link>
                </div>
            </footer>
        </div>
    )
}
