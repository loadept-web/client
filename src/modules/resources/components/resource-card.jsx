import { FileText, ImageIcon, Database, Lock } from 'lucide-react'
import { ResourceItem } from './resource-item'
import { ResourceItemDisable } from './resource-item-disable'

const resources = [
  {
    id: "pdf-tools",
    title: "PDF Tools",
    description: "Comprime y une archivos PDF de forma rápida y segura",
    Icon: FileText,
    color: "text-[#e06c75]",
    href: "/pdf",
    available: true,
  },
  {
    id: "pg-mcp",
    title: "PostgreSQL MCP",
    description: "Servidor MCP para consultas PostgreSQL",
    Icon: Database,
    color: "text-[#61afef]",
    href: "/pg-mcp",
    available: true,
  },
  {
    id: "image-optimizer",
    title: "Image Optimizer",
    description: "Optimiza y comprime imágenes sin perder calidad",
    Icon: ImageIcon,
    color: "text-[#98c379]",
    href: "/image",
    available: false,
  },
  {
    id: "json-tools",
    title: "JSON Tools",
    description: "Valida, formatea y transforma archivos JSON",
    Icon: Database,
    color: "text-[#c678dd]",
    href: "/json",
    available: false,
  },
  {
    id: "hash-generator",
    title: "Hash Generator",
    description: "Genera hashes y checksums para tus archivos",
    Icon: Lock,
    color: "text-[#56b6c2]",
    href: "/hash",
    available: false,
  },
]

export const ResourceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {resources.map((resource) => (
        <div key={resource.id}>
          {resource.available ? (
            <ResourceItem {...resource} />
          ) : (
            <ResourceItemDisable {...resource} />
          )}
        </div>
      ))}
    </div>
  )
}