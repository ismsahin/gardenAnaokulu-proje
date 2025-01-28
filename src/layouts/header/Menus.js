import Link from "next/link";
import { Fragment } from "react";

export const Home = () => <Link href="/">Anasayfa</Link>;
export const Pages = () => (
  <Fragment>
    <li>
      <Link href="/teacher">Öğretmenler</Link>
    </li>
    <li>
      <Link href="/events">Etkinlikler</Link>
    </li>
    <li>
      <Link href="/calendar">Akademik Takvim</Link>
    </li>
  </Fragment>
);
export const Teacher = () => (
  <Fragment>
    <li>
      <Link href="/teacher">Öğretmenler</Link>
    </li>
  </Fragment>
);
export const Classes = () => (
  <Fragment>
    <li>
      <Link href="/classes">Sınıflar</Link>
    </li>
  </Fragment>
);
export const Event = () => (
  <Fragment>
    <li>
      <Link href="/events">Etkinlikler</Link>
    </li>
  </Fragment>
);
export const Program = () => <Link href="/program">Program</Link>;
export const Blog = () => (
  <Fragment>
    <li>
      <Link href="/blog-grid">blog grid</Link>
    </li>
    <li>
      <Link href="/blog-list">blog list</Link>
    </li>
    <li>
      <Link href="/blog-single">blog single</Link>
    </li>
  </Fragment>
);
export const Shop = () => (
  <Fragment>
    <li>
      <Link href="/shop">Shop</Link>
    </li>
    <li>
      <Link href="/shop-details">Shop Details</Link>
    </li>
  </Fragment>
);
export const About = () => <Link href="/about">Hakkımızda</Link>;
export const Contact = () => <Link href="/contact">İletişim</Link>;
