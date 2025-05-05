"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-8">
      <Link href="/" className="text-primary hover:underline flex items-center mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
      <div className="w-full h-[85vh] border rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="/Daksh_Resume.pdf-3.pdf"
          className="w-full h-full"
          title="Daksh Choudhary Resume"
        ></iframe>
      </div>
    </div>
  )
}

//             className="flex flex-col items-center space-y-4 mt-6"
//             initial={{ opacity: 0, y: 20 }}      
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.5 }}

//           >
//             <Link href="/Daksh_Choudhary_Resume.pdf" download className="w-full md:w-auto">
//               <Button variant="outline" className="w-full md:w-auto"> 