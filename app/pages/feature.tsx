import ContentArea from "~/components/ContentArea";
import type { Route } from "./+types/feature";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teselapfer Portfolio | Feature" },
    { name: "description", content: "What's new" },
  ];
}

export default function Feature() {
  return (
    <div>
      <ContentArea>
        <h1>Feature</h1>
      </ContentArea>
    </div>
  );
}
