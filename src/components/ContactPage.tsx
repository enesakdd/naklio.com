import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Language, translations } from '../translations';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  language: Language;
}

export function ContactPage({ onNavigate, language }: ContactPageProps) {
  const t = translations[language].contact;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const contactInfo = [
    {
      icon: Mail,
      title: language === 'tr' ? 'E-posta' : 'Email',
      content: 'info@naklio.com',
      subContent: 'destek@naklio.com'
    },
    {
      icon: MapPin,
      title: language === 'tr' ? 'Adres' : 'Address',
      content: language === 'tr' ? 'Maltepe Piazza, Cevizli, Tugay Yolu Cd.' : 'Maltepe Piazza, Cevizli, Tugay Yolu Ave.',
      subContent: language === 'tr' ? 'No: 69/A, 34846 Maltepe/İstanbul' : 'No: 69/A, 34846 Maltepe/Istanbul'
    }
  ];

  const departments = language === 'tr' ? [
    { value: 'general', label: 'Genel Bilgi' },
    { value: 'support', label: 'Teknik Destek' },
    { value: 'partnership', label: 'İş Ortaklığı' }
  ] : [
    { value: 'general', label: 'General Information' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    const subjectLabel = departments.find(d => d.value === formData.subject)?.label || formData.subject;
    
    try {
      const response = await fetch('https://formspree.io/f/mdkpagor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: subjectLabel,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'general',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const faqs = language === 'tr' ? [
    {
      question: 'Naklio platformuna nasıl kayıt olabilirim?',
      answer: 'Kayıt olmak için yukarıdaki formu doldurmanız yeterli, sizle hemen iletişime geçeceğiz.'
    },
    {
      question: 'Ücretlendirme nasıl yapılıyor?',
      answer: 'Ücretlendirme taşınan araç modeli, araç adedi, mesafe ve beklenen teslimat süresine bağlı olarak değişmektedir.'
    },
    {
      question: 'Taşınan araçlarımı nasıl takip edebilirim?',
      answer: 'Taşınan araçlarınızın durumunu web uygulaması üzerinden kolaylıkla takip edebilirsiniz.'
    }
  ] : [
    {
      question: 'How can I register on the Naklio platform?',
      answer: 'Simply fill out the form above, and we will contact you immediately.'
    },
    {
      question: 'How does pricing work?',
      answer: 'Pricing varies depending on the vehicle model being transported, number of vehicles, distance and expected delivery time.'
    },
    {
      question: 'How can I track my transported vehicles?',
      answer: 'You can easily track the status of your transported vehicles through the web application.'
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

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent 
                  className={`p-8 text-center ${info.icon === Mail ? 'cursor-pointer hover:bg-gray-50 transition-colors' : ''}`}
                  onClick={() => {
                    if (info.icon === Mail) {
                      window.location.href = 'mailto:info@naklio.com';
                    }
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: 'var(--naklio-orange)' }}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-3" style={{ color: 'var(--naklio-teal)' }}>
                    {info.title}
                  </h3>
                  <p className="text-gray-700 mb-1">
                    {info.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-6" style={{ color: 'var(--naklio-teal)' }}>
                {language === 'tr' ? 'Bize Mesaj Gönderin' : 'Send Us a Message'}
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-gray-700">{t.name}</label>
                    <Input 
                      placeholder={t.namePlaceholder}
                      className="rounded-lg"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700">{t.email}</label>
                    <Input 
                      type="email"
                      placeholder={t.emailPlaceholder}
                      className="rounded-lg"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-gray-700">{t.phone}</label>
                    <Input 
                      type="tel"
                      placeholder={t.phonePlaceholder}
                      className="rounded-lg"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700">{language === 'tr' ? 'Konu' : 'Subject'}</label>
                    <select 
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--naklio-orange)]"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      {departments.map((dept) => (
                        <option key={dept.value} value={dept.value}>
                          {dept.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">{t.message}</label>
                  <Textarea 
                    placeholder={t.messagePlaceholder}
                    className="rounded-lg min-h-[150px]"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full rounded-lg"
                  size="lg"
                  disabled={submitStatus === 'loading'}
                  style={{ 
                    backgroundColor: 'var(--naklio-orange)',
                    color: 'white',
                    opacity: submitStatus === 'loading' ? 0.7 : 1
                  }}
                >
                  <Send className="mr-2 w-5 h-5" />
                  {submitStatus === 'loading' 
                    ? (language === 'tr' ? 'Gönderiliyor...' : 'Sending...') 
                    : t.send
                  }
                </Button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    {language === 'tr' 
                      ? '✓ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.' 
                      : '✓ Your message has been sent successfully! We will get back to you soon.'
                    }
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    {language === 'tr' 
                      ? '✗ Mesaj gönderilemedi. Lütfen tekrar deneyin veya info@naklio.com adresine e-posta gönderin.' 
                      : '✗ Failed to send message. Please try again or email us at info@naklio.com.'
                    }
                  </div>
                )}
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl mb-6" style={{ color: 'var(--naklio-teal)' }}>
                {language === 'tr' ? 'Ofisimizi Ziyaret Edin' : 'Visit Our Office'}
              </h2>
              
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg mb-8 h-64">
                <iframe
                  src="https://www.google.com/maps?q=Maltepe+Piazza,+Cevizli,+Tugay+Yolu+Cd.+İstanbul,+Türkiye&output=embed&z=16"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={language === 'tr' ? 'Naklio Ofis Konumu - Maltepe Piazza' : 'Naklio Office Location - Maltepe Piazza'}
                />
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 bg-[var(--naklio-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--naklio-teal)' }}>
              {language === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'tr' 
                ? 'Aradığınız cevabı bulamadınız mı? Bizimle iletişime geçin.'
                : 'Couldn\'t find the answer you were looking for? Contact us.'
              }
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h4 className="mb-2" style={{ color: 'var(--naklio-teal)' }}>
                    {faq.question}
                  </h4>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="outline"
              size="lg"
              className="rounded-lg px-8"
              style={{ borderColor: 'var(--naklio-teal)', color: 'var(--naklio-teal)' }}
              onClick={() => onNavigate('sss')}
            >
              {language === 'tr' ? 'Tüm SSS\'leri Görüntüle' : 'View All FAQs'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
