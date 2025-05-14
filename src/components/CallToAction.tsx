
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden gradient-bg shadow-xl">
          <div className="p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap mengubah cara pembelajaran Anda?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Bergabunglah dengan ribuan institusi yang sudah menggunakan platform kami untuk menciptakan pengalaman 3D yang memukau.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 h-auto">
                Mulai Sekarang
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
                Jadwalkan Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
