import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../PopularMenu/Recommends";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistor | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <Contact />
      <Recommends />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
