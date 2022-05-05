import Header from "./Header";
import Footer from "./Footer";

export default function Template({ children }) {
  return (
    <>
      <Header />
      <main className="h-full">{children}</main>

      <Footer />
    </>
  );
}
