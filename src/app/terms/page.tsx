import Navigation from '@/components/Navigation';

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600">
              By accessing or using Perfect Spot, you agree to be bound by these Terms of Service and all
              applicable laws and regulations, including App Store terms and conditions. If you do not agree
              with any of these terms, you are prohibited from using or accessing this site and our mobile application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. App Store Terms</h2>
            <p className="text-gray-600 mb-4">
              Perfect Spot is distributed through the Apple App Store and is subject to Apple&apos;s terms and conditions.
              By downloading and using our app, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Comply with Apple&apos;s App Store Terms of Service</li>
              <li>Use the app only on Apple-branded products that you own or control</li>
              <li>Accept that Apple has no obligation to furnish any maintenance and support services</li>
              <li>Acknowledge that Apple is not responsible for addressing any claims by you or any third party</li>
              <li>Understand that Apple is not responsible for the investigation, defense, settlement, and discharge of any third-party intellectual property infringement claims</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Location Services</h2>
            <p className="text-gray-600 mb-4">
              Perfect Spot requires access to location services to provide its core functionality. By using our app, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Location services are essential for the app&apos;s functionality to find places near you</li>
              <li>We only collect location data when you have granted permission and the app is actively in use</li>
              <li>We do not track your location when the app is not in use</li>
              <li>You can control location permissions through your device settings</li>
              <li>Location data is used solely for improving app functionality and user experience</li>
              <li>We implement appropriate security measures to protect your location data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to download and use one copy of Perfect Spot per device for personal,
              non-commercial use only. This is the grant of a license, not a transfer of title,
              and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained in Perfect Spot</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
              <li>Use the app in any way that violates App Store terms and conditions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User Content</h2>
            <p className="text-gray-600">
              Our service allows you to post, link, store, share and otherwise make available certain
              information, text, graphics, videos, or other material. You are responsible for the content
              that you post on or through the service, including its legality, reliability, and
              appropriateness. You agree not to post content that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Violates any third-party rights</li>
              <li>Is illegal, harmful, or objectionable</li>
              <li>Infringes on intellectual property rights</li>
              <li>Contains false or misleading information</li>
              <li>Violates App Store guidelines</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Disclaimer</h2>
            <p className="text-gray-600">
              The materials on Perfect Spot are provided on an &apos;as is&apos; basis. Perfect Spot makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of merchantability, fitness
              for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              Apple is not responsible for the app&apos;s content, maintenance, or support.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitations</h2>
            <p className="text-gray-600">
              In no event shall Perfect Spot or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out
              of the use or inability to use the materials on Perfect Spot, even if Perfect Spot or a
              Perfect Spot authorized representative has been notified orally or in writing of the
              possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Accuracy of Materials</h2>
            <p className="text-gray-600">
              The materials appearing on Perfect Spot could include technical, typographical, or
              photographic errors. Perfect Spot does not warrant that any of the materials on its
              website or mobile application are accurate, complete, or current. Perfect Spot may make
              changes to the materials contained on its website or mobile application at any time
              without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Links</h2>
            <p className="text-gray-600">
              Perfect Spot has not reviewed all of the sites linked to its website or mobile application
              and is not responsible for the contents of any such linked site. The inclusion of any link
              does not imply endorsement by Perfect Spot of the site. Use of any such linked website is
              at the user&apos;s own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modifications</h2>
            <p className="text-gray-600">
              Perfect Spot may revise these terms of service for its website or mobile application at any
              time without notice. By using this website or mobile application, you are agreeing to be
              bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-600">
              These terms and conditions are governed by and construed in accordance with the laws and
              you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:ernesot@maktubtechnologies.com" className="text-blue-600 hover:text-blue-700">
                ernesot@maktubtechnologies.com
              </a>
              {' '}or call us at{' '}
              <a href="tel:7866411493" className="text-blue-600 hover:text-blue-700">
                (786) 641-1493
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 