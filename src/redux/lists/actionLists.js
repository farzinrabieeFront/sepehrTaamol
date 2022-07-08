import axios from "axios";

const fetchListsRequest = () => {
  return {
    type: "FETCH_LISTS_REQUEST",
  };
};
const fetchListsSuccess = (lists, pagination) => {
  return {
    type: "FETCH_LISTS_SUCCESS",
    payload: { lists, pagination },
  };
};

export const actionLists = (searchText, product) => {
  return (dispatch) => {
    dispatch(fetchListsRequest());

    axios
      .get(
        `https://fakestoreapi.com/products${
          searchText ? "/category/" + searchText : ""
        }${product ? "/" + product : ""}`
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch(fetchListsSuccess(response.data));
        }
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log("error", error);
      });
  };
};
