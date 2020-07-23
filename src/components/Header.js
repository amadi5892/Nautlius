import React from 'react';

function Header() {


    return(
        <div>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="#">ISSUES</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">TOPICS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">BLOG</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" >NEWSLETTER</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" >LOGIN</a>
                </li>
            </ul>

            <div className="jumbotron jumbotron-fluid paralsec">
                <div className="container">
                    <p className="lead">THE NAUTLIUS SPOTLIGHT</p>
                    <h1 className="display-4">WHY THE LAWS OF PHYSICS ARE INEVITABLE</h1>
                    <button className="jumbo-btn">READ NOW</button>
                </div>
            </div>

        <div className="contianer">
            <div className="row">
                <div className="contianer-md-3">

                </div>
                <div className="container-md-9">

                </div>
            </div>
        </div>

        </div>
    )
}

export default Header;