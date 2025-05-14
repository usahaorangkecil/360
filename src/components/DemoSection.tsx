
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Hospital, University, Hotel } from 'lucide-react';

const DemoSection: React.FC = () => {
  const demos = {
    'rumah-sakit': [
      { 
        id: 1, 
        title: 'DEMO RS 01', 
        description: 'Fasilitas medis modern dengan layanan terintegrasi.',
        iframeSrc: 'https://my.matterport.com/show?play=1&lang=en-US&m=WryTioVxqHq'
      },
      { 
        id: 2, 
        title: 'DEMO RS 02', 
        description: 'Rumah sakit rujukan dengan pelayanan spesialistik lengkap.',
        iframeSrc: 'https://my.matterport.com/show?play=1&lang=en-US&m=rzTuTyx4UJS'
      },
      { 
        id: 3, 
        title: 'DEMO RS 03', 
        description: 'Rumah sakit premium dengan teknologi medis terkini.',
        iframeSrc: 'https://my.matterport.com/show?play=1&lang=en-US&m=9dVTPc38sMT'
      },
    ],
    'universitas': [
      { 
        id: 1, 
        title: 'DEMO Universitas 01', 
        description: 'Kampus terkemuka dengan fasilitas modern dan program studi terlengkap.',
        iframeSrc: 'https://my.matterport.com/show?play=1&lang=en-US&m=V3kjsMcw58s'
      },
      { 
        id: 2, 
        title: 'DEMO Universitas 02', 
        description: 'Perguruan tinggi teknik dan sains terbaik di Indonesia.',
        iframeSrc: 'https://my.matterport.com/show?play=1&lang=en-US&m=SWPkUCTe5Et'
      },
      { 
        id: 3, 
        title: 'DEMO Universitas 03', 
        description: 'Universitas riset dengan sejarah pendidikan yang panjang.',
        iframeSrc: 'https://my.matterport.com/show?play=1&lang=en-US&m=TVJY89Cv6jR'
      },
    ],
    'hotel': [
      { 
        id: 1, 
        title: 'DEMO Hotel 1', 
        description: 'Hotel mewah dengan lokasi strategis di jantung kota Jakarta.',
        iframeSrc: 'https://my.matterport.com/show?play=1&lang=en-US&m=dWUBA5Q63tp'
      },
      { 
        id: 2, 
        title: 'DEMO Hotel 2', 
        description: 'Resort bintang 5 dengan pemandangan pantai yang memukau.',
        iframeSrc: 'https://my.matterport.com/show?play=1&lang=en-US&m=zehpSwN1t5F'
      },
      { 
        id: 3, 
        title: 'DEMO Hotel 3', 
        description: 'Akomodasi mewah dengan sentuhan budaya Indonesia.',
        iframeSrc: 'https://my.matterport.com/show?play=1&lang=en-US&m=QJXu7u151a8'
      },
    ]
  };

  const CategoryIcon = ({ category }: { category: string }) => {
    switch (category) {
      case 'rumah-sakit':
        return <Hospital className="w-10 h-10 text-primary mb-4" />;
      case 'universitas':
        return <University className="w-10 h-10 text-primary mb-4" />;
      case 'hotel':
        return <Hotel className="w-10 h-10 text-primary mb-4" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Demo Virtual 3D</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jelajahi koleksi berbagai ruang virtual 3D kami dari beragam industri dan lokasi.
          </p>
        </div>

        {Object.entries(demos).map(([category, items]) => (
          <div key={category} className="mb-16">
            <div className="flex items-center mb-8">
              <CategoryIcon category={category} />
              <h3 className="text-2xl font-bold ml-3">
                {category === 'rumah-sakit' ? 'Rumah Sakit' : 
                 category === 'universitas' ? 'Universitas' : 'Hotel'}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map(demo => (
                <Card key={demo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 relative">
                    <iframe 
                      src={demo.iframeSrc}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; fullscreen; web-share; xr-spatial-tracking"
                      title={demo.title}
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h4 className="text-lg font-semibold mb-2">{demo.title}</h4>
                    <p className="text-gray-600">{demo.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DemoSection;
