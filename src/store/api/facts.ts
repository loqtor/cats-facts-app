import { makeRequest } from "tools/util";

export const getFacts = () => makeRequest('https://cat-fact.herokuapp.com/facts');