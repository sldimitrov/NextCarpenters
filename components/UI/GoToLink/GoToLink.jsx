import Link from "next/link";

export default function GoToLink({ href, className, children }) {
  return (
    <Link
      href={href}
      className={`${className} flex justify-center items-center bg-white hover:bg-slate-200 w-40 h-10 rounded-md mt-3 text-black`}
    >
      {children}
    </Link>
  );
}
