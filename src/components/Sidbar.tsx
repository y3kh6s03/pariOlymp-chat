import { css } from "@emotion/react";

export default function Sidebar() {
  const title = css({
    font: "bold 1.3rem Revalia",
    position: "absolute",
    top: "1rem",
    left: "1rem",
  });
  const sidebarLeft = css({
    width: "10rem",
    height: "100vh",
    paddingTop: "5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "fixed",
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
    <div css={sidebarLeft}>
      <h1 css={title}>ParisOlympChat</h1>
      {olympicSports.map((sport, index) => {
        return (
          <a key={index} href="/">
            <img src={`@/../public/${sport}.png`} alt="" />
          </a>
        );
      })}
    </div>
  );
}
