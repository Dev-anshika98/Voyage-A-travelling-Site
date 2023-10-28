import React from "react";
import "./reviews.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
// import { FaWhatsappSquare } from "react-icons/fa";

import Slider from "react-slick";

export default function Carousel() {

    // setting for the carousel
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <div className="carousel">
                <h1>Our Happy Customers</h1>

                <Slider {...settings}>
                    <div className="boxes">


                        <div className="userInfo">
                            <div className="userimg">
                                <FaUserCircle />
                            </div>
                            <h3>Amit Dhapa</h3>
                        </div>
                        <div className="reviews">
                            <p>
                                Ambuvians play an important role in the field of healthcare for the benefit of impoverished individuals.
                            </p>
                        </div>
                        <div className="rating">
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                        </div>
                    </div>
                    <div className="boxes">


                        <div className="userInfo">
                            <div className="userimg">
                                <FaUserCircle />
                            </div>
                            <h3>Rohit Singh</h3>
                        </div>
                        <div className="reviews">
                            <p>
                                Ambuvians are truly making a significant contribution to humanity.
                            </p>
                        </div>
                        <div className="rating">
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                        </div>
                    </div>
                    <div className="boxes">


                        <div className="userInfo">
                            <div className="userimg">
                                <FaUserCircle />
                            </div>
                            <h3>Akshay Malik</h3>
                        </div>
                        <div className="reviews">
                            <p>
                                Ambuvians have created a platform where problems are met with quick solutions.
                            </p>
                        </div>
                        <div className="rating">
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                        </div>
                    </div>
                    <div className="boxes">


                        <div className="userInfo">
                            <div className="userimg">
                                <FaUserCircle />
                            </div>
                            <h3>Ajay Goel</h3>
                        </div>
                        <div className="reviews">
                            <p>
                                Ambuvians is my favorite healthcare platform.
                            </p>
                        </div>
                        <div className="rating">
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                        </div>
                    </div>
                    <div className="boxes">


                        <div className="userInfo">
                            <div className="userimg">
                                <FaUserCircle />
                            </div>
                            <h3>Ravinder Goel</h3>
                        </div>
                        <div className="reviews">
                            <p>
                                Ambuvians bridges the gap between the government and the general public, especially those who are less fortunate.
                            </p>
                        </div>
                        <div className="rating">
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                        </div>
                    </div>
                    <div className="boxes">


                        <div className="userInfo">
                            <div className="userimg">
                                <FaUserCircle />
                            </div>
                            <h3>Kritika Singhal</h3>
                        </div>
                        <div className="reviews">
                            <p>
                                Ambuvians' dedication to improving healthcare accessibility for underserved communities is truly commendable.
                            </p>
                        </div>
                        <div className="rating">
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                            <div className="ratingDiv">
                                <FaStar />
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    );
}