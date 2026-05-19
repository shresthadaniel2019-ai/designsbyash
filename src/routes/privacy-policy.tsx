import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — DesignsbyASH" },
      {
        name: "description",
        content:
          "How DesignsbyASH collects, uses, and protects your personal information.",
      },
      { property: "og:title", content: "Privacy Policy — DesignsbyASH" },
      {
        property: "og:description",
        content:
          "How DesignsbyASH collects, uses, and protects your personal information.",
      },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-wood-950 text-xl font-bold mt-10 mb-3">{children}</h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-wood-600 leading-relaxed mt-3">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc list-inside text-wood-600 space-y-1 mt-3">
      {children}
    </ul>
  );
}

function PrivacyPage() {
  return (
    <main className="bg-wood-50 py-20 px-6 lg:px-20">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-wood-950 text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-wood-950 font-semibold">DesignsbyASH</p>
        <p className="text-wood-600">Effective Date: May 1, 2026</p>

        <H3>1. Introduction</H3>
        <P>
          DesignsbyASH ("Company," "we," "us," or "our") is a sole
          proprietorship based in Edmonton, Alberta, Canada. We are committed
          to protecting the privacy and personal information of our website
          visitors and clients. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website or engage our services. This policy is designed to comply
          with the Personal Information Protection and Electronic Documents
          Act (PIPEDA) and applicable provincial privacy legislation.
        </P>

        <H3>2. Information We Collect</H3>
        <P>We may collect the following types of personal information:</P>
        <P>
          <strong>(a) Information You Provide Directly:</strong>
        </P>
        <UL>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Business name</li>
          <li>Project details and messages submitted through our contact form</li>
          <li>
            Payment information (processed securely by Stripe — we do not store
            card details)
          </li>
        </UL>
        <P>
          <strong>(b) Information Collected Automatically:</strong>
        </P>
        <UL>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>IP address</li>
          <li>Pages visited and time spent on our Site</li>
          <li>Referring URL</li>
        </UL>
        <P>
          <strong>(c) Cookies &amp; Tracking Technologies:</strong>
        </P>
        <P>
          We may use cookies and similar technologies to improve your browsing
          experience and analyze site traffic. You can control cookie
          preferences through your browser settings. We do not use cookies to
          collect personally identifiable information unless you voluntarily
          provide it.
        </P>

        <H3>3. How We Use Your Information</H3>
        <P>We use the information we collect for the following purposes:</P>
        <UL>
          <li>To respond to your inquiries and provide customer support</li>
          <li>
            To deliver the web design, development, and advertising services
            you have engaged us for
          </li>
          <li>To process payments and send invoices</li>
          <li>
            To communicate with you about your project, account, or our
            services
          </li>
          <li>To improve our website, services, and user experience</li>
          <li>To comply with legal obligations</li>
          <li>To protect our rights and prevent fraud</li>
        </UL>

        <H3>4. Third-Party Service Providers</H3>
        <P>
          We may share your information with trusted third-party service
          providers who assist us in operating our business. These include:
        </P>
        <UL>
          <li>
            <strong>Web3Forms</strong> — processes contact form submissions.
            Web3Forms may temporarily store your form data to deliver it to
            us. See Web3Forms' privacy policy for details.
          </li>
          <li>
            <strong>Stripe, Inc.</strong> — processes all payments. Stripe
            handles your payment information in accordance with PCI-DSS
            standards. We do not have access to your full credit card number.
            See Stripe's privacy policy for details.
          </li>
          <li>
            <strong>Analytics Providers</strong> — we may use services such as
            Google Analytics to understand how visitors interact with our
            Site. These services may collect anonymized usage data.
          </li>
          <li>
            <strong>Advertising Platforms</strong> — if you subscribe to our
            advertising management add-on, we may share limited business
            information with platforms such as Google Ads or Meta Ads solely
            for the purpose of managing your ad campaigns.
          </li>
        </UL>
        <P>
          We do not sell, rent, or trade your personal information to third
          parties for marketing purposes.
        </P>

        <H3>5. Data Storage &amp; Security</H3>
        <P>
          Your personal information may be stored on servers located in
          Canada, the United States, or other jurisdictions where our service
          providers operate. We implement reasonable administrative,
          technical, and physical safeguards to protect your information from
          unauthorized access, alteration, disclosure, or destruction.
          However, no method of transmission over the Internet or electronic
          storage is completely secure, and we cannot guarantee absolute
          security.
        </P>
        <P>
          DesignsbyASH may, in the future, implement database systems to store
          form submissions, client project data, and account information.
          This Privacy Policy will be updated to reflect any material changes
          in data storage practices.
        </P>

        <H3>6. Data Retention</H3>
        <P>
          We retain your personal information only for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, or as
          required by law. Specifically:
        </P>
        <UL>
          <li>
            Contact form submissions: retained for up to 24 months or until
            the purpose of the inquiry is fulfilled
          </li>
          <li>
            Client project data: retained for the duration of the business
            relationship plus 3 years
          </li>
          <li>
            Payment records: retained as required by applicable tax and
            financial regulations
          </li>
          <li>
            Website analytics data: retained in anonymized form indefinitely
          </li>
        </UL>
        <P>
          You may request deletion of your personal information at any time
          (see Section 8).
        </P>

        <H3>7. Your Rights Under PIPEDA</H3>
        <P>
          Under the Personal Information Protection and Electronic Documents
          Act (PIPEDA), you have the right to:
        </P>
        <UL>
          <li>
            <strong>Access</strong> your personal information held by us
          </li>
          <li>
            <strong>Correct</strong> any inaccurate or incomplete personal
            information
          </li>
          <li>
            <strong>Withdraw consent</strong> for the collection, use, or
            disclosure of your personal information (subject to legal or
            contractual restrictions)
          </li>
          <li>
            <strong>Request deletion</strong> of your personal information
          </li>
          <li>
            <strong>File a complaint</strong> with the Office of the Privacy
            Commissioner of Canada if you believe your privacy rights have
            been violated
          </li>
        </UL>
        <P>
          To exercise any of these rights, contact us at
          designsbyash0@gmail.com. We will respond to your request within 30
          days.
        </P>

        <H3>8. International Users</H3>
        <P>
          If you are located in the United States or other jurisdictions
          outside Canada, please be aware that your information may be
          transferred to, stored, and processed in Canada. By using our Site
          or engaging our services, you consent to the transfer of your
          information to Canada and acknowledge that Canadian privacy laws,
          including PIPEDA, will govern the handling of your data. If you are
          located in the European Economic Area (EEA), we will process your
          data in compliance with applicable requirements under the General
          Data Protection Regulation (GDPR) where applicable.
        </P>

        <H3>9. Children's Privacy</H3>
        <P>
          Our Site and services are not directed to individuals under the age
          of 18. We do not knowingly collect personal information from
          children. If we become aware that we have inadvertently collected
          personal information from a child under 18, we will take steps to
          delete such information promptly.
        </P>

        <H3>10. Links to Third-Party Websites</H3>
        <P>
          Our Site may contain links to websites operated by third parties. We
          are not responsible for the privacy practices or content of those
          websites. We encourage you to review the privacy policies of any
          third-party sites you visit.
        </P>

        <H3>11. Changes to This Privacy Policy</H3>
        <P>
          We may update this Privacy Policy from time to time to reflect
          changes in our practices, services, or legal requirements. The most
          current version will always be posted on this page with the updated
          effective date. We encourage you to review this Privacy Policy
          periodically. Your continued use of the Site after changes are
          posted constitutes acceptance of the updated Privacy Policy.
        </P>

        <H3>12. Contact</H3>
        <P>
          If you have questions, concerns, or requests regarding this Privacy
          Policy or our data practices, please contact us at:
        </P>
        <address className="not-italic mt-3 text-wood-600 leading-relaxed">
          <strong className="text-wood-950">DesignsbyASH</strong>
          <br />
          Email:{" "}
          <a
            href="mailto:designsbyash0@gmail.com"
            className="text-orange hover:underline"
          >
            designsbyash0@gmail.com
          </a>
          <br />
          Phone:{" "}
          <a href="tel:+14379852163" className="text-orange hover:underline">
            (437) 985-2163
          </a>
          <br />
          Location: Edmonton, Alberta, Canada
        </address>

        <P>
          By using this website, you acknowledge that you have read and
          understood this Privacy Policy.
        </P>
      </article>
    </main>
  );
}
