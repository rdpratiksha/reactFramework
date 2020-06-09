// import report actions
import { dataLoading, dataSuccess } from "./action";

const getUserData = () => async dispatch => {
  // start loading
  dispatch(dataLoading({ dataLoadingFlag: true }));

  const response = localStorage.getItem('userData')

  if (response) {
    // stop loading
    dispatch(dataLoading({ dataLoadingFlag: false }));

    dispatch(
      dataSuccess({
        userData: response
      })
    );
  } 

  //return reponse to check in component if required
  return response;
};

const createUser = () => async dispatch => {
  // start loading
  dispatch(dataLoading({ dataLoadingFlag: true }));

  const userData = {
    userName: "abc",
    password: "123"
  }

  localStorage.setItem('userData', userData)

  // if (userData) {
    // stop loading
    dispatch(dataLoading({ dataLoadingFlag: false }));

  //   dispatch(
  //     dataSuccess({
  //       userData: userData
  //     })
  //   );
  // } 

  //return reponse to check in component if required
  return userData;
};

export {
  getUserData,
  createUser
};
