import React from 'react';
import { Gift, Rocket, Users, CheckCircle2, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex flex-col">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6">
              100 Website Gratis untuk UMKM
              <span className="block text-emerald-600 mt-2">Spesial Ramadan!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Mari tingkatkan presence digital UMKM Anda dengan website profesional, GRATIS!
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <div className="flex items-center">
                <Gift className="h-6 w-6 text-emerald-500 mr-2" />
                <span>Gratis</span>
              </div>
              <div className="flex items-center">
                <Rocket className="h-6 w-6 text-emerald-500 mr-2" />
                <span>Profesional</span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-emerald-500 mr-2" />
                <span>Support Penuh</span>
              </div>
            </div>
            
            {/* Google Form Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf9gHhutG3cesllpxX_FLTuzGjhHCiwG4REMtDrBruQ_F2RZg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Website Profesional</h3>
              <p className="mt-2 text-gray-500">Dapatkan website yang didesain khusus untuk bisnis Anda</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Domain Gratis</h3>
              <p className="mt-2 text-gray-500">Termasuk domain untuk website Anda</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Support 24/7</h3>
              <p className="mt-2 text-gray-500">Bantuan teknis kapanpun Anda butuhkan</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Mobile Friendly</h3>
              <p className="mt-2 text-gray-500">Website yang responsif di semua perangkat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-gray-600">
        <p>Created by M.Hidayatullah</p>
      </footer>
    </div>
  );
}

export default App;