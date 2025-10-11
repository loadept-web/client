export const ResourceItemDisable = ({ color, icon, title, description }) => (
    <div className="block p-6 bg-[#282c34] rounded-md opacity-50 cursor-not-allowed h-full">
      <div className="flex items-center mb-4">
        <icon className={`h-6 w-6 mr-3 ${color}`} />
        <h3 className="text-xl font-bold text-[#e5c07b]">{title}</h3>
      </div>
      <p className="text-[#abb2bf]">{description}</p>
      <div className="mt-4 text-[#5c6370] flex items-center text-sm">
        <code>// Próximamente</code>
      </div>
    </div>
)
