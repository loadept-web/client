import { Combine, Minimize2 } from 'lucide-react'
import { useState } from 'preact/hooks'
import { BackArrow } from '../../../core/icons'
import { PdfCompressor } from '../../../modules/pdf/compressor'

const Pdf = () => {
  const [mode, setMode] = useState("compress")

  return (
    <div className="container mx-auto px-4 max-w-4xl mb-20">
      <BackArrow text='Volver a recursos' href='/resources' />
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-[#e5c07b]">Herramientas PDF</h1>
          <p className="text-[#abb2bf]">Comprime o une archivos PDF directamente en tu navegador.</p>
        </div>

        <div className="flex items-center space-x-2 bg-[#282c34] p-2 rounded-lg w-fit">
          <button
            onClick={() => setMode("compress")}
            className={`flex items-center px-4 py-2 rounded-md transition-colors ${
              mode === "compress" ? "bg-[#21252b] text-[#61afef]" : "text-[#abb2bf] hover:text-[#528bff]"
            }`}
          >
            <Minimize2 className="h-4 w-4 mr-2" />
            Comprimir PDF
          </button>
          <button
            onClick={() => setMode("merge")}
            className={`flex items-center px-4 py-2 rounded-md transition-colors ${
              mode === "merge" ? "bg-[#21252b] text-[#61afef]" : "text-[#abb2bf] hover:text-[#528bff]"
            }`}
          >
            <Combine className="h-4 w-4 mr-2" />
            Unir PDFs
          </button>
        </div>

        <PdfCompressor />
        {/* <div className="mt-8">{mode === "compress" ?  : <PdfMerger />}</div> */}

        {/* Información de privacidad
        <div className="bg-[#282c34] rounded-lg p-6 mt-8 border border-[#3e4451]">
          <h3 className="text-sm font-bold text-[#e5c07b] mb-2">
            <code className="text-[#98c379]"># Privacidad</code>
          </h3>
          <p className="text-sm text-[#abb2bf]">
            Todos los archivos se procesan localmente en tu navegador. No se suben a ningún servidor externo.
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default Pdf
