import { VercelLogo } from '#/ui/VercelLogo';

export function SectionFooter() {
  return (
    <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
      <div className="rounded-lg bg-black">
        <div className="flex items-center justify-between space-x-4 p-3.5 lg:px-5 lg:py-3">
          <div className="flex items-center space-x-1.5">
            <div className="text-sm text-gray-400">By</div>
            <a href="https://vercel.com" title="Vercel">
              <div className="w-16 text-gray-100 hover:text-gray-50">
                <VercelLogo />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
