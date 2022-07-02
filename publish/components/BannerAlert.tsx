import { Alert } from "antd";

export default function BannerAlert() {
  return (
    <Alert
      message={
        <span>
          {" "}
          If Dendron has been of use to you, consider {" "}
          <a href="https://github.com/dendronhq/dendron" target="_blank">
            starring us on github!
          </a>{" "}
          This helps us grow 🌱
        </span>
      }
      type="info"
      closable
    />
  );
}
