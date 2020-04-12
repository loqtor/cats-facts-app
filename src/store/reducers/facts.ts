import { FACTS_TYPES } from "../actions/facts";

interface Fact {
  text: string;
}

export type FactsState = {
  facts: Fact[];
  isLoading: boolean;
  hasError: boolean;
  error: any;
}

const initialState: FactsState = {
  facts: [],
  isLoading: false,
  hasError: false,
  error: null,
};

export const catFacts = (state = initialState, action: { payload: any, type: any}) => {
  switch (action.type) {
    case FACTS_TYPES.GET_FACTS: 
      return {
        ...state,
        isLoading: true,
      };

    case FACTS_TYPES.GET_FACTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        facts: action.payload,
      };
    
    case FACTS_TYPES.GET_FACTS_FAIL:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload.error,
      };
    default:
      return state;
  }
};  