export const GET_FACTS = 'GET_FACTS';
export const GET_FACTS_SUCCESS = 'GET_FACTS_SUCCESS';
export const GET_FACTS_FAIL = 'GET_FACTS_FAIL';

export const FACTS_TYPES = {
  GET_FACTS,
  GET_FACTS_SUCCESS,
  GET_FACTS_FAIL,
};

export const getFacts = () => {
  return {
    type: GET_FACTS,
  };
};

export const getFactsSuccess = () => {
  return {
    type: GET_FACTS_SUCCESS,
  };
};

export const getFactsFail = () => {
  return {
    type: GET_FACTS_FAIL,
  };
};