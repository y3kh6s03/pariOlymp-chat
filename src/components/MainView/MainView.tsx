import { css } from "@emotion/react";
import Sidebar from "./Sidbar";

const container = css({
  flex: 2,
  height: "100vh",
  backgroundImage: "url('/dunk.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",

  span: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    opacity: ".1",
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export default function MainView() {
  return (
    <div css={container}>
      <span />
      <Sidebar />
    </div>
  );
}
