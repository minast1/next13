"use server";

import { cartItems } from "@/components/cartContent";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// const addToCart = async (productId: string) => {
//   const cartProducts = await prisma.cart.update({
//     where: {
//       id: "clp9vjenx0000bvhov98mn1e8",
//     },
//     data: {
//       products: {
//         connect: {
//           id: productId,
//         },
//       },
//     },
//     select: { products: true },
//   });
//   //Recompute the total of the cart
//   const total = cartProducts.products
//     .map((el) => el.qty * el.price.toNumber())
//     .reduce((a, b) => a + b);
//   await prisma.cart.update({
//     where: {
//       id: "clp9vjenx0000bvhov98mn1e8",
//     },
//     data: {
//       total: total,
//     },
//   });
//   revalidatePath(`/product/${productId}`, "page");
// };

// const removeFromCart = async (productId: string) => {
//   await prisma.cart.update({
//     where: {
//       id: "clp9vjenx0000bvhov98mn1e8",
//     },
//     data: {
//       products: {
//         update: {
//           where: { id: productId },
//           data: {
//             qty: 1,
//           },
//         },
//         disconnect: [{ id: productId }],
//       },
//     },
//   });
//   // revalidatePath("/");
// };

// const getCartItems = async (): Promise<cartItems> => {
//   return await prisma.cart.findFirst({
//     include: {
//       products: true,
//     },
//   });
// };
// const increamentProductItemQuantity = async (productId: string) => {
//   const cartProducts = await prisma.cart.findFirst({
//     include: {
//       products: true,
//     },
//   });
//   if (cartProducts) {
//     for (let index = 0; index < cartProducts.products.length; index++) {
//       const product = cartProducts.products[index];
//       if (product.id === productId) {
//         await prisma.product.update({
//           where: {
//             id: productId,
//           },
//           data: {
//             qty: {
//               increment: 1,
//             },
//           },
//         });
//         break;
//       }
//     }
//   }
//   revalidatePath("/");
// };

// const decreamentProductItemQuantity = async (productId: string) => {
//   const cartProducts = await prisma.cart.findFirst({
//     include: {
//       products: true,
//     },
//   });
//   if (cartProducts) {
//     for (let index = 0; index < cartProducts.products.length; index++) {
//       const product = cartProducts.products[index];
//       if (product.id === productId) {
//         await prisma.product.update({
//           where: {
//             id: productId,
//           },
//           data: {
//             qty: {
//               decrement: 1,
//             },
//           },
//         });
//         break;
//       }
//     }
//   }
//   revalidatePath("/");
// };

// export {
//   addToCart,
//   removeFromCart,
//   getCartItems,
//   increamentProductItemQuantity,
//   decreamentProductItemQuantity,
// };

export {};
