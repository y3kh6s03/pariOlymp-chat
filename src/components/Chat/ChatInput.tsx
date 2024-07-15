import { css } from "@emotion/react";
import { useRef } from "react";

const container = css({
  width: "100%",
  height: "5rem",
  color: "lightgray",

  form: {
    width: "100%",
    height: "5rem",
    padding: "0 1rem",
    backgroundColor: "#474b53",
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",

    input: {
      width: "100%",
      height: "2rem",
      backgroundColor: "transparent",
      borderStyle: "none",
      outline: "none",
      color: "white",

      "::placeholder": {
        color: "lightgray",
      },
    },

    button: {
      display: "none",
    },
  },
});

export default function ChatInput() {
  const formRef = useRef<HTMLFormElement>(null);
  const handleChatSubmit = () => {};
  return (
    <div css={container}>
      <form ref={formRef} onSubmit={() => handleChatSubmit()}>
        <input
          type="text"
          name="chat"
          placeholder="メッセージを送信
"
          defaultValue={""}
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}
