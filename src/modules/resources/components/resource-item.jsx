import { Link } from 'preact-router/match'

export const ResourceItem = ({ href, Icon, color, title, description }) => (
  <Link
    href={href}
    className="block p-6 bg-[#282c34] rounded-md hover:bg-[#2c313a] transition-colors h-full"
  >
    <div className="flex items-center mb-4">
      <Icon className={`h-6 w-6 mr-3 ${color}`} />
      <h3 className="text-xl font-bold text-[#e5c07b]">{title}</h3>
    </div>
    <p className="text-[#abb2bf]">{description}</p>
    <div className="mt-4 text-[#61afef] flex items-center text-sm">
      Abrir herramienta <span className="ml-2">→</span>
    </div>
  </Link>
)
