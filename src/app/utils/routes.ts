const BASE_ENDPOINT = "http://localhost:8081/api";

export default  {
  BASE_ENDPOINT,
  LOGIN : `${BASE_ENDPOINT}/auth/login`,
  SIGNUP : `${BASE_ENDPOINT}/auth/sign-up`,

  CREATE_POST : `${BASE_ENDPOINT}/post`,
  GET_ALL_POSTS : `${BASE_ENDPOINT}/posts`,
  GET_POST_BY_ID : `${BASE_ENDPOINT}/post`,
}

