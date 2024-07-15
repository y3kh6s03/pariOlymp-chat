import { css } from "@emotion/react";
import "./App.css";
import MainView from "./components/MainView/MainView";
import Chat from "./components/Chat/Chat";

const container = css({
  width: "100vw",
  height: "100vh",
  display: "flex",
  position: "relative",
});

function App() {
  return (
    <div css={container}>
      <MainView />
      <Chat />
    </div>
  );
}

export default App;
