import Link from "next/link";
import { H1 } from "../lib/typography";

export const DefaultNav = () => (
  <header>
    <nav>
      <Link href="/">
        <H1>Home</H1>
      </Link>
      <Link href="/about-us">
        <H1>About</H1>
      </Link>
      <Link href="/our-work">
        <H1>Our Work</H1>
      </Link>
      <Link href="/education">
        <H1>Education</H1>
      </Link>
      <Link href="/fablab">
        <H1>Fablab</H1>
      </Link>
      <Link href="/community-programs">
        <H1>Community Programs</H1>
      </Link>
      <Link href="/events">
        <H1>Events</H1>
      </Link>
      <Link href="/contact">
        <H1>Contact</H1>
      </Link>
    </nav>
  </header>
);
