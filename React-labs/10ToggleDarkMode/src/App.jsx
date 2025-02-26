import { DarkProvider} from "./components/ContextAPI/Cntext";
import { InDarkMode } from "./components/InDArkMode";

function App() {
  return (
    <>
      <DarkProvider>
        <InDarkMode />
      </DarkProvider>
    </>
  );
}

export default App;
