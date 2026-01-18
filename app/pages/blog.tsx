import ContentArea from "~/components/ContentArea";
import type { Route } from "./+types/blog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teselapfer Portfolio | Blog" },
    { name: "description", content: "My blogs" },
  ];
}

export default function Blog() {
  return (
    <div>
      <ContentArea>
        <h1>Blog</h1>
      </ContentArea>
    </div>
  );
}
