import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const description =
    "The life of a ten-year-old girl is shattered by two drunken and remorseless young men. The mostly white town reacts with shock and horror at the inhuman crime. That is, until her black father acquires an assault rifle and takes matters into his hands. For ten days, as burning crosses and the crack of sniper fire spread through the streets of Clanton, the nation sits spellbound as young defense attorney Jake Brigance struggles to save his client's life, and then his own. In Canton, Mississippi, ten-year-old African American girl Tonya Hailey is abducted, raped, and beaten by two local neo-Confederates, Billy Ray Cobb and James Willard, while on her way home from getting groceries. The duo dump her in a nearby river after a failed attempt to hang her. Tonya survives, and the two men are arrested by Sheriff Ozzie Walls. Tonya's father, Carl Lee Hailey, contacts Jake Brigance, a white lawyer who previously defended his brother Lester. Brigance admits the possibility that the rapists will walk free. Carl Lee goes to the county courthouse and opens fire with an automatic rifle, killing both rapists and unintentionally wounding Deputy Dwayne Looney, whose leg is later amputated. Carl Lee is arrested and Brigance agrees to defend him. As the rape and subsequent revenge killing gain national media attention, district attorney Rufus Buckley decides to take the case in hopes of furthering his political career. He seeks the death penalty, and presiding Judge Omar Noose denies Brigance a change of venue to a more ethnically diverse county, meaning that Carl Lee will have an all-White jury. Brigance seeks help from his defense team: law student Ellen Roark, close friend Harry Rex Vonner, and former mentor and longtime activist Lucien Wilbanks, a once-great civil rights lawyer. Meanwhile, Billy Ray's brother, Freddie Lee Cobb, plans to avenge his brother's death by joining and enlisting the help of the Mississippi branch of the Ku Klux Klan and its Grand Dragon, Stump Sisson, to ensure Carl Lee's conviction and death sentence by any means necessary.";

  const imageURL =
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554303029i/32542.jpg";

  return (
    <div className="App">
      <Image whatever={imageURL} />
      <div className="content-wrapper">
        <div className="Property">
          <Title property1={"Time to to kill"} />
        </div>
        <DescriptionComponent description={description} />
      </div>
    </div>
  );
}

function Title(props) {
  return (
    <div>
      <h1>{props.property1}</h1>
    </div>
  );
}

class DescriptionComponent extends React.Component {
  render() {
    return <p style={{ border: "4px solid red" }}>{this.props.description}</p>;
  }
}

function Image(props) {
  return <img src={props.whatever} alt="" />;
}

export default App;
