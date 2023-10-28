import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "./pages/Banner";
// import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
// import Feature from "../../components/Feature/Feature";
// import ToursPackage from "../../components/ToursPackage/ToursPackage";
// import HappyCustomers from "./../../components/HappyCustomers/HappyCustomers";

const Home = () => {
  // const [tours, setTours] = useState();
  // const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://shocking-cheateau-10764.herokuapp.com/active-tour-list")
      .then((result) => {
        if (result.data.length > 0) {
          setTours(result.data);
          setLoading(false); 
        }
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Banner />
    </div>
  );
};

export default Home;