
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Tur Virtual 3D',
      description: 'Ciptakan model 3D yang imersif dan interaktif yang memungkinkan pengunjung menjelajahi setiap detail ruang dari berbagai sudut.',
    },
    {
      title: 'Gambar Resolusi Tinggi',
      description: 'Tampilkan ruang Anda dengan fotografi 4K yang menangkap setiap detail dengan kejernihan sempurna.',
    },
    {
      title: 'Denah & Pengukuran',
      description: 'Hasilkan denah yang akurat dan lakukan pengukuran presisi langsung dari model 3D Anda.',
    },
    {
      title: 'Siap untuk VR/AR',
      description: 'Biarkan pemirsa mengalami ruang Anda dalam virtual reality untuk pengalaman yang paling imersif.',
    },
    {
      title: 'Berbagi yang Mudah',
      description: 'Bagikan ruang 3D Anda melalui tautan, sematkan di situs web, atau integrasikan dengan platform pendidikan.',
    },
    {
      title: 'Analitik & Wawasan',
      description: 'Lacak keterlibatan pengunjung dengan analitik terperinci tentang bagaimana orang berinteraksi dengan ruang Anda.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Fitur Unggulan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Teknologi kami mengubah ruang fisik menjadi pengalaman digital dengan kemampuan canggih berikut.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
