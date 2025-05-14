
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  const plans = {
    monthly: [
      {
        name: "Starter",
        price: "Rp 1.500.000",
        period: "/bulan",
        description: "Untuk institusi kecil yang ingin memulai dengan tur virtual.",
        features: [
          "3 tur virtual aktif",
          "Hingga 10 pengguna",
          "Resolusi standar (4K)",
          "Titik informasi dasar",
          "Integrasi website dasar",
          "Dukungan email"
        ],
        cta: "Mulai Gratis",
        popular: false
      },
      {
        name: "Professional",
        price: "Rp 3.500.000",
        period: "/bulan",
        description: "Untuk institusi pendidikan dan fasilitas menengah.",
        features: [
          "10 tur virtual aktif",
          "Hingga 50 pengguna",
          "Resolusi tinggi (8K)",
          "Titik informasi multimedia",
          "Tag dan anotasi lanjutan",
          "Analitik dasar",
          "Dukungan prioritas",
          "Integrasi LMS"
        ],
        cta: "Coba 14 Hari",
        popular: true
      },
      {
        name: "Enterprise",
        price: "Hubungi Kami",
        period: "",
        description: "Untuk institusi besar dengan kebutuhan kustomisasi tinggi.",
        features: [
          "Tur virtual tak terbatas",
          "Pengguna tak terbatas",
          "Resolusi ultra-tinggi",
          "Integrasi konten multimedia lengkap",
          "Analitik lanjutan",
          "Penyesuaian branding menyeluruh",
          "Integrasi API kustom",
          "Dukungan 24/7",
          "Manajer akun dedikasi"
        ],
        cta: "Hubungi Kami",
        popular: false
      }
    ],
    annual: [
      {
        name: "Starter",
        price: "Rp 1.200.000",
        period: "/bulan",
        description: "Untuk institusi kecil yang ingin memulai dengan tur virtual.",
        features: [
          "3 tur virtual aktif",
          "Hingga 10 pengguna",
          "Resolusi standar (4K)",
          "Titik informasi dasar",
          "Integrasi website dasar",
          "Dukungan email"
        ],
        cta: "Mulai Gratis",
        popular: false
      },
      {
        name: "Professional",
        price: "Rp 2.800.000",
        period: "/bulan",
        description: "Untuk institusi pendidikan dan fasilitas menengah.",
        features: [
          "10 tur virtual aktif",
          "Hingga 50 pengguna",
          "Resolusi tinggi (8K)",
          "Titik informasi multimedia",
          "Tag dan anotasi lanjutan",
          "Analitik dasar",
          "Dukungan prioritas",
          "Integrasi LMS"
        ],
        cta: "Coba 14 Hari",
        popular: true
      },
      {
        name: "Enterprise",
        price: "Hubungi Kami",
        period: "",
        description: "Untuk institusi besar dengan kebutuhan kustomisasi tinggi.",
        features: [
          "Tur virtual tak terbatas",
          "Pengguna tak terbatas",
          "Resolusi ultra-tinggi",
          "Integrasi konten multimedia lengkap",
          "Analitik lanjutan",
          "Penyesuaian branding menyeluruh",
          "Integrasi API kustom",
          "Dukungan 24/7",
          "Manajer akun dedikasi"
        ],
        cta: "Hubungi Kami",
        popular: false
      }
    ]
  };

  const faqs = [
    {
      question: "Apakah ada biaya setup tambahan?",
      answer: "Tidak ada biaya setup tambahan untuk paket Starter dan Professional. Untuk paket Enterprise, mungkin terdapat biaya kustomisasi tergantung kebutuhan spesifik."
    },
    {
      question: "Dapatkah saya mengubah paket sewaktu-waktu?",
      answer: "Ya, Anda dapat meningkatkan paket kapan saja. Untuk penurunan paket, akan diberlakukan pada saat perpanjangan berikutnya."
    },
    {
      question: "Bagaimana proses pembuatan tur virtual dilakukan?",
      answer: "Tim kami akan mengunjungi lokasi Anda untuk melakukan pemindaian 3D menggunakan perangkat canggih. Proses ini membutuhkan waktu beberapa jam tergantung ukuran ruang."
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk membuat satu tur virtual?",
      answer: "Setelah pemindaian, pemrosesan dan pengeditan membutuhkan waktu 2-5 hari kerja, tergantung kompleksitas dan ukuran ruang."
    },
    {
      question: "Dapatkah saya mengintegrasikan tur virtual dengan sistem manajemen pembelajaran (LMS) yang ada?",
      answer: "Ya, paket Professional dan Enterprise mendukung integrasi dengan LMS populer seperti Moodle, Canvas, dan Blackboard."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Harga yang Transparan</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan institusi Anda untuk menghadirkan pengalaman virtual yang luar biasa.
            </p>

            <div className="mt-8 inline-flex items-center p-1 bg-gray-100 rounded-lg">
              <button
                className={`px-4 py-2 rounded-md ${billingCycle === 'monthly' ? 'bg-white shadow-sm' : ''}`}
                onClick={() => setBillingCycle('monthly')}
              >
                Bulanan
              </button>
              <button
                className={`px-4 py-2 rounded-md ${billingCycle === 'annual' ? 'bg-white shadow-sm' : ''}`}
                onClick={() => setBillingCycle('annual')}
              >
                Tahunan <span className="text-sm text-green-600 ml-1">Hemat 20%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans[billingCycle as keyof typeof plans].map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-primary shadow-lg' : 'border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                    Populer
                  </div>
                )}
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="ml-1 text-gray-500">{plan.period}</span>
                  </div>
                  <p className="mt-4 text-gray-600">{plan.description}</p>
                  
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary text-white' : 'bg-white text-primary border border-primary'}`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">Pertanyaan Umum</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
