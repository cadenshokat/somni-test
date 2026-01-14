

export default function Privacy() {
  return (<>
    
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-primary-foreground/80">
              Last updated: January 1, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="lead">
              At Somni, we take your privacy seriously. This Privacy Policy explains how we 
              collect, use, disclose, and safeguard your information, including protected 
              health information (PHI), when you use our services.
            </p>

            <h2>1. Information We Collect</h2>
            
            <h3>Personal Information</h3>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li>Name, email address, phone number, and mailing address</li>
              <li>Date of birth and gender</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Account login credentials</li>
            </ul>

            <h3>Health Information</h3>
            <p>As a healthcare provider, we collect health information including:</p>
            <ul>
              <li>Sleep study results and diagnostic data</li>
              <li>Medical history related to sleep disorders</li>
              <li>Prescription information</li>
              <li>CPAP therapy compliance data (if you choose to sync your device)</li>
              <li>Communications with our healthcare providers</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we automatically collect:</p>
            <ul>
              <li>IP address and device information</li>
              <li>Browser type and operating system</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website or link</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide sleep apnea testing, diagnosis, and treatment services</li>
              <li>Process and fulfill orders</li>
              <li>Communicate with you about your care, orders, and account</li>
              <li>Send appointment reminders and treatment recommendations</li>
              <li>Improve our services and develop new features</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Prevent fraud and ensure the security of our services</li>
            </ul>

            <h2>3. HIPAA Compliance</h2>
            <p>
              As a covered entity under the Health Insurance Portability and Accountability 
              Act (HIPAA), we implement appropriate safeguards to protect your protected 
              health information (PHI). We:
            </p>
            <ul>
              <li>Encrypt PHI in transit and at rest</li>
              <li>Limit access to PHI to authorized personnel only</li>
              <li>Train our staff on HIPAA privacy and security requirements</li>
              <li>Maintain business associate agreements with third parties who handle PHI</li>
              <li>Provide you with a Notice of Privacy Practices</li>
            </ul>

            <h2>4. Sharing of Information</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Healthcare providers involved in your care</li>
              <li>Third-party service providers who assist with our operations</li>
              <li>Payment processors for transaction processing</li>
              <li>Shipping carriers for order delivery</li>
              <li>As required by law or legal process</li>
            </ul>
            <p>
              We never sell your personal information or PHI to third parties for 
              marketing purposes.
            </p>

            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal and health information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Receive a copy of your medical records</li>
              <li>Request restrictions on certain uses of your PHI</li>
              <li>Opt out of marketing communications</li>
              <li>File a complaint if you believe your privacy rights have been violated</li>
            </ul>

            <h2>6. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information, 
              including:
            </p>
            <ul>
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure data centers with physical access controls</li>
              <li>Regular security assessments and penetration testing</li>
              <li>Employee background checks and security training</li>
              <li>Incident response procedures</li>
            </ul>

            <h2>7. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide our services 
              and comply with legal requirements. Medical records are retained in accordance 
              with applicable state and federal regulations.
            </p>

            <h2>8. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze 
              site usage, and assist with marketing efforts. You can control cookies through 
              your browser settings.
            </p>

            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under 18 years of age. We do not 
              knowingly collect personal information from children.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of 
              material changes by posting the new policy on this page and updating the 
              effective date.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your 
              privacy rights, please contact us:
            </p>
            <ul>
              <li>Email: privacy@somni.com</li>
              <li>Phone: 1-800-SOMNI-SLEEP</li>
              <li>Mail: Somni Health Inc., Privacy Officer, 123 Sleep Lane, Suite 100, Austin, TX 78701</li>
            </ul>

            <h2>12. California Privacy Rights</h2>
            <p>
              California residents have additional rights under the California Consumer 
              Privacy Act (CCPA), including the right to know what personal information 
              we collect, the right to delete personal information, and the right to 
              opt out of the sale of personal information. Contact us to exercise these rights.
            </p>
          </div>
        </div>
      </section>
    
  </>
  );
}
