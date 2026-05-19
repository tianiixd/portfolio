function Footer() {
  return (
    <footer className="w-full p-5 justify-between bg-surface border-t border-gray-200 text-center">
      <p className="font-mono font-medium text-sm text-text-muted">
        &copy; {new Date().getFullYear()} Christian Belarmino. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
