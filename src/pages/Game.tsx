import * as React from 'react';

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

export const Game = class Game extends React.Component<Props, {}> {
  render() {
    const { clickCount, countClick } = this.props;

    return (
      <>
        <h1>This is a game extra route.</h1>
        <p>{clickCount} times clicked.</p>
        <button onClick={countClick}>Click to count!</button>
        <Link to="/">Back to home</Link>
      </>
    )
  }
}
