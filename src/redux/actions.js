export const GET_PROFILE = 'GET_PROFILE';
export const GET_POST = 'GET_POST';
export const GET_COMMENT = 'GET_COMMENT';
export const GET_ALBUM = 'GET_ALBUM';
export const GET_PHOTO = 'GET_PHOTO';

const PROF_API = 'https://jsonplaceholder.typicode.com/users/';
const POST_API = 'https://jsonplaceholder.typicode.com/posts/';
const COM_API = 'https://jsonplaceholder.typicode.com/comments';
const ALBUM_API = 'https://jsonplaceholder.typicode.com/albums';
const PHOTO_API = 'https://jsonplaceholder.typicode.com/photos';

export function getProfile() {
  try {
    return async dispatch => {
      const result = await fetch(PROF_API, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_PROFILE,
          payload: json,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
}

export function getPost() {
  try {
    return async dispatch => {
      const result = await fetch(POST_API, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_POST,
          payload: json,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
}

export function getComment() {
  try {
    return async dispatch => {
      const result = await fetch(COM_API, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_COMMENT,
          payload: json,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
}

export function getAlbum() {
  try {
    return async dispatch => {
      const result = await fetch(ALBUM_API, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_ALBUM,
          payload: json,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
}

export function getPhoto() {
  try {
    return async dispatch => {
      const result = await fetch(PHOTO_API, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_PHOTO,
          payload: json,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
}

