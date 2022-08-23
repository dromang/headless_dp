import React from "react";
import axios from "axios";

function Home() {
  //const [error, setError] = React.useState(null);
  //const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState(null);

  React.useEffect(() => {
    console.log("Running useEffect");
    const client = axios.create({
      baseURL: "http://dp.docker.localhost/jsonapi",
    });
    client.get("/node/hiberus").then((response) => {
      setItems(response.data);
      console.log(response.data);
    });
  }, []);
  if (items) {
    return (
      <>
        <h1>No items</h1>
      </>
    );
  }
  return <div>Nada</div>;
}
export default Home;
