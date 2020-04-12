import * as React from 'react';
import { useEffect } from 'react';
import { getFacts } from 'store/selectors/facts';

import { Link } from 'react-router-dom';

export interface OwnProps {}

interface StateProps {
  clickCount: number;
}
     
interface DispatchProps {
  countClick: () => void
}
 
type Props = StateProps & DispatchProps & OwnProps;

export const Game = () => (
  <>
    <h1>This is a game extra route.</h1>
    <Link to="/">Back to home</Link>
  </>
);
