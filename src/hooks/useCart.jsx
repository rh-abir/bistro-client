import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const useCart = () => {
  const { user } = useContext(AuthContext);

  const {
    isPending,
    data: cart = [],
    refetch,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user.email}`
      );
      return res.json();
    },
  });

  return [cart, isPending, refetch];
};

export default useCart;
