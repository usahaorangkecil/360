
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Tur 3D Interaktif",
      description: "Jelajahi ruang secara menyeluruh dengan navigasi intuitif dan pandangan 360 derajat yang memungkinkan pengalaman virtual mendalam.",
      details: [
        "Navigasi Dolly untuk gerakan mulus antar ruang",
        "Rotasi 360° untuk pandangan lengkap dari setiap sudut",
        "Kendali zoom untuk memeriksa detail dengan dekat",
        "Mode Doll House untuk melihat seluruh denah"
      ]
    },
    {
      id: 2,
      title: "Pengukuran & Penandaan",
      description: "Dapatkan pengukuran akurat dari ruang virtual dan tambahkan anotasi informatif untuk meningkatkan pengalaman belajar.",
      details: [
        "Pengukuran dimensi jarak dengan akurasi tinggi",
        "Penghitungan luas area otomatis",
        "Tag informasi yang dapat disesuaikan",
        "Ekspor data pengukuran untuk analisis"
      ]
    },
    {
      id: 3,
      title: "Integrasi VR/AR",
      description: "Bawa pengalaman virtual ke tingkat berikutnya dengan dukungan perangkat VR dan AR untuk imersi total.",
      details: [
        "Kompatibilitas dengan headset Oculus, HTC Vive, dan Meta Quest",
        "Dukungan perangkat AR untuk iOS dan Android",
        "Kontrol gerakan intuitif",
        "Simulasi penuh kehadiran dalam ruang"
      ]
    },
    {
      id: 4,
      title: "Analitik Pengunjung",
      description: "Pantau dan analisis bagaimana pengguna berinteraksi dengan ruang virtual untuk terus meningkatkan pengalaman pembelajaran.",
      details: [
        "Pelacakan waktu yang dihabiskan di setiap area",
        "Peta panas untuk rute navigasi populer",
        "Wawasan tentang titik fokus dan minat pengguna",
        "Laporan terperinci untuk evaluasi"
      ]
    },
    {
      id: 5,
      title: "Integrasi Konten Multimedia",
      description: "Perkaya pengalaman virtual dengan video, audio, gambar, dan dokumen yang terintegrasi langsung dalam tur.",
      details: [
        "Penyematan video pembelajaran dalam ruang",
        "Titik informasi audio untuk panduan auditif",
        "Galeri gambar untuk visualisasi tambahan",
        "Dokumen PDF yang dapat diunduh untuk referensi"
      ]
    },
    {
      id: 6,
      title: "Kemampuan Kolaboratif",
      description: "Fasilitasi pembelajaran dan perencanaan bersama dengan fitur diskusi dan anotasi kolaboratif.",
      details: [
        "Tur bersama untuk kelompok hingga 25 peserta",
        "Penunjuk laser virtual untuk fokus diskusi",
        "Chat real-time untuk komunikasi saat tur",
        "Akses berdasarkan peran untuk administrator dan peserta"
      ]
    },
    {
      id: 7,
      title: "Opsi Penyesuaian Branding",
      description: "Sesuaikan pengalaman virtual sesuai identitas institusi pendidikan atau organisasi Anda.",
      details: [
        "Penyesuaian logo dan skema warna",
        "Layar pembuka yang dapat disesuaikan",
        "Tombol navigasi yang dapat dikonfigurasi",
        "Tema antarmuka yang dapat disesuaikan"
      ]
    },
    {
      id: 8,
      title: "Platform Cloud Terpadu",
      description: "Kelola semua aset dan tur 3D Anda dari satu dashboard terpusat dengan penyimpanan cloud yang aman.",
      details: [
        "Hosting cloud terkelola",
        "Kontrol akses berbasis peran",
        "Pencadangan otomatis untuk keamanan data",
        "API untuk integrasi dengan sistem LMS"
      ]
    },
    {
      id: 9,
      title: "Kustomisasi Pembelajaran",
      description: "Buat jalur pembelajaran khusus dan penilaian dalam lingkungan virtual untuk hasil pendidikan yang lebih baik.",
      details: [
        "Pembuat rute pembelajaran langsung",
        "Kuis interaktif dalam ruang virtual",
        "Penugasan berbasis eksplorasi",
        "Pelacakan kemajuan untuk setiap pengguna"
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Fitur Unggulan</h1>
          <p className="text-xl text-gray-600 mb-16">
            Edu Virtual menawarkan teknologi terkini untuk menciptakan pengalaman pembelajaran virtual yang imersif dan interaktif.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(feature => (
              <Card key={feature.id} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-3">{feature.title}</h2>
                  <p className="text-gray-600 mb-5">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        </span>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
