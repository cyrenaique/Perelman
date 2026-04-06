export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center text-sm text-primary-400">
          &copy; {new Date().getFullYear()} Amateur Theatre in English Perelman.
        </div>
      </div>
    </footer>
  );
}
