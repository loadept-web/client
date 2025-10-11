import { PageIndicator } from "../../../core/icons"

export const Description = () => {
  return (
    <>
      <PageIndicator title="recursos.go" />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-[#e5c07b]">Herramientas y Recursos</h1>
        <p className="text-[#abb2bf] max-w-2xl">
          Colección de herramientas útiles para desarrolladores. Todas funcionan en tu navegador sin enviar datos
          a servidores externos.
        </p>
      </div>
    </>
  )
}