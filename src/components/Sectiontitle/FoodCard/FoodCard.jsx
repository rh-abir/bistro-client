import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddTocart = (item) => {
    console.log(item);
    if (user) {
      fetch("http://localhost:5000/carts", {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            console.log(data);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-5 mt-5 px-4">
        {" "}
        ${price}
      </p>
      <div className="card-body  flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddTocart(item)}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 border-orange-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
