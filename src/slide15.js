import React, { Fragment } from "react";
import { Slide, Text, CodePane, Image, Link } from "spectacle";
import helper from "./helper.png";
import { css } from "react-emotion";
import { actions } from "./samples";

const flexStyles = css`
  display: flex;
  flex-flow: row wrap;
`;

export default class Slide14 extends React.Component {
  render() {
    return (
      <Fragment>
        <Text padding={10} textColor="primary">
          We can push this further to implement a reducer pattern!
        </Text>
        <div className={flexStyles}>
          <CodePane source={actions} lang="javascript" />
        </div>
        <div>
          <Link
            href="https://twitter.com/jaredpalmer/status/905170062679662594"
            textSize={16}
            fill
          >
            Reducer Pattern in React
          </Link>
        </div>
      </Fragment>
    );
  }
}
