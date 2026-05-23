import fs from "fs";
import path from "path";
import matter from "gray-matter";

const charactersDirectory = path.join(process.cwd(), "content/characters");

export interface CharacterContent {
  slug: string;
  frontmatter: {
    name: string;
    subtitle: string;
    overview: string;
    keyMoves: { name: string; input: string; description: string }[];
    tips: string[];
    matchups: {
      opponent: string;
      difficulty: "advantageous" | "even" | "disadvantaged";
      summary?: string;
      strategies?: string[];
      keyMoves?: string[];
      notes?: string;
    }[];
  };
  content: string;
}

export function getCharacterContent(slug: string): CharacterContent | null {
  const filePath = path.join(charactersDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as CharacterContent["frontmatter"],
    content,
  };
}

export function getAllCharacterSlugs(): string[] {
  if (!fs.existsSync(charactersDirectory)) return [];
  return fs
    .readdirSync(charactersDirectory)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => f.replace(/\.md$/, ""));
}
