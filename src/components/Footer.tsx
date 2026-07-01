import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-(--border) py-6 text-center text-xs text-(--text)">
      © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
    </footer>
  );
}
