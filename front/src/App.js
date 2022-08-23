import "./App.css";
import { Route } from "wouter";
import Gallery from "./components/Pages/Gallery";
import Home from "./components/Pages/Home";

// import express from "express";
// const app = express();
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
// const cors = require("cors");
// app.listen(3000);
// app.use(cors());
function App() {
  return (
    <>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/gallery">
        <Gallery />
      </Route>
    </>
  );
}

export default App;
