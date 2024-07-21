import { css } from "@emotion/react";
import { useAppSelector } from "../../store/hooks";

const container = css({
  width: "100%",
  height: "2rem",
  h3: {
    font: 'bold 1rem "Noto Sans JP"',
    span: {},
  },
});

export default function ChatHeader() {
  const channelInfo = useAppSelector((state) => state.channel);
  return (
    <div css={container}>
      <h3>
        <span>#</span>
        {channelInfo.channelName}
      </h3>
    </div>
  );
}
