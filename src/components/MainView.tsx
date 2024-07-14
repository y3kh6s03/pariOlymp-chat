import { css } from "@emotion/react";
import Sidebar from "./Sidbar";
// import backgroudimg from "@/../public/dunk.jpg"

export default function MainView() {
  const sidebar = css({
    width: "70vw",
    height: "100vh",
    backgroundImage: "url('/dunk.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
    top: 0,
    left: 0,

    "&::before": {
      content: '""', // ダブルクオートを使用
      width: "100%",
      height: "100%",
      backgroundColor: "black",
      opacity: 0.5, // 視認性を高めるために不透明度を0.5に変更
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1, // 重なり順を設定
    },
  });

  return (
    <div css={sidebar}>
      <Sidebar />
    </div>
  );
}
