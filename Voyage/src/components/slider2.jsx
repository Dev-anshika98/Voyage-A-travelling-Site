import React from 'react';
import Slider from 'react-slick';
import './slider2.css'
import  banner from '../assets/banner.jpg'
import lotus from '../assets/lotus.png'
import taj from '../assets/taj.png'
import cityplace from '../assets/cityplace.png'
import chittorgard from '../assets/chittorgard.png'
import agrafort from '../assets/agrafort.png'
import akshardham from '../assets/akshardham.png'
import redfort from '../assets/redfort.png'
import quitumbmeenar from '../assets/quitumbmeenar.png'
import shanivarwada from '../assets/shanivarwada.png'
const cards = [
  {
    image: lotus,
    title: "Burgundy Flemming",
    subtitle: "Advertising",
  },
  {
    image: taj,
    title: "Nigel Nigel",
    subtitle: "Sound & Vision",
  },
  {
    image: cityplace,
    title: "Caspian Bellevedere",
    subtitle: "Accounting",
  },
  {
    image: chittorgard,
    title: "Caspian Bellevedere",
    subtitle: "Accounting",
  },
  {
    image: agrafort,
    title: "Caspian Bellevedere",
    subtitle: "Accounting",
  },
  {
    image: akshardham,
    title: "Caspian Bellevedere",
    subtitle: "Accounting",
  },
  {
    image: redfort,
    title: "Caspian Bellevedere",
    subtitle: "Accounting",
  },
  {
    image:quitumbmeenar ,
    title: "Caspian Bellevedere",
    subtitle: "Accounting",
  },
  {
    image: shanivarwada,
    title: "Caspian Bellevedere",
    subtitle: "Accounting",
  },
];

const Article = (props) => {
  const { image, title, subtitle } = props.data;
  return (
    <figure className="snip1584">
      <img src={image} alt={title} />
      <figcaption>
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
      </figcaption>
      <a href="#"></a>
    </figure>
  );
};

const News = (props) => {
  const data = props.data;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const newsTemplate = data.length > 0 ? (
    data.map((item, index) => (
      <div key={index}>
        <Article data={item} />
      </div>
    ))
  ) : (
    <p>Please add some cards</p>
  );

  return (
    // <div
    //   className="bg-cover bg-no-repeat bg-center h-screen py-36 bg-fixed"
    //   style={{
    //     backgroundImage: `url(${banner})`,
    //   }}
    // >
      <div className="news">
        <Slider {...settings}>{newsTemplate}</Slider>
        {/* <strong className={'news__count ' + (data.length > 0 ? '' : 'none')}>
        Total cards: {data.length}
      </strong> */}
      </div>
      // </div>
      );
};

const App = () => (
      <div className="app">
        <h3></h3>
        <News data={cards} />
      </div>
      );

      export default App;
