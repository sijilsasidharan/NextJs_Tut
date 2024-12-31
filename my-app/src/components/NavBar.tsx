import React from "react";
import { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import Link from "next/link";

type Props = {
  Icon: LucideIcon;
  label: string;
  href?: string;
};

export const NavButton = ({ Icon, label, href }: Props) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      title={label}
      className="rounded-full"
    >
      {href ? (
        <Link href={href || "/"}>
          <Icon />
        </Link>
      ) : (
        <Icon />
      )}
    </Button>
  );
};
const NavBar = () => {
  return <div>NavBar</div>;
};

export default NavBar;
