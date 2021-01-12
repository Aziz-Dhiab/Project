import React from "react";
import "./Styles.css";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Data from "./Data.js"

let but1 = {
  borderRadius: "5px",
  padding: "32px 16px",
  margin: "80px",
  height: "100px",
  width: "120px",
  color: "white",
  backgroundColor: "rgb(115, 173, 0)",
};
let but2 = {
  borderRadius: "5px",
  padding: "32px 16px",
  margin: "80px",
  height: "100px",
  width: "120px",
  color: "white",
  backgroundColor: "rgb(255, 136, 0)",
};
let but3 = {
  borderRadius: "5px",
  padding: "32px 16px",
  margin: "80px",
  height: "100px",
  width: "120px",
  color: "white",
  backgroundColor: "rgb(204, 0, 0)",
};

let linkStyle = {
  color: "rgb(205, 2, 65)",
  hover: { color: "rgb(245, 2, 65)" },
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "2.7%",
};

let top = {
  width: "100%",
  height: "160px",
  position: "relative",
  padding: "30px",
};

let frame = {
  width: "1050px",
  height: "185px",
  borderStyle: "solid",
  borderRadius: "25px",
  marginTop: "30px",
  marginBottom: "30px",
  borderTopWidth: "3px",
  borderRightWidth: "3px",
  borderLeftWidth: "3px",
  borderBottomWidth: "3px",
  paddingTop: "30px",
  margin: "auto",
  borderColor: "white",
};
let buttonStyle = {
  color: "rgb(205, 2, 65)",
  hover: { color: "rgb(245, 2, 65)" },
};
let show = {
  display: "auto",
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));



function Names() {
  const [begin, setbegin] = useState(false);
  const [end, setend] = useState(false);
  const [thisperson, setthisperson] = useState(0);
  const [present, setpresent] = useState([]);
  const [abscent, setabscent] = useState([]);
  const [tous, settous] = useState([]);
  const [filternames, setfilternames] = useState("tous");
  const classes = useStyles();
  const max = Data.length - 2;

  function Stop() {
    if (thisperson >= max) setend(true);
  }
  function clicker(val) {
    if (val === "present") {
      Data[thisperson].state = "present";
      setpresent([...present, Data[thisperson]]);
    } else if (val === "absent") {
      Data[thisperson].state = "absent";
      setabscent([...abscent, Data[thisperson]]);
    } else {
      Data[thisperson].state = "excusé";
    }
    settous([...tous, Data[thisperson]]);
    return setthisperson(thisperson + 1);
  }
  return (
    <div>
      <div style={end ? { display: "none" } : {}}>
        <div>
          <div style={top}>
            <div style={frame}>
              <div style={begin ? { display: "none" } : {}}>
                <Button
                  style={linkStyle}
                  onClick={() => {
                    setbegin(true);
                    show.display = "none";
                    setthisperson(thisperson+1);
                  }}
                >
                  Commencer
                </Button>
              </div>
              <div>
                <h1
                  style={{
                    textAlign: "center",
                    marginTop: "3vh",
                    color: "white",
                  }}
                >
                  {Data[thisperson].name}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ textAlign: "center", height: "220px" }}
          onClick={() => Stop()}
        >
          <Button
            disabled={!begin || end}
            variant="secondary"
            style={but1}
            onClick={() => clicker("present")}
          >
            Present
          </Button>
          <Button
            disabled={!begin || end}
            variant="secondary"
            style={but2}
            onClick={() => clicker("excusé")}
          >
            Excusé
          </Button>
          <Button
            disabled={!begin || end}
            variant="secondary"
            style={but3}
            onClick={() => clicker("absent")}
          >
            Absent
          </Button>
        </div>
      </div>
      <div className={classes.root} style={{ backroundColor: "black" }}>
        <ButtonGroup
          color="secondary"
          aria-label="outlined secondary button group"
        >
          <Button style={buttonStyle} onClick={() => setfilternames("tous")}>
            TOUS
          </Button>
          <Button style={buttonStyle} onClick={() => setfilternames("absent")}>
            ABSCENT
          </Button>
          <Button style={buttonStyle} onClick={() => setfilternames("present")}>
            PRESENT
          </Button>
        </ButtonGroup>
      </div>
      <div></div>
      <div>
        {filternames === "tous"
          ? tous.map((n) => (
              <div className="box">
                <div className="text">{n.name}</div>
                <button className="butt">{n.state} </button>
              </div>
            ))
          : null}
        {filternames === "present"
          ? present.map((n) => (
              <div className="box">
                <div className="text">{n.name}</div>
                <button className="butt">{n.state} </button>
              </div>
            ))
          : null}
        {filternames === "absent"
          ? abscent.map((n) => (
              <div className="box">
                <div className="text">{n.name}</div>
                <button className="butt">{n.state} </button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Names;
