import * as React from 'react';
import { useEffect } from 'react';
import { getFacts } from 'store/selectors/facts';

import { useDispatch, useSelector } from 'react-redux';
import { FACTS_TYPES } from 'store/actions/facts';

export interface OwnProps {}

export const Game = (props: OwnProps) => {
  const dispatch = useDispatch();
  const facts = useSelector(getFacts);

  useEffect(() => {
    dispatch({ type: FACTS_TYPES.GET_FACTS });
  }, [dispatch]);

  return (
    <ul>
      {facts.map((fact) => <li>{fact.text}</li>)}
    </ul>
  );
};
