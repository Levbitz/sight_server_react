import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h2 className="center red-text">About Us</h2>

          <GridContainer>
            <GridItem xs={12} sm={12} md={5}>
              <h3 className="center indigo-text">Read About Us </h3>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur fuga dicta et eius beatae dignissimos non ducimus
                illo quod aliquam.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur fuga dicta et eius beatae dignissimos non ducimus
                illo quod aliquam.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur fuga dicta et eius beatae dignissimos non ducimus
                illo quod aliquam.
              </p>
            </GridItem>
            <GridItem xs={12} sm={12} md={7}>
              <h3 className="center">
                <small>React Blogs</small>
              </h3>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Charity",

                    tabContent: (
                      <div className={classes.textCenter}>
                        <h3>Charity Programmes</h3>
                        <p>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. I will be the leader of a company
                          that ends up being worth billions of dollars, because
                          I got the answers. I understand culture. I am the
                          nucleus. I think that’s a responsibility that I have,
                          to push possibilities, to show people, this is the
                          level that things could be at.
                        </p>
                      </div>
                    ),
                  },
                  {
                    tabName: "Covid",

                    tabContent: (
                      <div className={classes.textCenter}>
                        <h3>News About Covid</h3>
                        <p>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. I will be the leader of a company
                          that ends up being worth billions of dollars, because
                          I got the answers. I understand culture. I am the
                          nucleus. I think that’s a responsibility that I have,
                          to push possibilities, to show people, this is the
                          level that things could be at.
                        </p>
                      </div>
                    ),
                  },
                  {
                    tabName: "Up Coming Events",

                    tabContent: (
                      <div className={classes.textCenter}>
                        <h3>Read About Our Upcoming Events</h3>
                        <p>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. I will be the leader of a company
                          that ends up being worth billions of dollars, because
                          I got the answers. I understand culture. I am the
                          nucleus. I think that’s a responsibility that I have,
                          to push possibilities, to show people, this is the
                          level that things could be at.
                        </p>
                      </div>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
