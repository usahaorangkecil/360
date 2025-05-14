
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState('rumah-sakit');

  const demoData = {
    'rumah-sakit': {
      title: 'Rumah Sakit',
      description: 'Jelajahi fasilitas rumah sakit dalam tampilan 3D yang memungkinkan perencanaan tata letak yang efisien dan orientasi pasien.',
      iframeSrc: 'https://my.matterport.com/show?play=1&lang=en-US&m=9dVTPc38sMT',
    },
    'universitas': {
      title: 'Universitas',
      description: 'Lihat kampus universitas dalam 3D untuk memberikan pengalaman virtual yang mengesankan bagi calon mahasiswa.',
      iframeSrc: 'https://my.matterport.com/show?play=1&lang=en-US&m=VVsNCgXpjdE',
    },
    'hotel': {
      title: 'Hotel',
      description: 'Jelajahi kamar hotel dan fasilitas dalam 3D untuk meningkatkan kesan pengunjung sebelum mereka datang.',
      iframeSrc: 'https://my.matterport.com/show?play=1&lang=en-US&m=WyiBgFD4Y54',
    }
  };

  return (
    <section className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Edu Virtual - Pengalaman Ruang dalam 3D Imersif
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Jelajahi, bagikan, dan berinteraksi dengan properti dan lokasi seperti tidak pernah sebelumnya.
            Masuk ke masa depan pendidikan digital.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button className="bg-primary text-white text-lg px-6 py-6 h-auto">
              Jadwalkan Demo
            </Button>
            <Button variant="outline" className="text-lg px-6 py-6 h-auto">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
