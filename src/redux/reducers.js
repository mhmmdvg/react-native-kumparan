import {GET_ALBUM, GET_COMMENT, GET_PHOTO, GET_POST, GET_PROFILE} from './actions';

const initialState = {
  user: [],
  post: [],
  comment: [],
  album: [],
  photo: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {...state, user: action.payload};
    case GET_POST:
      return {...state, post: action.payload};
    case GET_COMMENT:
      return {...state, comment: action.payload};
    case GET_ALBUM:
      return {...state, album: action.payload};
    case GET_PHOTO:
      return {...state, photo: action.payload};
    default:
      return state;
  }
};

export default reducer;
