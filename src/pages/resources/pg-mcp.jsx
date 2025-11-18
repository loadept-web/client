import { Code2, Download, Terminal, Database, ChevronLeft } from 'lucide-react'
import { Link } from 'preact-router/match'

export default function PgMcpPage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl mb-20">
      <Link
        href="/resources"
        className="inline-flex items-center text-[#61afef] mb-8 hover:text-[#528bff] transition-colors"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Volver a recursos
      </Link>
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <Code2 className="h-5 w-5 text-[#61afef]" />
          <code className="text-[#c678dd]">pg-mcp</code>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold text-[#e5c07b]">pg-mcp</h1>
            <span className="text-[#5c6370] text-sm">v0.1.0</span>
          </div>
          <p className="text-[#abb2bf]">
            Servidor MCP para consultas PostgreSQL. Una herramienta de desarrollo
            para integrar PostgreSQL con Claude y otros modelos de IA.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#e5c07b]">Especificaciones Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#282c34] rounded-lg p-4 border border-[#3e4451]">
              <div className="text-sm font-bold text-[#61afef]">Lenguaje</div>
              <div className="text-[#e5c07b]">Go 1.25+</div>
            </div>
            <div className="bg-[#282c34] rounded-lg p-4 border border-[#3e4451]">
              <div className="text-sm font-bold text-[#61afef]">Tipo</div>
              <div className="text-[#e5c07b]">Ejecutable binario</div>
            </div>
            <div className="bg-[#282c34] rounded-lg p-4 border border-[#3e4451]">
              <div className="text-sm font-bold text-[#61afef]">Versión</div>
              <div className="text-[#e5c07b]">0.1.0</div>
            </div>
            <div className="bg-[#282c34] rounded-lg p-4 border border-[#3e4451]">
              <div className="text-sm font-bold text-[#61afef]">Repositorio</div>
              <a href="https://github.com/loadept/pg-mcp" className="text-[#56b6c2] hover:text-[#61afef]">
                github.com/loadept/pg-mcp
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#e5c07b]">Instalación</h2>

          <div className="space-y-4">
            <div className="bg-[#282c34] rounded-lg p-6 border border-[#3e4451]">
              <h3 className="text-sm font-bold text-[#98c379] mb-3">Opción 1: Con Go</h3>
              <div className="bg-[#1e2127] rounded p-3 overflow-x-auto">
                <code className="text-[#61afef] text-sm block">
                  go install loadept.com/pg-mcp/cmd/pg-mcp@latest
                </code>
              </div>
            </div>

            <div className="bg-[#282c34] rounded-lg p-6 border border-[#3e4451]">
              <h3 className="text-sm font-bold text-[#98c379] mb-3">Opción 2: Binario precompilado</h3>
              <p className="text-sm text-[#abb2bf] mb-3">
                Descarga el ejecutable precompilado desde{" "}
                <a href="https://github.com/loadept/pg-mcp/releases" className="text-[#56b6c2] hover:text-[#61afef]">
                  releases
                </a>
              </p>
            </div>

            <div className="bg-[#282c34] rounded-lg p-6 border border-[#3e4451]">
              <h3 className="text-sm font-bold text-[#98c379] mb-3">Compilar desde código fuente</h3>
              <div className="bg-[#1e2127] rounded p-3 overflow-x-auto">
                <code className="text-[#61afef] text-sm block">
                  go build -o pg-mcp cmd/pg-mcp/main.go
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#e5c07b]">Configuración</h2>
          <div className="bg-[#282c34] rounded-lg p-6 border border-[#3e4451]">
            <h3 className="text-sm font-bold text-[#e5c07b] mb-3">Variable de Entorno</h3>
            <p className="text-sm text-[#abb2bf] mb-3">Configura la conexión a tu base de datos:</p>
            <div className="bg-[#1e2127] rounded p-3 overflow-x-auto">
              <code className="text-[#98c379] text-sm block">
                POSTGRES_URI="postgres://usuario:contraseña@localhost:5432/basedatos?sslmode=disable"
              </code>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#e5c07b]">Herramientas Disponibles</h2>
          <div className="space-y-3">
            <div className="bg-[#282c34] rounded-lg p-4 border border-[#3e4451]">
              <div className="flex items-start gap-3">
                <Terminal className="h-5 w-5 text-[#e06c75] mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#61afef]">execute_query</h3>
                  <p className="text-sm text-[#abb2bf] mt-1">
                    Ejecuta consultas SELECT con un máximo de 50 filas de resultado.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#282c34] rounded-lg p-4 border border-[#3e4451]">
              <div className="flex items-start gap-3">
                <Database className="h-5 w-5 text-[#98c379] mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#61afef]">get_table_info</h3>
                  <p className="text-sm text-[#abb2bf] mt-1">
                    Obtén información detallada sobre la estructura de una tabla, incluyendo columnas y tipos de
                    datos.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#282c34] rounded-lg p-4 border border-[#3e4451]">
              <div className="flex items-start gap-3">
                <Code2 className="h-5 w-5 text-[#61afef] mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#61afef]">list_tables</h3>
                  <p className="text-sm text-[#abb2bf] mt-1">
                    Lista todas las tablas por esquema con paginación automática para bases de datos grandes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#e5c07b]">Enlaces Útiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://github.com/loadept/pg-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#282c34] rounded-lg p-4 border border-[#3e4451] hover:border-[#61afef] transition-colors flex items-center gap-3"
            >
              <Code2 className="h-5 w-5 text-[#61afef]" />
              <div>
                <div className="text-sm font-bold text-[#61afef]">Repositorio GitHub</div>
                <div className="text-xs text-[#5c6370]">Ver código fuente y contribuir</div>
              </div>
            </a>

            <a
              href="https://github.com/loadept/pg-mcp/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#282c34] rounded-lg p-4 border border-[#3e4451] hover:border-[#98c379] transition-colors flex items-center gap-3"
            >
              <Download className="h-5 w-5 text-[#98c379]" />
              <div>
                <div className="text-sm font-bold text-[#98c379]">Descargar Binarios</div>
                <div className="text-xs text-[#5c6370]">Versiones precompiladas</div>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-[#282c34] rounded-lg p-6 border border-[#3e4451]">
          <h3 className="text-sm font-bold text-[#c678dd] mb-2">
            <code className="text-[#c678dd]">// Nota importante</code>
          </h3>
          <p className="text-sm text-[#abb2bf]">
            pg-mcp está en desarrollo activo. Se recomienda revisar periódicamente el repositorio para actualizaciones
            de seguridad y nuevas funcionalidades.
          </p>
        </div>
      </div>
    </div>
  )
}
