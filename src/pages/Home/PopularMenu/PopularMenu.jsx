import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12f">
      <SectionTitle heading="FROM OUR MENU" subHeading="Check it out" />
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 mt-4 mx-auto block">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
