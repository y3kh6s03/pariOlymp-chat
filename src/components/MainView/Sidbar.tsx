import { css } from "@emotion/react";

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

export default function Sidebar() {
  const olympicSports = [
    "3on3",
    "basket",
    "boxing",
    "judo",
    "soccer",
    "swim",
    "tennis",
  ];
  return (
    <div css={sidebar}>
      <h1 css={title}>ParisOlympChat</h1>
      {olympicSports.map((sport, index) => {
        return (
          <a key={index} href="/">
            <img src={`/${sport}.png`} alt="" />
          </a>
        );
      })}
    </div>
  );
}
