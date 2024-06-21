import Link from "next/link";

export function Header() {
  return (
    <div className="flex h-[5.5vh] border-b items-center justify-between px-4 lg:px-24 w-full">
      <div className="max-w-1/2">
        <span className="font-semibold text-xl">PatOrg</span>
      </div>
      <ul className="max-w-1/2 flex justify-end gap-2 xl:gap-4">
        <Link className="hover:border-b" href={"/#"}>
          Service & Support
        </Link>
        <Link className="hover:border-b" href={"/#"}>
          Service & Support
        </Link>
        <Link className="hover:border-b" href={"/#"}>
          Service & Support
        </Link>
        <Link className="hover:border-b" href={"/#"}>
          Service & Support
        </Link>
      </ul>
    </div>
  );
}
