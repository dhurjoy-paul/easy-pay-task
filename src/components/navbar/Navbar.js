import Button from "../Button";
import Logo from "../shared/Logo";
import NavLink from "./NavLink";

const menu = [
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Security", href: "#" },
  { name: "Benefits", href: "#" },
]

export default function Navbar() {
  return (
    <div>
      <Logo />
      <div>
        {menu.map(m => <NavLink key={m.name} href={m.href}>{m.name}</NavLink>)}
      </div>
      <Button>Contact Us</Button>
    </div>
  )
} 