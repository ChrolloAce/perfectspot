import Navigation from '@/components/Navigation';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              Welcome to Perfect Spot. We respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you about how we look after your personal data when you visit our
              website and use our mobile application, and tell you about your privacy rights. This policy complies
              with App Store guidelines and applicable privacy laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Data We Collect</h2>
            <p className="text-gray-600 mb-4">We may collect, use, store and transfer different kinds of personal data about you:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Identity Data: includes first name, last name, username or similar identifier</li>
              <li>Contact Data: includes email address and phone number</li>
              <li>Location Data: includes your current location when using the app. This is essential for the app&apos;s core functionality to find places near you. We only collect location data when you actively use the app and have granted permission. We do not track your location when the app is not in use.</li>
              <li>Usage Data: includes information about how you use our app and services</li>
              <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Location Services</h2>
            <p className="text-gray-600 mb-4">
              Perfect Spot requires access to your location to provide its core functionality. We use location data to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Find and display places near your current location</li>
              <li>Provide accurate distance information to places of interest</li>
              <li>Improve our location-based recommendations</li>
              <li>Enhance the overall user experience</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Important notes about location data:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>We only collect location data when you have granted permission and the app is actively in use</li>
              <li>We do not track your location when the app is not in use</li>
              <li>We do not share your precise location data with third parties</li>
              <li>You can revoke location permissions at any time through your device settings</li>
              <li>Location data is used solely for improving app functionality and user experience</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How We Use Your Data</h2>
            <p className="text-gray-600 mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>To provide and maintain our service, including location-based features</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To comply with App Store guidelines and requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-600">
              We have implemented appropriate security measures to prevent your personal data from being accidentally
              lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal
              data to those employees, agents, contractors, and other third parties who have a business need to know.
              All location data is encrypted in transit and at rest.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Legal Rights</h2>
            <p className="text-gray-600 mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
              <li>Control location services through your device settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:{' '}
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