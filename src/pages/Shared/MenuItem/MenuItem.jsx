const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex space-x-2">
      <img
        className="w-[100px] "
        style={{ borderRadius: "0px 200px 200px 200px" }}
        src={image}
        alt=""
      />
      <div>
        <h2 className="uppercase">{name}-------------</h2>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItem;
