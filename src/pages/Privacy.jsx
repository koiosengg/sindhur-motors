import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PrivacyPageStructuredData } from "../structured-data/index.jsx";

export default function Privacy() {
  return (
    <div className="privacy-page-wrapper">
      <PrivacyPageStructuredData />
      <Navbar />

      <main className="privacy-page">
        {/* Ambient background glow */}
        <div className="privacy-glow-wrapper" aria-hidden="true">
          <div className="privacy-glow" />
        </div>

        <div className="privacy-container">
          <header className="privacy-header">
            <h1 className="privacy-title">
              Privacy <span className="highlight-blue">Policy</span>
            </h1>
            <p className="privacy-subtitle">
              Last updated: October 2026 • Sindhur Motos
            </p>
          </header>

          <article className="privacy-content">
            <section className="privacy-section">
              <h2>1. Introduction</h2>
              <p>
                Welcome to <strong>Sindhur Motos</strong> ("we", "us", or
                "our"). We are committed to protecting your personal information
                and being transparent about how we collect, use, and handle data
                when you visit our website or interact with our preview and
                launch updates.
              </p>
              <p>
                This Privacy Policy describes our practices concerning personal
                data collected through our website. By using this website or
                submitting your information to us, you acknowledge the terms
                described in this policy.
              </p>
            </section>

            <section className="privacy-section">
              <h2>2. Information We Collect</h2>
              <p>
                We only collect information that you voluntarily provide to us
                or that is automatically generated during normal web browsing.
                We do not require account registration or process financial
                transactions on this website.
              </p>

              <div className="privacy-card">
                <h3>Information You Directly Provide</h3>
                <p>
                  When you contact us or register your interest for upcoming
                  vehicle launch updates via our contact form, we collect:
                </p>
                <ul>
                  <li>
                    <strong>Full Name:</strong> To address you and personalize
                    correspondence.
                  </li>
                  <li>
                    <strong>Email Address:</strong> To communicate, answer
                    questions, and send launch announcements.
                  </li>
                  <li>
                    <strong>Phone Number:</strong> To contact you regarding
                    launch details and inquiries where requested.
                  </li>
                  <li>
                    <strong>Message / Inquiry Content:</strong> Any additional
                    details or questions you submit in the message field.
                  </li>
                </ul>
              </div>

              <div className="privacy-card">
                <h3>Automatically Collected Technical Data</h3>
                <p>
                  Like most modern websites, our hosting servers may
                  automatically log basic, non-identifying technical data when
                  you access pages, including:
                </p>
                <ul>
                  <li>Browser type and version</li>
                  <li>Operating system and device platform</li>
                  <li>Referral source and timestamps</li>
                  <li>
                    Anonymized IP address and general network routing info
                  </li>
                </ul>
              </div>
            </section>

            <section className="privacy-section">
              <h2>3. How We Use Your Information</h2>
              <p>
                We use the data we collect solely for legitimate business
                purposes:
              </p>
              <ul>
                <li>
                  To acknowledge and respond to inquiries, messages, and
                  feedback submitted via our forms.
                </li>
                <li>
                  To send launch notifications, vehicle updates, and
                  availability alerts to users who request them.
                </li>
                <li>
                  To operate, maintain, and optimize the performance and visual
                  experience of our website.
                </li>
                <li>
                  To safeguard our platform against spam, abuse, and technical
                  threats.
                </li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>4. Third-Party Services</h2>
              <p>
                We do not sell, rent, or trade your personal data. We utilize
                selected third-party service providers strictly to support our
                website functionality:
              </p>
              <div className="privacy-table-wrapper">
                <table className="privacy-table">
                  <thead>
                    <tr>
                      <th>Service Provider</th>
                      <th>Purpose</th>
                      <th>Data Handled</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Formspree</strong>
                      </td>
                      <td>
                        Secure contact form processing and email transmission
                      </td>
                      <td>Name, Email, Phone, Message Content</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Google Fonts</strong>
                      </td>
                      <td>Delivery of website typography</td>
                      <td>
                        Browser request headers, IP address (standard font CDN
                        delivery)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Web Hosting / CDN</strong>
                      </td>
                      <td>Hosting and delivery of website assets</td>
                      <td>Standard server logs, IP address, device metadata</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="privacy-note">
                These third-party providers process data in accordance with
                their respective privacy policies and security standards.
              </p>
            </section>

            <section className="privacy-section">
              <h2>5. Cookies and Tracking Technologies</h2>
              <p>
                Our website does not use third-party marketing trackers,
                advertising pixels (such as Meta Pixel), or retargeting cookies.
              </p>
              <p>
                Essential technical cookies or local storage may be used solely
                for foundational interface functionality (such as remembering
                introductory animation preferences). You can adjust your browser
                settings to decline or delete cookies at any time.
              </p>
            </section>

            <section className="privacy-section">
              <h2>6. Data Sharing and Disclosure</h2>
              <p>
                We do not share your personal information except under the
                following limited conditions:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Trusted technical vendors
                  (e.g., form processing services) who assist in running our
                  communication channels.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by
                  applicable law, court order, or governmental regulation.
                </li>
                <li>
                  <strong>Protection of Rights:</strong> Where necessary to
                  investigate potential violations, enforce our terms, or
                  protect safety and property.
                </li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>7. Data Retention</h2>
              <p>
                We retain personal information submitted via our forms only for
                as long as reasonably necessary to fulfill the purposes
                described in this policy—such as responding to your requests and
                providing launch notifications—unless a longer retention period
                is mandated or permitted by law.
              </p>
              <p>
                You may request deletion of your contact records at any time by
                reaching out to us.
              </p>
            </section>

            <section className="privacy-section">
              <h2>8. Data Security</h2>
              <p>
                We implement reasonable administrative, technical, and
                organizational measures designed to protect your information
                against unauthorized access, loss, misuse, or alteration.
                Communications through our website are encrypted using standard
                HTTPS transport protocols.
              </p>
              <p className="privacy-note">
                While we strive to employ commercial best practices to protect
                your data, no method of transmission over the Internet or
                electronic storage is completely infallible.
              </p>
            </section>

            <section className="privacy-section">
              <h2>9. Children's Privacy</h2>
              <p>
                Our website is designed for general audiences interested in
                automotive mobility and is not directed to children under the
                age of 16. We do not knowingly collect personal information from
                minors. If you believe a child has provided us with personal
                data, please contact us immediately so we can remove it.
              </p>
            </section>

            <section className="privacy-section">
              <h2>10. Your Privacy Rights</h2>
              <p>
                Depending on your jurisdiction, you may have rights regarding
                your personal information, including:
              </p>
              <ul>
                <li>
                  <strong>Access &amp; Review:</strong> Request details about
                  the personal data we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> Request corrections to inaccurate
                  or incomplete information.
                </li>
                <li>
                  <strong>Deletion:</strong> Request erasure of your contact
                  details from our records.
                </li>
                <li>
                  <strong>Opt-Out:</strong> Withdraw consent or opt out of
                  receiving future vehicle launch alerts at any time.
                </li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>11. External Links</h2>
              <p>
                Our website may contain links to external websites or social
                profiles (such as partner agencies or studio credits). We are
                not responsible for the privacy policies, content, or practices
                of third-party websites. We encourage you to review their
                policies upon visiting.
              </p>
            </section>

            <section className="privacy-section">
              <h2>12. Updates to This Policy</h2>
              <p>
                We may periodically revise this Privacy Policy to reflect
                updates in our technology, business operations, or legal
                obligations. Any changes will be posted directly to this page
                with an updated revision date.
              </p>
            </section>

            <section className="privacy-section">
              <h2>13. Contact Us</h2>
              <p>
                If you have questions, concerns, or requests regarding this
                Privacy Policy or your personal information, please connect with
                us via our{" "}
                <a href="/contact" className="privacy-link">
                  Contact Page
                </a>
                .
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
