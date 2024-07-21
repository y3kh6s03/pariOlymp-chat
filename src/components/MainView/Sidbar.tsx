import { css } from "@emotion/react";
import LogoutIcon from "@mui/icons-material/Logout";
import { auth } from "../../firabase";
import useChannels from "../../hooks/useChannels";

const title = css({
  font: "bold 1.3rem Revalia",
  color: "white",
  position: "absolute",
  top: "1rem",
  left: "1rem",
});

const sidebar = css({
  width: "10rem",
  height: "100vh",
  paddingTop: "5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 9999,
  title,
  a: {
    width: "3rem",
    aspectRatio: "1/1",
    marginBottom: "1rem",

    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%",
    },
  },
});

const logout = css({
  color: "white",
});

export default function Sidebar() {
  const channels = useChannels();
  // const olympicSports = [
  //   "3on3",
  //   "basket",
  //   "boxing",
  //   "judo",
  //   "soccer",
  //   "swim",
  //   "tennis",
  // ];

  // const q = query(collection(db, "channels"));

  // useEffect(() => {
  //   onSnapshot(q, (querySnapShot) => {
  //     const channelsResults: Channels[] = [];
  //     querySnapShot.docs.forEach((doc) => {
  //       channelsResults.push({
  //         id: doc.id,
  //         channel: doc.data()
  //       })
  //     })
  //     setChannels([...channelsResults])
  //   })
  // }, [])

  return (
    <div css={sidebar}>
      <h1 css={title}>ParisOlympChat</h1>
      {channels.map((channel) => {
        return (
          <a key={channel.id} href="/">
            <img src={`/${channel.channel.channelName}.png`} alt="icons" />
          </a>
        );
      })}
      <LogoutIcon css={logout} onClick={() => auth.signOut()} />
    </div>
  );
}
