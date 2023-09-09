import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {

  const greeting = "Bienvenidos a mi tienda"

  return (
    <>
      

      <NavBar />
      <ItemListContainer greeting={greeting}/>

    </>
  );
};

export default App;
