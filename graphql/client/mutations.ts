import { gql } from "@apollo/client";

export const SIGN_IN = (username: String, password: String) => {
  return gql`
mutation Mutation {
  login(
    username: "${username}"
    password: "${password}"

  ) {
    username
    password
    token
  }
}
`;
};

export const SIGN_UP = (
  email: String,
  lastname: String,
  firstname: String,
  username: String,
  password: String
) => {
  return gql`
  mutation Mutation {
    register(
      email: "${email}"
      lastname: "${lastname}"
      firstname: "${firstname}"
      username: "${username}"
      password: "${password}"
    ) {
      email
      firstname
      lastname
      username
      password
    }
  }
`;
};

export const ADD_TO_CART = (data: any, count: any) => {
  return gql`
    mutation Mutation {
      addToCart(productId: "${
        !data ? "" : data.product.id
      }", quantity: "${count}") {
        productId
        quantity
      }
    }
  `;
};

export const DELETE_FROM_CART = (id: String) => {
  return gql`
    mutation DeleteFromCart {
      deleteFromCart(cartId: "${id}") {
        cartId
      }
    }
    `;
};
