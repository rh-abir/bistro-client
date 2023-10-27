import FoodCard from "../../../components/Sectiontitle/FoodCard/FoodCard";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const Recommends = () => {
  const [menu] = useMenu();
  const recommends = menu.slice(0, 3);
  console.log(recommends);
  return (
    <section className="my-20 py-10">
      <SectionTitle
        subHeading="Should Try"
        heading="chef recommends"
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-10">
        {recommends.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </section>
  );
};

export default Recommends;
