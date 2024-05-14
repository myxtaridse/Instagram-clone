import { api } from "../../api";
import {
  getPhotosFailed,
  getPhotosStarted,
  getPhotosSuccess,
  setPhotosTotal,
} from "../actionCreators/photos";

export const getPhotos = (page = 1) => {
  return async (dispatch, getState) => {
    const store = getState();
    console.log(store.photos.photos);
    try {
      if (page === 1) {
        dispatch(getPhotosStarted);
      }

      const response = await api.photos.getPhotos({
        params: {
          _page: page,
          _limit: 5,
        },
      });
      // для получения всех постов стоит лимит на 5
      // дабы получить количество всех постов -> 17
      //console.log(response.headers["x-total-count"]);
      if (page === 1) {
        dispatch(setPhotosTotal(response.headers["x-total-count"]));
        dispatch(getPhotosSuccess([...response.data]));
      } else {
        // dispatch(setPhotosTotal(response.headers["x-total-count"]));
        dispatch(getPhotosSuccess([...store.photos.photos, ...response.data]));
      }
    } catch (error) {
      dispatch(getPhotosFailed(error, "ошибка"));
    }
  };
};
