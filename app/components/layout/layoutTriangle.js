import { Container } from "react-bootstrap";

export default function LayoutTriangle({
  bg,
  text,
  children,
  className,
  botHidden = false,
  topHidden = false,
  midHidden = false,
  minHeight = "80vh",
}) {
  return (
    <>
      {!topHidden && (
        <div
          className="start-0 mt-5 "
          style={{
            width: "100%",
            clipPath: "polygon(-5% 101%, 100% 150%, 101% 30%)",
            background: `var(--bs-${bg})`,
            height: "100px",
          }}
        />
      )}
      {!midHidden && (
        <div
          className={`text-light p-5 ${className}`}
          style={{ minHeight: minHeight, background: `var(--bs-${bg})` }}
        >
          <Container>{children}</Container>
        </div>
      )}

      {!botHidden && (
        <div
          className="start-0"
          style={{
            clipPath: "polygon(0 60%, 110% -1%, 0 -1%)",
            background: `var(--bs-${bg})`,
            height: "100px",
          }}
        />
      )}
    </>
  );
}
