import { gql } from "@apollo/client";

export const AUTHENTICATION = gql`
  query Auth {
    auth {
      token
    }
    cart {
      id
    }
  }
`;

export const GET_LATEST_PRODUCTS = gql`
  query LatestProducts {
    latestProducts {
      name
      id
      price
      description
      quantity
      image
      Category {
        name
      }
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  query Query {
    products {
      id
      name
      price
      description
      quantity
      image
      Category {
        name
      }
    }
  }
`;

export const GET_ALL_CART_ITEMS = gql`
  query Cart {
    auth {
      token
    }
    cart {
      id
      quantity
      Product {
        id
        name
        price
        description
        quantity
        image
        Category {
          name
        }
      }
    }
  }
`;

export const GET_PRODUCT = (id: String) => {
  return gql`
    query Product {
      product(id: "${id}") {
        id
        name
        price
        description
        quantity
        image
        Category {
          name
        }
      }
    }
  `;
};

export const SEARCH_PRODUCT = (search: String) => {
  return gql`
query Search {
  search(search: "${search}") {
    id
    name
    price
    description
    quantity
    image
    Category {
      name
    }
  }
}
`;
};
