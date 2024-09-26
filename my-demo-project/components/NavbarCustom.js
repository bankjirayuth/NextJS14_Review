import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "../assets/svg/acmeLogo";

export default function NavbarCustom() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/server-side/posts">All Post</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/server-side/mange-post">Manage Post</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
