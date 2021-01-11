import React from "react";
import "./Styles.css";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

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
    hover: {color: "rgb(245, 2, 65)"},
  };
let show = {
   display : "auto"
}
  
  
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

const Data = [
    {
        name: "",
        state:"",
      },
  {
    name: "Simone Simons",
    state:"",
  },
  {
    name: "John Patrucci",
    state:"",
  },
  {
    name: "Chuck Shuldinger",
    state:"",
  },
  {
    name: "Synyster Gates",
    state:"",
  },
  {
    name: "Sharon del Adel",
    state:"",
  },
  {
    name: "Mario Duplantier",
    state:"",
  },
  {
    name: "Maynard James Keenan",
    state:"",
  },
  {
    name: "Alissa White-Gluz",
    state:"",
  },
  {
    name: "Tobias Sammet",
    state:"",
  },
  {
    name: "Ozzy Osbourne",
    state:"",
  },
  {
    name: "Ronnie James Dio",
    state:"",
  },
  {
    name: "Amy Lee",
    state:"",
  },
  {
    name: "Dave Grohl",
    state:"",
  },
  {
    name: "Dave Mustaine",
    state:"",
  },
  {
    name: "James Hatfield",
    state:"",
  },
  {
    name: "Tatiana Shmayluk",
    state:"",
  },
  {
    name: "Mikael Akerfeldt",
    state:"",
  },
  {
    name: "Freddy Mercury",
    state:"",
  },
  {
    name: "Corey Taylor",
    state:"",
  },
  {
    name: "",
    state:"",
  },
];

function Names() {
  const [begin, setbegin] = useState(false);
  const [end, setend] = useState(false);
  const [person,setperson] = useState([])
  const [thisperson,setthisperson] = useState(0)
  const [filter,setfilter] = useState(true)
  const classes = useStyles();
  const max=Data.length-3
  function Click(value){
      setperson([
          {
              name : Data[thisperson].name,
              state : value
          },
          ...person
      ])
      return setthisperson(thisperson +1)
  }
  function Stop(){
      if (thisperson>max)
      setend(true)
  }
  function filterer(per){
      return ((filter === true) || (filter === per.state ))
  }
  return (
    <div>
      <div style ={end ? {display : "none"} : {}}>
      <div ><div style={top}>
        <div style={frame}>
          
            <div style ={begin ? {display : "none"} : {}}><Button
              style={linkStyle}
              onClick={() => {
                setbegin(true);
                show.display="none"
                if (thisperson===0){Click("")}
              }}
            >
              Commencer
            </Button></div>
          <div ><h1 style={{textAlign:"center",marginTop:"3vh",color:"white"}}>{ Data[thisperson].name }</h1></div>
        </div>
      </div></div>
      <div style={{ textAlign: "center", height: "220px" }} onClick={() => Stop()}>
        <Button disabled={!begin || end} variant="secondary" style={but1} onClick={() => Data[thisperson] ? Click("Present"):null} >
          Present
        </Button>
        <Button disabled={!begin || end} variant="secondary" style={but2} onClick={() => Data[thisperson] ? Click("Excusé"):null}>
          Excusé
        </Button>
        <Button disabled={!begin || end} variant="secondary" style={but3} onClick={() => Data[thisperson] ? Click("Excusé"):null}>
          Absent
        </Button>
      </div></div>
      <div className={classes.root} style={{backroundColor: "black"}}>
        <ButtonGroup 
          color="secondary"
          aria-label="outlined secondary button group"
        >
          <Button style={buttonStyle} onClick={() => setfilter(true)} >TOUS</Button>
          <Button style={buttonStyle} onClick={() => setfilter("Absent")}>ABSCENT</Button>
          <Button style={buttonStyle} onClick={() => setfilter("Present")}>PRESENT</Button>
        </ButtonGroup>
      </div>
      <div>
        
      </div>
      <div>
      {person.filter((per)=>filterer(per)).map( (p) => <h3{...p}   /> )}
      </div>


    </div>
  );
}

export default Names;
