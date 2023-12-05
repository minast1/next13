import { Cart, Prisma, Product } from "@prisma/client";
import React, { useEffect } from "react";
import CartItem from "./cartItem";
import SubTotal from "./subtotal";
//import useCartStore from "@/stores/cartStore";
import { getCartItems } from "@/app/actions";

export type cartItems =
  | ({
      products: Product[];
    } & { id: string; total: Prisma.Decimal })
  | null;

const CartContent = async () => {
  const userCart = await getCartItems();
  console.log(userCart?.total);
  //console.log(items);
  // useEffect(() => {
  //   if (items) {
  //     useCartStore.setState({ cartItems: items });
  //   }
  // }, [items]);
  // const userCart = useCartStore((state) => state.cartItems);
  // console.log(userCart?.products);
  return (
    <div className="w-full">
      {userCart?.products.map((el, idx) => (
        <CartItem key={el.id} {...el} />
      ))}

      <SubTotal total={userCart?.total} />
      {/* (
                    <div className="flex items-center flex-col justify-center h-full">
                      <svg
                        className="w-36 h-36 text-gray-00 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 21"
                      >
                        <path d="M15 14H7.78l-.5-2H16a1 1 0 0 0 .962-.726l.473-1.655A2.968 2.968 0 0 1 16 10a3 3 0 0 1-3-3 3 3 0 0 1-3-3 2.97 2.97 0 0 1 .184-1H4.77L4.175.745A1 1 0 0 0 3.208 0H1a1 1 0 0 0 0 2h1.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 10 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3Zm-8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        <path d="M19 3h-2V1a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V5h2a1 1 0 1 0 0-2Z" />
                      </svg>
      </div> */}
    </div>
  );
};

export default CartContent;
