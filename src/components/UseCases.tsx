
import React from 'react';
import { Button } from '@/components/ui/button';

const UseCases: React.FC = () => {
  const industries = [
    {
      name: 'Pendidikan',
      description: 'Tingkatkan pengalaman belajar dengan tur kampus virtual yang memungkinkan siswa menjelajah dari mana saja.',
    },
    {
      name: 'Kesehatan',
      description: 'Dokumentasikan kemajuan konstruksi dan visualisasikan desain fasilitas kesehatan sebelum dibangun.',
    },
    {
      name: 'Perhotelan & Pariwisata',
      description: 'Tampilkan hotel, restoran, dan tempat wisata dengan tur virtual yang mendorong kunjungan.',
    },
    {
      name: 'Museum & Budaya',
      description: 'Ciptakan tur kampus virtual dan lestarikan situs warisan budaya dengan digital twin.',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Industri yang Kami Layani</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Teknologi 3D capture kami merevolusi cara bisnis di berbagai industri menampilkan ruang mereka.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <h3 className="text-2xl font-semibold mb-3">{industry.name}</h3>
              <p className="text-gray-600 mb-4">{industry.description}</p>
              <Button variant="outline" className="text-primary">Pelajari lebih lanjut</Button>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-primary text-white px-8 py-6 h-auto text-lg">
            Jelajahi Semua Industri
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
