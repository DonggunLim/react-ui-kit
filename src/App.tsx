import { ToastAction, useToast } from "@ui/Toast";
import "./App.css";

function App() {
  const { toast } = useToast();
  return (
    <div id="app">
      <button
        onClick={() => {
          toast({
            title: "This is toast title",
            description: "this is toast description",
            duration: 3000,
            actionElem: <ToastAction>close button</ToastAction>,
          });
        }}
      >
        Click Toast
      </button>
      <button
        onClick={() => {
          toast({
            title: "This is toast title2",
            description: "this is toast description2",
            duration: 3000,
            position: "bottom-right",
          });
        }}
      >
        Click Toast2
      </button>
    </div>
  );
}

export default App;
