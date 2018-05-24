import React, { Fragment } from "react";
import { Slide, Text, CodePane, Image } from "spectacle";
import helper from "./helper.png";
import { css } from "react-emotion";
import { incrementState } from "./samples";

const flexStyles = css`
    display : flex;
    flex-flow : row wrap;
`

export default class Slide14 extends React.Component {
  render() {
    return (
      <Fragment>
        <Text padding={10} textColor="primary">
          So using that we can do something like this:
        </Text>
        <div className={flexStyles}>
            <CodePane source={incrementState} lang="javascript"/>
        </div>
        <Text padding={10} textColor="primary" textSize={16}>
            What we have done here is we have separated the state changes outside of the component (no this!)
            and the individual functions can now be easily tested by exporting it and passing a dummy object :) 
        </Text>
      </Fragment>
    );
  }
}
