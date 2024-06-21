import Link from "next/link";
import { MobileHeader } from "./mobile-header";
import { Header } from "./header";

export function Navbar() {
  return (
    <div>
      <div className="hidden md:flex">
        <Header />
      </div>
      <div className="md:hidden">
        <MobileHeader
          items={[
            { name: "Service & Support", href: "/service-support" },
            { name: "Service & Support", href: "/service-support" },
            { name: "Service & Support", href: "/service-support" },
          ]}
        />
      </div>
    </div>
  );
}
