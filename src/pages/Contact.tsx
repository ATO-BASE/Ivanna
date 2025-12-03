import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: t('contact.info.email'),
      value: 'secretsuperstar000922@gmail.com',
      field: 'email',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: t('contact.info.location'),
      value: 'Kyiv, Ukraine',
      field: 'location',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: t('contact.info.phone'),
      value: '+380 XX XXX XXXX',
      field: 'phone',
    },
  ];

  const copyToClipboard = (value: string, field: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    toast({
      title: 'Copied!',
      description: 'Contact information copied to clipboard',
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: 'Thank you for reaching out. I\'ll get back to you soon.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-muted-foreground">{t('contact.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            {contactInfo.map((info, idx) => (
              <Card
                key={info.field}
                className="p-6 hover:shadow-lg transition-shadow animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(info.value, info.field)}
                  >
                    {copiedField === info.field ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </Card>
            ))}

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <h3 className="font-semibold mb-2">Open to Opportunities</h3>
              <p className="text-sm text-muted-foreground">
                I'm currently available for freelance projects and full-time positions.
                Feel free to reach out!
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 animate-slide-in-right">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">{t('contact.form.name')}</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">{t('contact.form.email')}</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="message">{t('contact.form.message')}</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  required
                  className="mt-2 min-h-32"
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                {t('contact.form.send')}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
