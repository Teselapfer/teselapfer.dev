import ContentArea from "~/components/ContentArea";
import type { Route } from "./+types/profile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teselapfer Portfolio | Profile" },
    { name: "description", content: "My profile" },
  ];
}

export default function Profile() {
  return (
    <div>
      <ContentArea>
        <h1>Profile</h1>
      </ContentArea>
    </div>
  );
}
