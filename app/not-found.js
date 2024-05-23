import Link from "next/link";

export default function NotFound() {
  return (
    <div className="slim-container pageContainer">
      <h2>
        That&apos;s not right, <Link href="/">return home</Link>?
      </h2>
    </div>
  );
}
