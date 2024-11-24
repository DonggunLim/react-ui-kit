import Accordion from "./components/Accordion";

function App() {
  return (
    <>
      <Accordion>
        <Accordion.Title>
          <p>아코디언 타이틀 입니다</p>
        </Accordion.Title>
        <Accordion.Content>
          <p>메인 컨텐츠들이 보입니다.</p>
        </Accordion.Content>
        <Accordion.Button>
          <button>버튼 아이콘이 보입니다[버튼]</button>
        </Accordion.Button>
      </Accordion>
    </>
  );
}

export default App;
