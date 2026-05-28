function Footer() {
  return (
    <footer className="w-full p-5 justify-between bg-surface dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center transition-colors">
      <p className="font-mono font-medium text-sm text-text-muted dark:text-gray-400 transition-colors">
        &copy; {new Date().getFullYear()} Christian Belarmino. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
