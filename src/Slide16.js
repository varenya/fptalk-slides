import React, { Fragment } from "react";
import { Slide, Text, CodePane, Image, List, ListItem } from "spectacle";
import { css } from "react-emotion";
import { incrementState } from "./samples";

const flexStyles = css`
  display: flex;
  flex-flow: row wrap;
`;

export default class Slide16 extends React.Component {
  render() {
    return (
      <Fragment>
        <Text padding={10} textColor="primary">
          POINTS TO CONSIDER, BEFORE USING THESE PATTERNS:
        </Text>
        <List>
          <ListItem style={{ paddingBottom: "10px", fontSize: "20px" }}>
            Be empathetic to your fellow devs and future maintainers i.e. don't
            make your code full blown Ramda from day 1
          </ListItem>
          <ListItem style={{ paddingBottom: "10px", fontSize: "20px" }}>
            Start small and gradually adapt, start by pairing with someone on
            your team and work on a feature using these patterns
          </ListItem>
          <ListItem style={{ paddingBottom: "10px", fontSize: "20px" }}>
            Looking at code like this and understanding few basic concepts will
            help you understand the code I have written but in order to come up
            with it in the first place takes some practice :-), so don't give up
            that easy!
          </ListItem>
          <ListItem style={{ paddingBottom: "10px", fontSize: "20px" }}>
            Its not just the way you code but its the way you think that
            actually needs to change to be able to come up with such code which
            is hard
          </ListItem>
          <ListItem style={{ paddingBottom: "10px", fontSize: "20px" }}>
            If you like what you see consider using a compile-to-js languages
            like reasonml which do a lot of optimization at compile time and
            has 100% type safety
          </ListItem>
        </List>
      </Fragment>
    );
  }
}
