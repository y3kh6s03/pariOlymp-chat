import { css } from "@emotion/react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const container = css({
  flex: 1,
  height: "100vh",
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "1rem",
  background:
    "linear-gradient(180deg, rgba(21,57,82,1) 0%, rgba(80,169,164,1) 100%)",
  color: "white",
});

const messageContainer = css({
  flexGrow: 1,
  overflow: "scroll",
});
export default function Chat() {
  return (
    <div css={container}>
      <ChatHeader />
      <div css={messageContainer}>
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      <ChatInput />
    </div>
  );
}
