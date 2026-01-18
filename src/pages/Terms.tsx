import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Terms = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Terms & Conditions"
        description="Terms and conditions for Balaji Design & Constructions services. Read about our project agreements, payment terms, and policies."
        canonical="/terms"
        noindex={true}
      />
      <Header />
      
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8">Terms & Conditions</h1>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                <strong>Last updated:</strong> January 2026
              </p>
              <p>
                These Terms and Conditions govern your use of the Balaji Design & Constructions
                website and services. By accessing our website or using our services, you agree to
                these terms.
              </p>
              
              <h2 className="font-display text-2xl text-foreground mt-8 mb-4">Services</h2>
              <p>
                Balaji Design & Constructions provides construction, design, and related services.
                All project terms, timelines, and costs will be outlined in individual project
                agreements.
              </p>
              
              <h2 className="font-display text-2xl text-foreground mt-8 mb-4">Project Agreements</h2>
              <p>
                Each construction project will be governed by a separate written agreement that
                outlines the scope of work, timeline, payment terms, and other project-specific
                details.
              </p>
              
              <h2 className="font-display text-2xl text-foreground mt-8 mb-4">Payment Terms</h2>
              <p>
                Payment schedules will be defined in individual project contracts. We require
                milestone-based payments as outlined in your project agreement.
              </p>
              
              <h2 className="font-display text-2xl text-foreground mt-8 mb-4">Limitation of Liability</h2>
              <p>
                Our liability is limited to the terms specified in individual project agreements.
                We are not responsible for delays caused by factors beyond our control.
              </p>
              
              <h2 className="font-display text-2xl text-foreground mt-8 mb-4">Contact</h2>
              <p>
                For any questions regarding these terms, please contact us at:
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

export default Terms;
