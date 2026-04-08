import { redirect } from "next/navigation";

export const metadata = {
  title: "GitHub | Hipp0.ai",
};

export default function GitHubPage() {
  redirect("https://github.com/perlantir/Hipp0");
}
