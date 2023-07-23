function Footer() {
  return (
    <footer className="py-6">
      <div className="container mx-auto px-4">
        <p className="text-slate-600 text-sm text-center">
          &copy; {new Date().getFullYear()}. Develop by{" "}
          <a
            className="inline-block text-primary underline"
            href="https://ebnsina.vercel.app"
            target="_blank"
          >
            Ebn Sina.
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
