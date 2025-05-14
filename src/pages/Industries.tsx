
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Industries: React.FC = () => {
  const industries = [
    {
      id: 1,
      title: "Pendidikan Tinggi",
      description: "Transformasikan pengalaman kampus virtual dan pembelajaran jarak jauh dengan tur 3D yang imersif dan interaktif.",
      useCases: [
        "Tur kampus virtual untuk calon mahasiswa",
        "Laboratorium virtual untuk pembelajaran jarak jauh",
        "Perpustakaan digital dengan navigasi interaktif",
        "Simulasi kelas dan auditorium"
      ],
      benefits: [
        "Meningkatkan jangkauan rekrutmen mahasiswa secara global",
        "Mengurangi hambatan geografis dalam pendidikan",
        "Memungkinkan akses pendidikan bagi penyandang disabilitas",
        "Memfasilitasi program pembelajaran hybrid"
      ]
    },
    {
      id: 2,
      title: "Kesehatan & Rumah Sakit",
      description: "Tingkatkan pelatihan medis, orientasi pasien, dan perencanaan fasilitas dengan solusi visualisasi 3D komprehensif.",
      useCases: [
        "Simulasi ruang operasi untuk pelatihan staf medis",
        "Tur orientasi virtual untuk pasien sebelum prosedur",
        "Perencanaan dan desain fasilitas rumah sakit",
        "Navigasi gedung rumah sakit interaktif"
      ],
      benefits: [
        "Meningkatkan pemahaman pasien dan mengurangi kecemasan",
        "Memfasilitasi pelatihan medis tanpa risiko",
        "Mengoptimalkan alur kerja dan desain rumah sakit",
        "Meningkatkan akses ke fasilitas kompleks"
      ]
    },
    {
      id: 3,
      title: "Perhotelan & Pariwisata",
      description: "Tingkatkan pengalaman tamu dan tingkatkan pemesanan dengan tur virtual yang imersif dari properti dan tujuan wisata Anda.",
      useCases: [
        "Tur kamar hotel dan fasilitas interaktif",
        "Eksplorasi virtual atraksi wisata",
        "Visualisasi ruang acara dan konferensi",
        "Pengalaman restoran dan kuliner virtual"
      ],
      benefits: [
        "Meningkatkan tingkat konversi pemesanan",
        "Mengurangi pembatalan dengan ekspektasi yang jelas",
        "Diferensiasi dari kompetitor",
        "Memperluas jangkauan pemasaran global"
      ]
    },
    {
      id: 4,
      title: "Museum & Warisan Budaya",
      description: "Lestarikan dan perluas akses ke artefak budaya dan pameran museum melalui pengalaman digital yang mendalam.",
      useCases: [
        "Tur museum virtual dengan penjelasan kuratorial",
        "Pelestarian digital situs warisan budaya",
        "Pameran interaktif dengan detail yang dapat dilihat dari dekat",
        "Rekonstruksi sejarah tempat-tempat penting"
      ],
      benefits: [
        "Memperluas jangkauan global koleksi museum",
        "Pelestarian warisan budaya untuk generasi mendatang",
        "Meningkatkan keterlibatan dengan konten interaktif",
        "Menawarkan akses ke lokasi yang sulit dijangkau"
      ]
    },
    {
      id: 5,
      title: "Arsitektur & Desain Interior",
      description: "Visualisasikan konsep arsitektur dan desain interior dengan detail yang luar biasa untuk klien dan kolaborasi tim.",
      useCases: [
        "Presentasi proyek desain virtual sebelum konstruksi",
        "Kolaborasi tim desain jarak jauh",
        "Pelacakan kemajuan proyek konstruksi",
        "Portofolio karya arsitektur virtual"
      ],
      benefits: [
        "Meningkatkan approval rate klien dengan visualisasi realistis",
        "Mempercepat pengambilan keputusan desain",
        "Mengurangi kebutuhan revisi dengan visualisasi lebih awal",
        "Meningkatkan komunikasi antara stakeholder proyek"
      ]
    },
    {
      id: 6,
      title: "Pemerintahan & Fasilitas Publik",
      description: "Tingkatkan transparansi dan aksesibilitas fasilitas pemerintah dan layanan publik dengan tur virtual yang informatif.",
      useCases: [
        "Tur gedung pemerintahan untuk keterlibatan warga",
        "Navigasi fasilitas publik seperti perpustakaan dan taman",
        "Visualisasi proyek infrastruktur masa depan",
        "Pelatihan evakuasi dan keamanan virtual"
      ],
      benefits: [
        "Meningkatkan keterlibatan dan transparansi publik",
        "Meningkatkan aksesibilitas layanan pemerintah",
        "Memfasilitasi perencanaan dan partisipasi komunitas",
        "Mengoptimalkan operasi fasilitas publik"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Industri yang Kami Layani</h1>
          <p className="text-xl text-gray-600 mb-16">
            Solusi Edu Virtual dirancang untuk memenuhi kebutuhan berbagai industri, menciptakan pengalaman virtual yang bermakna dan berdampak.
          </p>

          <div className="space-y-12">
            {industries.map(industry => (
              <Card key={industry.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="p-8 bg-gray-50">
                      <h2 className="text-2xl font-bold mb-4">{industry.title}</h2>
                      <p className="text-gray-700 mb-6">{industry.description}</p>
                      
                      <h3 className="font-semibold text-lg mb-2">Studi Kasus:</h3>
                      <ul className="mb-6 space-y-2">
                        {industry.useCases.map((useCase, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                            </span>
                            <span className="text-gray-600">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button className="bg-primary text-white">Pelajari Lebih Lanjut</Button>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="font-semibold text-lg mb-4">Manfaat Utama:</h3>
                      <div className="space-y-4">
                        {industry.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start">
                            <div className="bg-primary/10 rounded-full p-2 mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-gray-700">{benefit}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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

export default Industries;
