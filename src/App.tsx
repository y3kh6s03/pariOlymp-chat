import { css } from "@emotion/react";
import "./App.css";
import MainView from "./components/MainView/MainView";
import Chat from "./components/Chat/Chat";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { auth } from "./firabase";
import { login, logout } from "./store/slice/UserSlice";

const container = css({
  width: "100vw",
  height: "100vh",
  display: "flex",
  position: "relative",
});

function App() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          }),
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <>
      {user !== null ? (
        <div css={container}>
          <MainView />
          <Chat />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
