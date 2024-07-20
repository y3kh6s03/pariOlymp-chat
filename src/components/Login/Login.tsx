import { Button } from "@mui/material";
import { css } from "@emotion/react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firabase";

const container = css({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "2rem",
  alignItems: "center",
  background:
    "linear-gradient(180deg, rgba(21,57,82,1) 0%, rgba(80,169,164,1) 100%)",

  h3: {
    font: "bold 2rem Revalia",
    color: "white",
  },
  button: {
    width: "5rem",
    height: "3rem",
    color: "white",
    backgroundColor: "black",
  },
});

export default function Login() {
  const handleLoginSubmit = async () => {
    signInWithPopup(auth, provider);
  };
  return (
    <div css={container}>
      <h3>ParisOlympChat</h3>
      <Button
        onClick={() => {
          handleLoginSubmit();
        }}
      >
        ログイン
      </Button>
    </div>
  );
}
