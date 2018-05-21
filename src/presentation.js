// Import React
import React from "react";
import styled from "react-emotion";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Layout,
  Fit
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import {
  pointy,
  pointFree,
  imperative1,
  curry1,
  curry2,
  compose,
  fpselect
} from "./samples";

const CustomSlide = styled(Slide)`
  width: 1500px;
  max-width: 1500px;
`;
const Math = props => (
  <strong
    style={Object.assign({ color: "black", paddingRight: "8px" }, props.style)}
  >
    <i>{props.children}</i>
  </strong>
);

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            FP-ey Patterns in Ramda and React
          </Heading>
        </Slide>
        <Slide transition={["zoom", "slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Agenda
          </Heading>
          <List>
            <ListItem style={{ padding: "20px", fontSize: "1em" }}>
              We are going to look at a simple app which is initially built in
              an imperative way
            </ListItem>
            <ListItem style={{ padding: "20px", fontSize: "1em" }}>
              We will introduce FP-ish patterns and compare one with the other
              and discuss pros/cons
            </ListItem>
          </List>
        </Slide>
        <Slide
          bgColor="tertiary"
          transition={["zoom", "slide"]}
          maxWidth={1500}
        >
          <Heading
            size={2}
            fit
            caps
            lineHeight={1}
            textColor="primary"
            style={{ paddingBottom: "20px" }}
          >
            THE SELECTOR
          </Heading>
          <Layout
            fill
            style={{ paddingTop: "0px", justifyContent: "space-evenly" }}
          >
            <Fit style={{ flex: "0 0 65%" }}>
              <CodePane source={imperative1} fit lang="javascript" />
            </Fit>
            <Fit style={{ flex: "0 0 30%" }}>
              <List style={{ paddingLeft: "5%" }}>
                <ListItem style={{ padding: "10px", fontSize: "16px" }}>
                  This is the logic that basically iterates through the items
                  and based on the type prop returns only the items applicable
                </ListItem>
                <ListItem style={{ padding: "10px", fontSize: "16px" }}>
                  If you notice the logic is pretty mingled up, it checks if the
                  item is active/not active, the type etc etc. Lets say tommorow
                  you need to get all the active elements what to do? another
                  function which iterates through elements again?
                </ListItem>
                <ListItem style={{ padding: "10px", fontSize: "16px" }}>
                  Can we do better, lets see
                </ListItem>
              </List>
            </Fit>
          </Layout>
        </Slide>
        <Slide transition={["zoom", "slide"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Lets make it point free
          </Heading>
          <Text padding={20} textSize={18}>
            Before looking at the actual code we will cover few basics based on
            which we will be refactoring our code
          </Text>
          <CodePane
            source={pointy}
            style={{ paddingTop: "20px" }}
            lang="javascript"
          />
          <Text padding={20} textSize={20}>
            Can you spot the extra function above?
          </Text>
        </Slide>
        <Slide
          transition={["zoom", "slide"]}
          bgColor="tertiary"
          textColor="primary"
        >
          <Heading size={6} textColor="primary" caps>
            Lets make it point free
          </Heading>
          <Text padding={20} textSize={18}>
            Idea is to think of functions outside of data itself
          </Text>
          <CodePane
            source={pointFree}
            style={{ paddingTop: "20px" }}
            lang="javascript"
          />
        </Slide>
        <Slide
          transition={["zoom", "slide"]}
          bgColor="tertiary"
          textColor="primary"
        >
          <Heading size={6} textColor="primary" caps>
            Currying
          </Heading>
          <Text padding={20} textSize={18}>
            Here you basically keep returning functions which wait for the next
            argument and when you pass all the arguments you see the final value
          </Text>
          <Text padding={20} textSize={18}>
            Lets look at a simple example:
          </Text>
          <CodePane
            source={curry1}
            style={{ paddingTop: "20px" }}
            lang="javascript"
          />
        </Slide>
        <Slide
          transition={["zoom", "slide"]}
          bgColor="tertiary"
          textColor="primary"
        >
          <Heading
            size={6}
            textColor="primary"
            caps
            style={{ paddingBottom: "80px" }}
          >
            What was the point of currying, it helps us be point free :-)
          </Heading>
          <CodePane theme="dark" source={curry2} lang="javascript" />
          <Text textSize={16} textColor="primary" padding={20}>
            PS : Its named after a logician named Haskell Curry :-D
          </Text>
        </Slide>
        <Slide
          transition={["zoom", "slide"]}
          bgColor="tertiary"
          textColor="primary"
        >
          <Heading
            size={6}
            textColor="primary"
            caps
            style={{ paddingBottom: "80px" }}
          >
            Composing functions like music
          </Heading>
          <Text textSize={20} textColor="primary" padding={10}>
            In math if <Math>f</Math>
            is a function and <Math>g</Math> is another function then composing
            them means <Math>f (g (x))</Math>
          </Text>
          <Text textSize={20} textColor="primary" padding={20}>
            So how does it help in programming? so if you notice its basically
            passing the result of the first function to the second function
            basically it's <Math>piping</Math> it through. So in essence you can
            use it to create a <Math>pipeline</Math> of functions.
          </Text>
          <CodePane theme="dark" source={compose} lang="javascript" />
          <Text textSize={16} textColor="primary" padding={20}>
            PS : Compose goes right to left but its pretty easy to create
            something similar which goes left to right its called{" "}
            <Math>pipe</Math>
          </Text>
        </Slide>
        <Slide
          transition={["zoom", "slide"]}
          maxWidth={1500}
          width={1500}
          bgColor="tertiary"
          textColor="primary"
        >
          <Heading
            size={6}
            textColor="primary"
            caps
            style={{ paddingBottom: "20px" }}
          >
            Lets bring in Ramda
          </Heading>
          <Text textSize={20} textColor="primary" padding={10}>
            Ramda is a JS library that exposes a bunch of utility functions
            which are curried by default and also some glueing utilities like
            compose and pipe as we saw earlier
          </Text>
          <Text textSize={20} textColor="primary" padding={20}>
            So lets see how we can use Ramda and things we learned just now to
            make the initial example better.
          </Text>
        </Slide>
        <Slide
          transition={["zoom", "slide"]}
          maxWidth={1500}
          width={1500}
          bgColor="tertiary"
          textColor="primary"
        >
          <Text padding={10} textColor="primary">Before:</Text>
          <CodePane source={imperative1} fit lang="javascript" />
          <Text padding={10} textColor="primary">After:</Text>
          <CodePane source={fpselect} fit lang="javascript" />
        </Slide>
      </Deck>
    );
  }
}
