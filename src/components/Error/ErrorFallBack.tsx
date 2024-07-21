import { css } from "@emotion/react";
import { FallbackProps } from "react-error-boundary";

const container = css({
  color: "white",
});

export default function ErrorFallBack({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div role="alert" css={container}>
      <p>レンダリングでエラー発生</p>
      <pre>{error.message}</pre>
      <button css={container} onClick={resetErrorBoundary}>
        再チャレンジ
      </button>
    </div>
  );
}
