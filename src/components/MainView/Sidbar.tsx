import { css } from "@emotion/react";
import LogoutIcon from "@mui/icons-material/Logout";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { auth, db } from "../../firabase";
import useChannels from "../../hooks/useChannels";
import { addDoc, collection } from "firebase/firestore";
import { useAppDispatch } from "../../store/hooks";
import { setChannelInfo } from "../../store/slice/ChannelSlice";

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
  button: {
    width: "3rem",
    aspectRatio: "1/1",
    marginBottom: "1rem",
    borderRadius: "50%",
    overflow: "hidden",

    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
});

const logout = css({
  color: "white",
});

const addIcon = css({
  color: "white",
  marginBottom: "5rem",
});

export default function Sidebar() {
  const channels = useChannels();

  const handleAddChannel = async () => {
    const addChannelName = prompt("新しいチャンネルを作成します。");
    if (addChannelName) {
      await addDoc(collection(db, "channels"), {
        channelName: addChannelName,
      });
    }
  };
  // const olympicSports = [
  //   "3on3",
  //   "basket",
  //   "boxing",
  //   "judo",
  //   "soccer",
  //   "swim",
  //   "tennis",
  // ];

  const dispatch = useAppDispatch();
  const handleChannelIcon = (channelId: string, channelName: string) => {
    dispatch(setChannelInfo({ channelId, channelName }));
  };

  return (
    <div css={sidebar}>
      <h1 css={title}>ParisOlympChat</h1>
      {channels.map((channel) => {
        return (
          <button
            key={channel.id}
            onClick={() =>
              handleChannelIcon(channel.id, channel.channel.channelName)
            }
          >
            <img src={`/${channel.channel.channelName}.png`} alt="icons" />
          </button>
        );
      })}
      <AddCircleOutlineIcon css={addIcon} onClick={() => handleAddChannel()} />
      <LogoutIcon css={logout} onClick={() => auth.signOut()} />
    </div>
  );
}
