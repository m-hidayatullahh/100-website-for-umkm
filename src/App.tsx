import React, { useState } from 'react';
import { Gift, Rocket, Users, CheckCircle2, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const testimonials = [
    {
      name: "Budi Santoso",
      business: "Warung Kopi Budi",
      text: "Website yang dibuat sangat profesional dan tepat untuk bisnis kopi saya. Pelayanan support juga sangat responsif!",
      role: "Pemilik Usaha"
    },
    {
      name: "Siti Aminah",
      business: "Butik Cantik",
      text: "Tidak menyangka bisa mendapatkan website sekeren ini secara gratis. Sangat membantu bisnis fashion saya berkembang online.",
      role: "Fashion Designer"
    },
    {
      name: "Ahmad Rahman",
      business: "Toko Elektronik Rahman",
      text: "Proses pembuatan website sangat cepat dan hasilnya melebihi ekspektasi. Terima kasih atas bantuan teknisnya!",
      role: "Pengusaha Elektronik"
    },
    {
      name: "Dewi Kusuma",
      business: "Catering Dewi",
      text: "Website yang dibuatkan sangat memudahkan pelanggan untuk melihat menu dan memesan. Omset meningkat signifikan!",
      role: "Pemilik Catering"
    },
    {
      name: "Rudi Hartono",
      business: "Bengkel Motor Rudi",
      text: "Sekarang pelanggan bisa booking service dengan mudah melalui website. Sistem booking online sangat membantu!",
      role: "Pemilik Bengkel"
    },
    {
      name: "Nina Safitri",
      business: "Kue Artisan Nina",
      text: "Katalog kue online memudahkan pelanggan melihat semua koleksi kue saya. Pesanan meningkat drastis!",
      role: "Baker"
    },
    {
      name: "Hendra Wijaya",
      business: "Toko Bangunan Wijaya",
      text: "Website ini membantu kami mengelola inventaris dan pesanan dengan lebih efisien. Sangat worth it!",
      role: "Pengusaha Material"
    },
    {
      name: "Rina Puspita",
      business: "Salon Rina",
      text: "Fitur booking online sangat membantu mengatur jadwal pelanggan. Terima kasih atas websitenya!",
      role: "Pemilik Salon"
    },
    {
      name: "Agus Setiawan",
      business: "Laundry Express",
      text: "Pelanggan sekarang bisa tracking status laundry mereka online. Pelayanan jadi lebih profesional!",
      role: "Pengusaha Laundry"
    },
    {
      name: "Maya Indah",
      business: "Florist Maya",
      text: "Galeri bunga online membantu pelanggan memilih rangkaian yang mereka inginkan. Penjualan meningkat!",
      role: "Florist"
    },
    {
      name: "Doni Prakoso",
      business: "Fotografi Doni",
      text: "Portfolio online membantu showcase hasil foto dengan profesional. Klien baru bertambah!",
      role: "Fotografer"
    },
    {
      name: "Lina Susanti",
      business: "Warung Padang Lina",
      text: "Menu online dengan foto-foto makanan membuat pelanggan lebih tertarik. Pesanan delivery meningkat!",
      role: "Pemilik Rumah Makan"
    },
    {
      name: "Bambang Kusumo",
      business: "Toko Oleh-oleh Bambang",
      text: "Sekarang pelanggan dari luar kota bisa pesan produk dengan mudah. Jangkauan pasar jadi lebih luas!",
      role: "Pengusaha Oleh-oleh"
    },
    {
      name: "Yanti Hermawan",
      business: "Apotek Sehat",
      text: "Sistem inventory online memudahkan tracking stok obat. Pelayanan jadi lebih efisien!",
      role: "Pemilik Apotek"
    },
    {
      name: "Rizki Pratama",
      business: "Barbershop Rizki",
      text: "Booking online memudahkan pengaturan antrian. Pelanggan sangat puas dengan sistemnya!",
      role: "Pemilik Barbershop"
    },
    {
      name: "Sri Wahyuni",
      business: "Catering Sehat Sri",
      text: "Website membantu menampilkan menu diet dan regular dengan rapi. Pesanan katering diet meningkat!",
      role: "Pengusaha Catering"
    },
    {
      name: "Joko Santoso",
      business: "Bengkel Las Joko",
      text: "Portofolio proyek online membantu dapat pelanggan baru. Orderan mengalir terus!",
      role: "Pengusaha Las"
    },
    {
      name: "Ani Sulistyo",
      business: "Toko Kain Ani",
      text: "Katalog kain online memudahkan pelanggan pilih motif. Penjualan meningkat drastis!",
      role: "Pemilik Toko Kain"
    },
    {
      name: "Dedi Irawan",
      business: "Print & Copy Dedi",
      text: "Sistem order online sangat membantu manajemen pesanan. Tidak perlu antri lagi!",
      role: "Pengusaha Percetakan"
    },
    {
      name: "Wati Gunawan",
      business: "Toko Sembako Wati",
      text: "Sekarang pelanggan bisa pesan sembako online. Sangat membantu di masa pandemi!",
      role: "Pemilik Toko"
    },
    {
      name: "Firman Hakim",
      business: "Service AC Firman",
      text: "Booking service AC online memudahkan pengaturan jadwal teknisi. Terima kasih!",
      role: "Teknisi AC"
    },
    {
      name: "Diana Putri",
      business: "Cake House Diana",
      text: "Katalog kue online dengan foto HD menarik banyak pesanan. Omset naik signifikan!",
      role: "Pastry Chef"
    },
    {
      name: "Rudi Hermawan",
      business: "Petshop Rudi",
      text: "Website membantu showcase produk dan layanan grooming. Pelanggan bertambah terus!",
      role: "Pemilik Petshop"
    },
    {
      name: "Siska Dewi",
      business: "Kedai Bubble Tea",
      text: "Menu online dengan sistem order memudahkan pelanggan. Antrian jadi lebih teratur!",
      role: "Pemilik Kedai"
    },
    {
      name: "Tono Wijaya",
      business: "Toko Sepeda Wijaya",
      text: "Katalog sepeda online membantu pelanggan pilih model. Penjualan meningkat pesat!",
      role: "Pengusaha Sepeda"
    },
    {
      name: "Linda Kusuma",
      business: "Salon Kecantikan Linda",
      text: "Booking treatment online sangat membantu manajemen waktu. Pelayanan jadi lebih profesional!",
      role: "Beautician"
    },
    {
      name: "Hadi Susanto",
      business: "Toko Pertanian Hadi",
      text: "Website membantu petani cek stok pupuk dan bibit online. Pelayanan jadi lebih mudah!",
      role: "Pengusaha Pertanian"
    },
    {
      name: "Nia Anggraini",
      business: "Fashion Muslim Nia",
      text: "Katalog busana muslim online memperluas jangkauan pasar. Alhamdulillah rezeki lancar!",
      role: "Fashion Designer"
    },
    {
      name: "Bima Putra",
      business: "Studio Musik Bima",
      text: "Sistem booking studio online sangat membantu mengatur jadwal. Thanks websitenya!",
      role: "Pemilik Studio"
    },
    {
      name: "Eva Mariana",
      business: "Frozen Food Eva",
      text: "Website dengan fitur pre-order sangat membantu manajemen stok. Bisnis jadi lebih teratur!",
      role: "Pengusaha Frozen Food"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

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

      {/* Testimonials Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-emerald-900 mb-12">
          Apa Kata Mereka?
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
                    <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-emerald-900">{testimonial.name}</h4>
                        <p className="text-emerald-600">{testimonial.business}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-emerald-50 transition-colors duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-emerald-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-emerald-50 transition-colors duration-200"
          >
            <ChevronRight className="h-6 w-6 text-emerald-600" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-emerald-500 w-6' : 'bg-emerald-200'
                }`}
              />
            ))}
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