export default function Container({ children, classes }) {
  return <div className={`container px-5 ${classes}`}>{children}</div>;
}
