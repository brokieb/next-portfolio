import { Container } from "react-bootstrap";

export default function LayoutTriangle({ bg, text, children }) {
  return (
    <>
      <div
        className="w-100 start-0 mt-5 "
        style={{
          borderStyle: "solid",
          borderWidth: "0 0 80px 100vw",
          borderColor: `transparent transparent var(--bs-${bg}) transparent`,
          height: "100px",
          width: "100px",
        }}
      />
      <div
        className="text-light p-5"
        style={{ height: "500px", background: `var(--bs-${bg})` }}
      >
        <Container>{children}</Container>
      </div>
      <div
        className="w-100 start-0"
        style={{
          borderStyle: "solid",
          borderWidth: "80px 100vw 0 0",
          borderColor: `var(--bs-${bg}) transparent transparent transparent`,
          height: "100px",
          width: "100px",
        }}
      />
    </>
  );
}
