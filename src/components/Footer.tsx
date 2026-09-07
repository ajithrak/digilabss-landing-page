export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Digilabss. All rights reserved.</span>
        <a href="#top" className="transition hover:text-foreground">
          Back to top
        </a>
      </div>
    </footer>
  );
}
