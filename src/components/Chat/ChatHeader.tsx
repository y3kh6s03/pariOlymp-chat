import { css } from "@emotion/react";

const container = css({
  width: "100%",
  height: "2rem",
  h3: {
    font: 'bold 1rem "Noto Sans JP"',
    span: {},
  },
});

export default function ChatHeader() {
  return (
    <div css={container}>
      <h3>
        <span>#</span>
        3×3
      </h3>
    </div>
  );
}
