import React from "react";

function Food({movieTitle}) {
    return <div>Title : {movieTitle}</div>
}

function App() {
  return (
    <div>
        <h1>Hello Movie</h1>
        <Food movieTitle="Emily in Paris"/>
        <Food movieTitle="Vikings"/>
        <Food movieTitle="Interstellar"/>
    </div>
  )
}

export default App;
