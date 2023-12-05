import {
  decreamentProductItemQuantity,
  increamentProductItemQuantity,
  removeFromCart,
} from "@/app/actions";
import { cartItems } from "@/components/cartContent";
import { type } from "os";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface CartState {
  cartItems: cartItems | null;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
}

const useCartStore = create<CartState>()(
  immer((set) => ({
    cartItems: null,
    removeFromCart: async (productId) => {
      await removeFromCart(productId);
      set((state) => {
        const indexOfItemToRemove = state.cartItems?.products.findIndex(
          (el) => el.id === productId
        );
        if (typeof indexOfItemToRemove !== "undefined") {
          state.cartItems?.products.splice(indexOfItemToRemove, 1);
        }
      });
    },
    increaseQuantity: async (productId) => {
      await increamentProductItemQuantity(productId);
      set((state) => {
        const productToUpdate = state.cartItems?.products.find(
          (el) => el.id === productId
        );
        if (typeof productToUpdate !== "undefined") {
          productToUpdate.qty += 1;
        }
      });
    },

    decreaseQuantity: async (productId) => {
      await decreamentProductItemQuantity(productId);
      set((state) => {
        const productToUpdate = state.cartItems?.products.find(
          (el) => el.id === productId
        );
        if (typeof productToUpdate !== "undefined") {
          productToUpdate.qty -= 1;
        }
      });
    },
  }))
);

export default useCartStore;
