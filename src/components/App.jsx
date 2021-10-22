import React from "react";
import Card from "./Card";
import emojis from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojis.map(emoji => {
          return (
            <Card
              emoji={emoji.emoji}
              ename={emoji.name}
              edisc={emoji.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
