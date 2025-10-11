import { Upload, X, Download, Loader2 } from 'lucide-react'
import { useState, useRef } from 'preact/hooks'

export const PdfCompressor = () => {
  const [file, setFile] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [processedFile, setProcessedFile] = useState(null)
  const fileInputRef = useRef(null)

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile)
      setProcessedFile(null)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile)
      setProcessedFile(null)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const removeFile = () => {
    setFile(null)
    setProcessedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const compressPdf = async () => {
    if (!file) return

    setIsProcessing(true)
    // TODO: Consume API for real compression
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setProcessedFile(file)
    setIsProcessing(false)
  }

  const downloadCompressed = () => {
    if (!processedFile) return

    const url = URL.createObjectURL(processedFile)
    const a = document.createElement("a")
    a.href = url
    a.download = `compressed_${file?.name}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <div className="bg-[#282c34] rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#e5c07b] mb-4">Comprimir PDF</h3>
        {!file ? (
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-[#3e4451] rounded-lg p-12 text-center cursor-pointer hover:border-[#528bff] transition-colors"
          >
            <Upload className="h-12 w-12 mx-auto mb-4 text-[#5c6370]" />
            <p className="text-[#abb2bf] mb-2">Arrastra un archivo PDF aquí o haz clic para seleccionar</p>
            <p className="text-sm text-[#5c6370]">
              <code>// Solo archivos PDF</code>
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              onChange={handleFileSelect}
              className="hidden"
              />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-[#21252b] rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-[#e06c75] bg-opacity-20 p-2 rounded mr-3">
                  <Upload className="h-5 w-5 text-[#ffffff]" />
                </div>
                <div>
                  <p className="text-[#e5c07b] font-medium">{file.name}</p>
                  <p className="text-sm text-[#5c6370]">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <button onClick={removeFile} className="text-[#e06c75] hover:text-[#ff6b7a] transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            {!processedFile ? (
              <button
                onClick={compressPdf}
                disabled={isProcessing}
                className="w-full bg-[#21252b] text-[#61afef] px-6 py-3 rounded-md hover:bg-[#2c313a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Comprimiendo...
                  </>
                ) : (
                  "Comprimir PDF"
                )}
              </button>
            ) : (
              <div className="space-y-4">
                <div className="bg-[#98c379] bg-opacity-10 border border-[#98c379] rounded-lg p-4">
                  <p className="text-[#98c379] text-sm">
                    <code>✓ PDF comprimido exitosamente</code>
                  </p>
                </div>
                <button
                  onClick={downloadCompressed}
                  className="w-full bg-[#21252b] text-[#98c379] px-6 py-3 rounded-md hover:bg-[#2c313a] transition-colors flex items-center justify-center"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Descargar PDF comprimido
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
