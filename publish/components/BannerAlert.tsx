import { Alert } from "antd";

export default function BannerAlert() {
  return (
    <Alert
      message={
        <span>
          {" "}
          Dendron is launching on product hunt today. If Dendron has been of use
          to you, please leave feedback on our{" "}
          <a href="https://www.producthunt.com/posts/dendron-v100">
            launch page
          </a>{" "}
          - this would help us out a lot 🙏
        </span>
      }
      type="info"
      closable
    />
  );
}
