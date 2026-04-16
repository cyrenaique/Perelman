export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center gap-3 text-sm text-primary-400">
          <img
            src="/pictures/elephant.jpeg"
            alt="Perelman Theatre Mascot"
            className="w-10 h-10 rounded-lg object-cover"
          />
          <span>&copy; {new Date().getFullYear()} Amateur Theatre in English Perelman.</span>
        </div>
      </div>
    </footer>
  );
}
