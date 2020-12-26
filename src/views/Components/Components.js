import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import SectionCarousel from "./Sections/SectionCarousel.js";

import styles from "assets/jss/material-kit-react/views/components.js";

//sections
import About from "./Sections/About";
import Cause from "./Sections/Cause";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Logo"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/Images/banner4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Lorem, ipsum dolor.</h1>
                <h3 className={classes.subtitle}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  aliquam veritatis ab? Quia, culpa dolores reiciendis odit
                  minus at repellendus repellat dolorem esse placeat. Suscipit
                  culpa doloribus sed quaerat id.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <About />
      </div>
      <Cause />

      <SectionCarousel />
      <Footer />
    </div>
  );
}
