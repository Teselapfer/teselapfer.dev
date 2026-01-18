import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("pages/welcome.tsx"),
  route("profile", "pages/profile.tsx"),
  route("blog", "pages/blog.tsx"),
  route("feature", "pages/feature.tsx"),
] satisfies RouteConfig;
