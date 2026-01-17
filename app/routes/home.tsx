import type { Route } from "./+types/home";
import { Welcome } from "../pages/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teselapfer Portfolio" },
    { name: "description", content: "Welcome to Teselapfer's portfolio!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
