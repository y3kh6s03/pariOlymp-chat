import { css } from "@emotion/react";
import { Avatar } from "@mui/material";

const container = css({
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  marginBottom: "2rem",
});

const item = css({
  h4: {
    span: {
      marginLeft: ".5rem",
      color: "gray",
    },
  },
});

const userInfo = css({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export default function ChatMessage() {
  return (
    <div css={container}>
      <div css={userInfo}>
        <Avatar />
        <div css={item}>
          <h4>
            yosuke
            <span>2024/07/16</span>
          </h4>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        aliquam cumque, repellendus repudiandae id sit? Consequuntur, eos? Velit
        optio saepe iusto sapiente dignissimos officia doloribus. Sint
        perferendis expedita vero aspernatur.
      </p>
    </div>
  );
}
