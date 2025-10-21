import { HelpCircle, ChevronDown } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Language, translations } from '../translations';

interface SSSPageProps {
  language: Language;
}

export function SSSPage({ language }: SSSPageProps) {
  const t = translations[language].faq;
  
  const faqCategories = language === 'tr' ? [
    {
      category: 'Genel Sorular',
      questions: [
        {
          question: t.q1,
          answer: t.a1
        },
        {
          question: 'Naklio\'yu kimler kullanabilir?',
          answer: 'Naklio, filo sahipleri, taşıyıcı firmalar ve araç taşımacılığı hizmeti arayan tüm işletmeler tarafından kullanılabilir. Küçük ölçekli işletmelerden büyük kurumsal firmalara kadar herkes platformdan faydalanabilir.'
        },
        {
          question: 'Platform üzerinden hangi tip araç taşımaları yapılabilir?',
          answer: 'Naklio platformu üzerinden binek ve ticari araçlar için araç taşıma hizmeti alabilirsiniz. Özel araç taşıma, filo transferi ve toplu taşıma çözümleri mevcuttur.'
        },
        {
          question: 'Naklio güvenli mi?',
          answer: t.a7
        }
      ]
    },
    {
      category: 'Hesap ve Üyelik',
      questions: [
        {
          question: t.q2,
          answer: t.a2
        },
        {
          question: 'Üyelik ücreti var mı?',
          answer: 'Naklio\'da temel üyelik ücretsizdir. Ancak işlem bazlı komisyon ücretleri veya premium özellikler için ücretlendirme yapılmaktadır. Detaylı fiyatlandırma için bizimle iletişime geçebilirsiniz.'
        },
        {
          question: 'Hesabımı nasıl silebilirim?',
          answer: 'Hesabınızı silmek isterseniz, müşteri destek ekibimizle iletişime geçmeniz yeterlidir. Hesap silme talebiniz 7 iş günü içinde işleme alınır ve tüm verileriniz KVKK kapsamında silinir.'
        }
      ]
    },
    {
      category: 'Teklif ve Fiyatlandırma',
      questions: [
        {
          question: 'Nasıl teklif alabilirim?',
          answer: 'Platform üzerinden taşıma detaylarınızı (nereden nereye, ne zaman, kaç araç) girdikten sonra sistem otomatik olarak uygun taşıyıcılardan teklifler alır. Gelen teklifleri karşılaştırarak size en uygun olanı seçebilirsiniz.'
        },
        {
          question: 'Teklifler ne kadar sürede geliyor?',
          answer: 'Talepleriniz anlık olarak uygun taşıyıcılara iletilir. Genellikle 3 saat içinde birden fazla teklif alırsınız.'
        },
        {
          question: t.q3,
          answer: t.a3
        },
        {
          question: 'Teklifi aldıktan sonra iptal edebilir miyim?',
          answer: 'Evet, belirli koşullar altında teklifi iptal edebilirsiniz. İptal politikamız ve olası iptal ücretleri için kullanım şartlarımızı inceleyebilir veya destek ekibimizle iletişime geçebilirsiniz.'
        }
      ]
    },
    {
      category: 'Taşıma ve Takip',
      questions: [
        {
          question: 'Araçlarımı gerçek zamanlı takip edebilir miyim?',
          answer: 'Naklio şu an tedarikçilerin statü güncellemeleri ile sevkiyat takibi sunmaktadır. Gerçek zamanlı olarak araç konumu görüntüleme imkanını pek yakında sunacağız.'
        },
        {
          question: 'Taşıma sırasında sorun yaşarsam ne yapmalıyım?',
          answer: 'Taşıma sırasında herhangi bir sorun yaşarsanız, platform üzerinden anında destek ekibimize ulaşabilirsiniz. 7/24 müşteri destek hattımız size yardımcı olmak için hazırdır.'
        },
        {
          question: 'Sigorta kapsamı var mı?',
          answer: 'Evet, Naklio platformu üzerinden gerçekleştirilen tüm taşımalar sigorta kapsamındadır. Olası hasar durumlarında sigorta süreci otomatik olarak başlatılır.'
        }
      ]
    },
    {
      category: 'Ödeme ve Fatura',
      questions: [
        {
          question: t.q4,
          answer: t.a4
        },
        {
          question: 'Ödeme ne zaman yapılıyor?',
          answer: 'Ödeme, taşıma işlemi tamamlandıktan sonra gerçekleştirilir. Kurumsal müşterilerimiz için özel ödeme koşulları ve vade seçenekleri sunuyoruz.'
        },
        {
          question: 'Fatura alabilir miyim?',
          answer: 'Evet, tüm işlemleriniz için fatura düzenlenmektedir.'
        }
      ]
    },
    {
      category: 'Destek ve İletişim',
      questions: [
        {
          question: t.q6,
          answer: t.a6
        },
        {
          question: 'Teknik destek alabilir miyim?',
          answer: t.a8
        },
        {
          question: 'Eğitim ve onboarding desteği var mı?',
          answer: 'Kurumsal müşterilerimiz için özel eğitim programları ve onboarding desteği sunuyoruz. Ekibinizin platformu en verimli şekilde kullanmasını sağlıyoruz.'
        }
      ]
    }
  ] : [
    {
      category: 'General Questions',
      questions: [
        {
          question: t.q1,
          answer: t.a1
        },
        {
          question: 'Who can use Naklio?',
          answer: 'Naklio can be used by fleet owners, carrier companies and all businesses looking for vehicle transportation services. Everyone from small-scale businesses to large corporate companies can benefit from the platform.'
        },
        {
          question: 'What types of vehicle transportation can be done through the platform?',
          answer: 'Through the Naklio platform, you can get vehicle transportation services in a wide range from light commercial vehicles to heavy vehicle transportation. Special vehicle transportation, fleet transfer and mass transport solutions are available.'
        },
        {
          question: 'Is Naklio secure?',
          answer: t.a7
        }
      ]
    },
    {
      category: 'Account and Membership',
      questions: [
        {
          question: t.q2,
          answer: t.a2
        },
        {
          question: 'Is there a membership fee?',
          answer: 'Basic membership on Naklio is free. However, there are transaction-based commission fees or pricing for premium features. You can contact us for detailed pricing.'
        },
        {
          question: 'How can I delete my account?',
          answer: 'If you want to delete your account, you just need to contact our customer support team. Your account deletion request will be processed within 7 business days and all your data will be deleted within the scope of data protection regulations.'
        }
      ]
    },
    {
      category: 'Quotation and Pricing',
      questions: [
        {
          question: 'How can I get a quote?',
          answer: 'After entering your transportation details (from where to where, when, how many vehicles) on the platform, the system automatically receives quotes from suitable carriers. You can compare the incoming offers and choose the one that suits you best.'
        },
        {
          question: 'How long does it take to get quotes?',
          answer: 'Thanks to Naklio\'s smart matching algorithm, your quote requests are sent to suitable carriers within seconds. You usually receive multiple quotes within 24 hours.'
        },
        {
          question: t.q3,
          answer: t.a3
        },
        {
          question: 'Can I cancel after receiving the quote?',
          answer: 'Yes, you can cancel the offer under certain conditions. You can review our terms of use or contact our support team for our cancellation policy and possible cancellation fees.'
        }
      ]
    },
    {
      category: 'Transportation and Tracking',
      questions: [
        {
          question: 'Can I track my vehicles in real time?',
          answer: 'Yes, Naklio platform allows you to track the location of your vehicles in real time with GPS technology. You can access instant location information via mobile app or web panel.'
        },
        {
          question: 'What should I do if I have problems during transportation?',
          answer: 'If you experience any problems during transportation, you can contact our support team immediately through the platform. Our 24/7 customer support line is ready to help you.'
        },
        {
          question: 'Is there insurance coverage?',
          answer: 'Yes, all transportations carried out through the Naklio platform are covered by insurance. In case of possible damage, the insurance process is automatically initiated and the damage cost is covered.'
        }
      ]
    },
    {
      category: 'Payment and Invoicing',
      questions: [
        {
          question: t.q4,
          answer: t.a4
        },
        {
          question: 'When is the payment made?',
          answer: 'Payment is made after the transportation process is completed. We offer special payment terms and maturity options for our corporate customers.'
        },
        {
          question: 'Can I get an invoice?',
          answer: 'Yes, e-invoices are issued for all your transactions. You can access your invoices from the "My Invoices" section in your account on the platform.'
        }
      ]
    },
    {
      category: 'Support and Contact',
      questions: [
        {
          question: t.q6,
          answer: t.a6
        },
        {
          question: 'Can I get technical support?',
          answer: t.a8
        },
        {
          question: 'Is there training and onboarding support?',
          answer: 'We offer special training programs and onboarding support for our corporate customers. We ensure that your team uses the platform most efficiently.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--naklio-teal)] to-[#003d3d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">

            <h1 className="text-4xl md:text-5xl mb-6">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 
                className="text-2xl md:text-3xl mb-6"
                style={{ color: 'var(--naklio-teal)' }}
              >
                {category.category}
              </h2>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`item-${categoryIndex}-${index}`}
                        className="border-b last:border-b-0"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-[var(--naklio-gray)] transition-colors">
                          <span className="text-left pr-4">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-[var(--naklio-gray)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--naklio-teal)' }}>
            {language === 'tr' 
              ? 'Sorunuzun Cevabını Bulamadınız mı?'
              : 'Couldn\'t Find the Answer to Your Question?'
            }
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {language === 'tr'
              ? 'Destek ekibimiz size yardımcı olmak için hazır'
              : 'Our support team is ready to help you'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@naklio.com"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg transition-colors"
              style={{ 
                backgroundColor: 'var(--naklio-orange)',
                color: 'white'
              }}
            >
              {language === 'tr' ? 'E-posta Gönder' : 'Send Email'}
            </a>
            <a
              href="tel:+902125550100"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 transition-colors hover:bg-white"
              style={{ 
                borderColor: 'var(--naklio-teal)',
                color: 'var(--naklio-teal)'
              }}
            >
              {language === 'tr' ? 'Bizi Arayın' : 'Call Us'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
