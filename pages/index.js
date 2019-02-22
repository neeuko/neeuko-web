import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { H1, H2 } from "../lib/typography";
import { Colors } from "../lib/colors";
import { TitleBody } from "../components/body-text";

const App = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      // add here scripts that need to be called on component will mount
    } else {
      // add here scripts that need to be called on component did update
    }
    // add here scripts that need to be called on component will unmount
    return () => {};
  });

  return (
    <Layout>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "calc(5% - 6pt)",
          width: "100%",
          height: "100%"
        }}
      >
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.blue,
            textAlign: "center"
          }}
        >
          <H2
            color="white"
            style={{
              position: "absolute",
              top: "40%",
              width: "100%"
            }}
          >
            ABOUT
          </H2>
        </div>
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.blue
          }}
        />
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.black,
            textAlign: "center"
          }}
        >
          <H2
            color="white"
            style={{
              position: "absolute",
              top: "40%",
              width: "100%"
            }}
          >
            OUR WORK
          </H2>
        </div>
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.black
          }}
        />
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.black
          }}
        />
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.blue
          }}
        />
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.grey
          }}
        />
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.blue
          }}
        />
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.grey,
            textAlign: "center"
          }}
        >
          <H2
            color="white"
            style={{
              position: "absolute",
              top: "40%",
              width: "100%"
            }}
          >
            FABLAB
          </H2>
        </div>
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.grey
          }}
        />
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.blue,
            textAlign: "center"
          }}
        >
          <H2
            color="white"
            style={{
              position: "absolute",
              top: "40%",
              width: "100%"
            }}
          >
            COMMUNITY PROGRAMS
          </H2>
        </div>
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.blue
          }}
        />
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.black
          }}
        />
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.black,
            textAlign: "center"
          }}
        >
          <H2
            color="white"
            style={{
              position: "absolute",
              top: "40%",
              width: "100%"
            }}
          >
            EDUCATION
          </H2>
        </div>
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.grey
          }}
        />
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.black
          }}
        />
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.black,
            textAlign: "center"
          }}
        >
          <H2
            color="white"
            style={{
              position: "absolute",
              top: "40%",
              width: "100%"
            }}
          >
            EVENTS
          </H2>
        </div>
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.blue
          }}
        />
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.black
          }}
        />
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.grey
          }}
        />
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.grey
          }}
        />
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.grey
          }}
        />
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.black
          }}
        />
        <div
          style={{
            position: "relative",
            width: "15%",
            height: "calc(25% - 2pt)",
            display: "inline-block",
            margin: "1pt",
            backgroundColor: Colors.red,
            textAlign: "center"
          }}
        >
          <H2
            color="white"
            style={{
              position: "absolute",
              top: "40%",
              width: "100%"
            }}
          >
            CONTACT
          </H2>
        </div>
      </div>
    </Layout>
  );
};

export default App;
