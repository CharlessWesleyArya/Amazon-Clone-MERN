import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          {/* Product */}
          <Product
            id="123456"
            title="The lean Startup"
            price={299.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="123123"
            title="kenwood kMix stand mixer for Baking,Stylish Kitchen
          Mixer with K-beater"
            price={500.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450.jpg"
          />

          {/* Product */}
        </div>
        <div className="home_row">
          {/* Product */}
          <Product
            id="3"
            title="SamSung LC6798 49 Curved LED Gaming Monitor"
            price={199.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466.jpg"
          />
          {/* Product */}
          <Product
            id="4"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={5000}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2s"
          />
          {/* Product */}
          <Product
            id="5"
            title="New Apple Ipad Pro (12.9-inch,Wi-fi,128GB) - Silver (4th Generation)"
            price={598.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home_row">
          {/* Product */}
          <Product
            id="6"
            title="Samsung LC4453RN 49' curved LED Gaming Monitor - Super Ultra Wide dual WQHD 5120 x 1440"
            price={102900.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
