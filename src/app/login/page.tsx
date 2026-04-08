import { redirect } from "next/navigation";

export const metadata = {
  title: "Login | Hipp0.ai",
};

export default function LoginPage() {
  redirect("https://app.hipp0.ai");
}
