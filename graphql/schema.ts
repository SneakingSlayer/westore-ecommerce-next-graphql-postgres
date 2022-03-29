import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Categ {
    id: String
    name: String
    createdAt: String
    updatedAt: String
  }

  type Product {
    id: String
    name: String
    price: String
    description: String
    quantity: String
    image: String
    Category: Categ!
  }

  type Category {
    id: String
    name: String
  }

  type Register {
    email: String
    firstname: String
    lastname: String
    username: String
    password: String
  }

  type Login {
    username: String
    password: String
    token: String
  }

  type AddToCart {
    quantity: String
    userId: String
    productId: String
    token: String
  }

  type DeleteFromCart {
    userId: String
    cartId: String
  }

  type Cart {
    id: String
    userId: String
    Product: Product!
    quantity: String
    token: String
  }

  type Query {
    auth: Login!
    products: [Product]!
    categories: [Category]!
    product(id: String): Product!
    cart(userId: String, token: String): [Cart]!
  }

  type Mutation {
    register(
      email: String
      firstname: String
      lastname: String
      password: String
      username: String
    ): Register!

    login(password: String, username: String, token: String): Login!

    addToCart(
      userId: String
      productId: String
      token: String
      quantity: String
    ): AddToCart!

    deleteFromCart(userId: String, cartId: String): DeleteFromCart!
  }
`;

/**import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./types";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(
      process.cwd(),
      "node_modules",
      "@types",
      "nexus-typegen",
      "index.d.ts"
    ),
    schema: join(process.cwd(), "graphql", "schema.graphql"),
  },
  contextType: {
    export: "Context",
    module: join(process.cwd(), "graphql", "context.ts"),
  },
});*/
