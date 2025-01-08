import { NavButton } from "./NavBar";
import { File, HomeIcon, UserRound } from "lucide-react";
import Link from "next/link";
import { ThemeSelector } from "./ThemeSelector";

const Header = () => {
  return (
    <header
      className="
    animate-slide-in-down
    bg-background
    h-12 p-2
    border-b sticky top-0 z-10
    flex justify-between items-center
    "
    >
      <div className="flex items-center gap-2">
        <NavButton Icon={HomeIcon} label="Home" href="/home" />
        <Link href="/home">
          <h2>Computer Repair Shop</h2>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <NavButton Icon={File} label="Tickets" href="/tickets" />
        <NavButton Icon={UserRound} label="Customers" href="/customers" />
        <ThemeSelector />
      </div>
    </header>
  );
};

export default Header;
