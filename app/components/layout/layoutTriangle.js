import { Container } from "react-bootstrap";
import image from "app/components/images/main-pic.png";
export default function LayoutTriangle({
  bg,
  text,
  children,
  className,
  botHidden = false,
  topHidden = false,
  test = false,
  midHidden = false,
  minHeight = "80vh",
}) {
  return (
    <div
      className={`position-relative py-5 ${
        topHidden ? "mb-5" : botHidden ? "mt-5" : "my-5"
      }`}
    >
      <div
        className="position-absolute w-100 h-100 bg-dark top-0"
        style={{
          minHeight: minHeight,
          background: typeof bg !== "object" ? `var(--bs-${bg})` : "inherit",
          clipPath: `polygon(0 ${!topHidden ? "100px" : "0%"},100% 0,100% ${
            !botHidden ? "90%" : "100%"
          },0 100%)`, //top-left, top-right,bot-right,bot-left
        }}
      >
        {typeof bg === "object" && bg}
      </div>
      {!midHidden && (
        <div
          className={`position-relative text-light p-5 ${className}`}
          style={{ minHeight: minHeight, zIndex: 5 }}
        >
          <Container>{children}</Container>
        </div>
      )}
    </div>
  );
}
