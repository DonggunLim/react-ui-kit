import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div id="app">
      <Modal.Root
        onCloseModal={handleCloseModal}
        onOpenModal={handleOpenModal}
        open={isOpen}
      >
        <Modal.Backdrop />
        <Modal.Trigger>
          <button>custom trigger button</button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Close>
            <button>custom close button</button>
          </Modal.Close>
          Modal Content 내부 입니다.
        </Modal.Content>
      </Modal.Root>
    </div>
  );
}

export default App;
