import React, { Fragment } from "react";
import { Slide, Text, CodePane, Image, List, ListItem, Link } from "spectacle";
import { css } from "react-emotion";
import { incrementState } from "./samples";

export default class Slide16 extends React.Component {
  render() {
    return (
      <Fragment>
        <Text padding={10} textColor="primary">
          References:
        </Text>
        <List>
          <ListItem style={{ paddingBottom: "10px", fontSize: "20px" }}>
            Great guide for learning more about basic functional patterns :{" "}
            {"    "}
            <Link
              href="https://drboolean.gitbooks.io/mostly-adequate-guide/content/"
              style={{ textDecoration: "underline", fontStyle: "italic" }}
              textColor="secondary"
            >
              Dr Boolean's Book
            </Link>
          </ListItem>
          <ListItem style={{ paddingBottom: "10px", fontSize: "20px" }}>
            More on state machines and its uses in React/UI :{" "}
            {"    "}
            <Link
              href="http://davidkpiano.github.io/xstate/docs/#/guides/complete"
              style={{ textDecoration: "underline", fontStyle: "italic" }}
              textColor="secondary"
            >
                XState - Model Finite State Machines in JS
            </Link>
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
            like reasonml which do a lot of optimization at compile time and has
            100% type safety
          </ListItem>
        </List>
      </Fragment>
    );
  }
}
