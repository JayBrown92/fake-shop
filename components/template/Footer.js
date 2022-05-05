import Container from "../UI/Container";

export default function Footer() {
  return (
    <footer className="text-sm ">
      <Container classes={"flex flex-col items-center border-t-2 py-2.5"}>
        <p className="pr-4">&copy; Copyright Fake Shop</p>
      </Container>
    </footer>
  );
}
