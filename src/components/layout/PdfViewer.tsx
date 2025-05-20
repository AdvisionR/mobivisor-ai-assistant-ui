'use client'

import {Worker, Viewer} from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

export const PdfViewer = ({ fileUrl }: { fileUrl: string }) => {
    const pluginInstance = defaultLayoutPlugin();

    return (
        <div className="w-96 h-full border-l">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={fileUrl} plugins={[pluginInstance]}></Viewer>
            </Worker>
        </div>
    )
}