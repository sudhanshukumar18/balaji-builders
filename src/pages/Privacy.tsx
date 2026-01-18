import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Privacy = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Privacy Policy"
        description="Privacy policy for Balaji Design & Constructions. Learn how we collect, use, and protect your personal information."
        canonical="/privacy"
        noindex={true}
      />
      <Header />
      
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8">Privacy Policy</h1>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                <strong>Last updated:</strong> January 2026
              </p>
              <p>
                Balaji Design & Constructions ("we," "our," or "us") respects your privacy and is
                committed to protecting your personal data. This privacy policy explains how we
                collect, use, and safeguard your information.
              </p>
              
              <h2 className="font-display text-2xl text-foreground mt-8 mb-4">Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide when you contact us,
                including your name, email address, phone number, and project details.
              </p>
              
              <h2 className="font-display text-2xl text-foreground mt-8 mb-4">How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Process and manage your construction projects</li>
                <li>Send you updates about our services</li>
                <li>Improve our website and services</li>
              </ul>
              
              <h2 className="font-display text-2xl text-foreground mt-8 mb-4">Data Protection</h2>
              <p>
                We implement appropriate security measures to protect your personal information from
                unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <h2 className="font-display text-2xl text-foreground mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: contact@balajidesign.com
                <br />
                Phone: +91 86248 38652
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Privacy;
