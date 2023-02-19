import FadeLoader from "react-spinners/FadeLoader";

export const Loading = () => {
  return (
    <div class="contentWrap">
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "10",
        }}
      >
        <FadeLoader
          color="gray"
          height={15}
          width={5}
          radius={2}
          margin={2}
        />
      </div>
    </div>
  );
};

export default Loading;