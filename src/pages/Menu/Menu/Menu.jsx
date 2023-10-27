import { Helmet } from "react-helmet-async";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import menuImg from "../../../assets/menu/menu-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistor | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our menu"></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Dont't miss"
        heading="Today's offer"
      ></SectionTitle>
      {/* fooerd menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desert menu items  */}
      <MenuCategory
        items={desserts}
        title="Dessert"
        img={dessertImg}
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
      {/* sald menu items  */}
      <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
      <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
