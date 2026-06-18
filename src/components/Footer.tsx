export default function Footer() {
  return (
    <footer className="bg-sand-800 text-sand-200/70 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-bold text-sand-50 mb-1">沙漠驿站</h3>
            <p className="font-body text-xs">丝路古道上的文明印记</p>
          </div>
          <div className="font-body text-xs text-center md:text-right">
            <p>文化遗产数字展示项目</p>
            <p className="mt-1 text-sand-300/50">© 2026 沙漠驿站文化页 · 仅供学习交流</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
