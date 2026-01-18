import ContentArea from "~/components/ContentArea";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teselapfer Portfolio" },
    { name: "description", content: "Welcome to Teselapfer's portfolio!" },
  ];
}

export default function Welcome() {
  return (
    <div>
      <ContentArea>
        <h1>Top Page</h1>
      </ContentArea>
    </div>
  );
}
