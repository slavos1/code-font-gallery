import { useReducer } from "./useReducer";
import { Context } from "./Context";
import { reducer, initialState } from "./reducer";
import MainContent from "./MainContent";

const App = () => {
  const [context, dispatch] = useReducer(reducer, initialState);

  console.log("context=", JSON.stringify(context));

  return (
    <Context.Provider value={{ context, dispatch }}>
      {/* <DrawerAppBar> */}
      <MainContent />
      {/* </DrawerAppBar> */}
    </Context.Provider>
  );
};

export default App;
