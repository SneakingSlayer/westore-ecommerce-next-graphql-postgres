import prisma from "../lib/prisma";
import jwtDecode from "jwt-decode";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export const resolvers = {
  Query: {
    auth: async (_parent: any, _args: any, context: any) => {
      try {
        const token = context.req.req.cookies.token || "";
        await jwt.verify(
          token,
          process.env.jwtSecret,
          (err: any, user: any) => {
            if (err) throw new Error("Invalid Token");
            return;
          }
        );

        return {
          username: "",
          password: "",
          token: token,
        };
      } catch (e) {
        console.log(e);
        return e;
      }
    },
    products: async (_parent: any, _args: any, context: any) => {
      const products = await context.prisma.product.findMany({
        include: {
          Category: true,
        },
      });

      return products;
    },
    latestProducts: async (_parent: any, _args: any, context: any) => {
      return await context.prisma.product.findMany({
        take: 9,
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
        include: {
          Category: true,
        },
      });
    },

    product: async (_parent: any, _args: any, context: any) => {
      try {
        const product = await context.prisma.product.findUnique({
          where: {
            id: _args.id,
          },
          include: {
            Category: true,
          },
        });
        if (!product) {
          throw new Error("Product not found.");
        }
        return product;
      } catch (e) {
        //console.log(e);
        return e;
      } finally {
        prisma.$disconnect();
      }
    },
    categories: async (_parent: any, _args: any, context: any) =>
      await context.prisma.category.findMany(),
    cart: async (_parent: any, _args: any, context: any) => {
      const { id }: any = jwtDecode(context.req.req.cookies.token || "");
      const cart = await context.prisma.cart.findMany({
        where: {
          userId: id,
        },
        include: {
          Product: {
            include: {
              Category: true,
            },
          },
        },
      });
      return cart;
    },
    search: async (_parent: any, _args: any, context: any) => {
      const result = await context.prisma.product.findMany({
        where: {
          name: {
            contains: _args.search,
            mode: "insensitive",
          },
        },
        include: {
          Category: true,
        },
      });
      console.log(result);
      return result;
    },
  },
  Mutation: {
    register: async (_parent: any, _args: any, context: any) => {
      try {
        const checkEmail = await context.prisma.user.findMany({
          where: {
            email: {
              equals: _args.email,
            },
          },
          select: {
            email: true,
          },
        });

        const checkUsername = await context.prisma.user.findMany({
          where: {
            username: {
              equals: _args.username,
            },
          },
          select: {
            username: true,
          },
        });

        if (checkUsername.length || checkEmail.length) {
          throw new Error("User already exists");
        }

        const hashPassword = await bcrypt.hashSync(_args.password, 10);

        const registerUser = await context.prisma.user.create({
          data: {
            firstname: _args.firstname,
            lastname: _args.lastname,
            username: _args.username,
            email: _args.email,
            password: hashPassword,
          },
        });
        return registerUser;
      } catch (e) {
        console.log(e);
        return e;
      } finally {
        prisma.$disconnect();
      }
    },
    login: async (_parent: any, _args: any, context: any) => {
      console.log(context);
      try {
        const checkUsername = await context.prisma.user.findUnique({
          where: {
            username: _args.username,
          },
        });

        if (!checkUsername) {
          throw new Error("Incorrect username.");
        }

        const checkPassword = await bcrypt.compareSync(
          _args.password,
          checkUsername.password
        );

        if (!checkPassword) {
          throw new Error("Incorrect password.");
        }

        const token = await jwt.sign(
          { id: checkUsername.id },
          process.env.jwtSecret,
          {
            expiresIn: "3d",
          }
        );

        await context.setCookies.push({
          name: "token",
          value: token,
          options: {
            maxAge: 60 * 60 * 24 * 3,
            expires: new Date(Date.now() + 60 * 60 * 24 * 3),
            httpOnly: true,
            path: "/",
            sameSite: "lax",
          },
        });

        return {
          username: checkUsername.username,
          password: checkUsername.password,
          token: token,
        };
      } catch (e) {
        console.log(e);
        return e;
      } finally {
        prisma.$disconnect();
      }
    },
    addToCart: async (_parent: any, _args: any, context: any) => {
      try {
        const { id }: any = jwtDecode(context.req.req.cookies.token || "");
        const productId = _args.productId;
        const quantity = _args.quantity || null;

        const findItem = await context.prisma.cart.findMany({
          where: {
            AND: [{ productId: _args.productId }, { userId: id }],
          },
        });

        if (findItem.length) {
          console.log(quantity);
          const updateCart = await context.prisma.cart.update({
            where: {
              id: findItem[0].id,
            },
            data: {
              quantity: (
                parseInt(findItem[0].quantity) +
                (quantity === null ? 1 : parseInt(quantity))
              ).toString(),
            },
          });

          return updateCart;

          return;
        }

        const addToCart = await context.prisma.cart.create({
          data: {
            userId: id,
            productId: productId,
            quantity: quantity === null ? "1" : quantity,
          },
        });
        return addToCart;
      } catch (e) {
        console.log(e);
        return e;
      }
    },
    deleteFromCart: async (_parent: any, _args: any, context: any) => {
      try {
        const { id }: any = jwtDecode(context.req.req.cookies.token || "");
        const productId = _args.productId;
        // const quantity = _args.quantity;
        const findFromCart = await context.prisma.cart.findUnique({
          where: {
            id: _args.cartId,
          },
        });
        console.log(findFromCart);
        if (!findFromCart) throw new Error("Item does not exist.");

        const deleteFromCart = await context.prisma.cart.delete({
          where: {
            id: findFromCart.id,
          },
        });

        return deleteFromCart;
      } catch (e) {
        console.log(e);
        return e;
      }
    },
  },
};
