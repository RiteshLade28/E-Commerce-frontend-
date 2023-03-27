import "./App.css";
import Grid from "@mui/material/Grid";
import Appbar from "./components/Appbar.js";
import Cards from "./components/HeaderRight/Cards";
import Heading from "./components/HeaderLeft/Heading.js";
function App() {
  return (
    <div className="App">
      <Appbar />
      <Grid container spacing={2}>
        <Heading />
        <Cards />
      </Grid>
    </div>
  );
}

export default App;
