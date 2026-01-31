const modules = import.meta.glob("../data/*.md", {
  query: "?raw",
  eager: true,
});

export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
  thumbnail?: string;
}

// 自前でフロントマターを解析する関数（ブラウザで動作する）
function parseMarkdown(rawContent: string) {
  const match = rawContent.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);

  if (!match) return { data: {}, content: rawContent };

  const frontmatter = match[1];
  const content = match[2];
  const data: any = {};

  // 各行を key: value に分解
  frontmatter.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length > 0) {
      const value = valueParts
        .join(":")
        .trim()
        .replace(/^["']|["']$/g, "");
      // tags の場合だけ配列に変換
      if (key.trim() === "tags") {
        data[key.trim()] = value
          .replace(/[\[\]]/g, "")
          .split(",")
          .map((s) => s.trim());
      } else {
        data[key.trim()] = value;
      }
    }
  });

  return { data, content };
}

export function getPosts(): Post[] {
  return Object.entries(modules).map(([filepath, module]: [string, any]) => {
    const rawContent = typeof module === "string" ? module : module.default;

    const filename = filepath.split("/").pop() || "";
    const slug = filename.replace(".md", "");

    const { data, content } = parseMarkdown(rawContent);

    return {
      slug,
      title: data.title || "No Title",
      date: data.date || "",
      tags: data.tags || [],
      thumbnail: data.thumbnail,
      content: content,
    };
  });
}
