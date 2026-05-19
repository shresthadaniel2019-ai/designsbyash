import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — DesignsbyASH" },
      {
        name: "description",
        content:
          "The terms governing your use of DesignsbyASH's website and web design services.",
      },
      { property: "og:title", content: "Terms of Service — DesignsbyASH" },
      {
        property: "og:description",
        content:
          "The terms governing your use of DesignsbyASH's website and web design services.",
      },
      { property: "og:url", content: "/terms-of-service" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-service" }],
  }),
  component: TermsPage,
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

function TermsPage() {
  return (
    <main className="bg-wood-50 py-20 px-6 lg:px-20">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-wood-950 text-4xl font-bold">Terms of Service</h1>
        <p className="mt-4 text-wood-950 font-semibold">DesignsbyASH</p>
        <p className="text-wood-600">Effective Date: May 1, 2026</p>

        <H3>1. Introduction &amp; Acceptance</H3>
        <P>
          This website (the "Site") is owned and operated by DesignsbyASH
          ("Company," "we," "us," or "our"), a sole proprietorship based in
          Edmonton, Alberta, Canada. By accessing or using this Site, you
          ("Client," "you," or "your") agree to be bound by these Terms of
          Service ("Terms"), our Privacy Policy, and any additional terms that
          may apply to specific services. If you do not agree to these Terms,
          do not use this Site.
        </P>

        <H3>2. Services Offered</H3>
        <P>
          DesignsbyASH provides professional web design, development, and
          related digital services for businesses. Our services include but are
          not limited to:
        </P>
        <UL>
          <li>Custom website design and development</li>
          <li>Website maintenance and updates</li>
          <li>Search engine optimization (SEO) consultation</li>
          <li>Optional advertising management add-on (described in Section 4)</li>
        </UL>
        <P>
          The scope, deliverables, timeline, and pricing for any project will
          be outlined in a separate written agreement, proposal, or invoice
          provided to the Client before work begins.
        </P>

        <H3>3. Payment Terms</H3>
        <P>
          (a) <strong>Recurring Payments.</strong> Certain services, including
          website maintenance plans and advertising management add-ons, are
          billed on a recurring monthly basis. All recurring payments are
          processed automatically through Stripe, our third-party payment
          processor. By subscribing to a recurring service, you authorize
          DesignsbyASH to charge your payment method on file each billing cycle
          until you cancel.
        </P>
        <P>
          (b) <strong>Project-Based Payments.</strong> For one-time web design
          or development projects, payment terms will be specified in your
          project proposal. A non-refundable deposit may be required before
          work begins. Final payment is due upon project completion and before
          delivery of final files or site access.
        </P>
        <P>
          (c) <strong>Late Payments.</strong> Invoices not paid within 14 days
          of the due date may result in suspension of services. We reserve the
          right to withhold delivery of work product until outstanding balances
          are resolved.
        </P>
        <P>
          (d) <strong>Refunds.</strong> Due to the custom nature of our
          services, all deposits are non-refundable. Refund eligibility for
          other payments will be assessed on a case-by-case basis at our sole
          discretion. Recurring subscription fees are non-refundable for the
          current billing period but you may cancel future billing at any time.
        </P>
        <P>
          (e) <strong>Stripe.</strong> All payment processing is handled by
          Stripe, Inc. Your use of Stripe's services is subject to Stripe's
          own terms of service and privacy policy. DesignsbyASH does not store
          your credit card or banking information on our servers.
        </P>

        <H3>4. Advertising Management Add-On</H3>
        <P>
          DesignsbyASH offers an optional advertising management service as a
          monthly add-on. This service bundles advertising spend and management
          into a single monthly fee. Key terms:
        </P>
        <P>
          (a) The monthly fee includes both the ad spend budget and
          DesignsbyASH's management fee. The breakdown will be specified in
          your service agreement.
        </P>
        <P>
          (b) Ad budgets may range from approximately $10 to $100+ per day
          depending on the plan selected.
        </P>
        <P>
          (c) DesignsbyASH manages ad campaigns on third-party platforms (e.g.,
          Google Ads, Meta Ads) on your behalf. We do not guarantee specific
          results, rankings, impressions, clicks, or conversions.
        </P>
        <P>
          (d) Ad performance depends on factors outside our control including
          market conditions, competition, platform algorithms, and the Client's
          own products or services.
        </P>
        <P>
          (e) You may cancel the advertising add-on at any time with 30 days
          written notice. Cancellation takes effect at the end of the current
          billing cycle.
        </P>

        <H3>5. Client Content &amp; Responsibilities</H3>
        <P>
          (a) <strong>Content Ownership.</strong> You retain ownership of all
          content (text, images, logos, trademarks, and other materials) that
          you provide to DesignsbyASH for use in your project. By providing
          such content, you grant DesignsbyASH a limited, non-exclusive,
          royalty-free license to use, modify, and display the content solely
          for the purpose of delivering the agreed-upon services.
        </P>
        <P>
          (b) <strong>Content Accuracy.</strong> You are solely responsible
          for the accuracy, legality, and appropriateness of all content you
          provide. DesignsbyASH is not liable for any claims arising from
          Client-provided content, including but not limited to intellectual
          property infringement, defamation, or regulatory violations.
        </P>
        <P>
          (c) <strong>Timely Cooperation.</strong> Project timelines depend on
          the Client providing requested materials, approvals, and feedback in
          a timely manner. Delays caused by the Client may result in adjusted
          timelines and, in some cases, additional fees.
        </P>

        <H3>6. Intellectual Property</H3>
        <P>
          (a) <strong>Our Work Product.</strong> Unless otherwise specified in
          a written agreement, upon receipt of full payment, the Client
          receives a non-exclusive license to use the final deliverables
          (website, designs, code) for their intended business purpose.
          DesignsbyASH retains the right to display the work in our portfolio,
          marketing materials, and case studies.
        </P>
        <P>
          (b) <strong>Our Tools &amp; Frameworks.</strong> Any proprietary
          tools created or used by DesignsbyASH in the course of delivering
          services (including but not limited to templates, code libraries,
          frameworks, and processes) remain the exclusive property of
          DesignsbyASH.
        </P>
        <P>
          (c) <strong>Third-Party Assets.</strong> Websites may include
          third-party assets (fonts, stock images, plugins, libraries) subject
          to their own license terms. DesignsbyASH will use commercially
          licensed or open-source assets, but the Client is responsible for
          maintaining compliance with those licenses after project handoff.
        </P>
        <P>
          (d) <strong>Restrictions.</strong> You may not resell, redistribute,
          sublicense, or claim authorship of any DesignsbyASH work product,
          templates, or code without our explicit written permission.
        </P>

        <H3>7. Website Hosting &amp; Third-Party Services</H3>
        <P>
          DesignsbyASH may recommend or integrate third-party services
          (hosting providers, analytics platforms, form processors, payment
          gateways, etc.) as part of your project. We are not responsible for
          the uptime, security, pricing changes, or terms of service of any
          third-party platform. The Client is responsible for maintaining their
          own accounts with such third-party services.
        </P>

        <H3>8. Disclaimers</H3>
        <P>
          (a) All services and deliverables are provided "as is" and "as
          available." DesignsbyASH makes no warranties, express or implied,
          regarding the fitness of any website for a particular purpose,
          uninterrupted availability, or error-free operation.
        </P>
        <P>
          (b) DesignsbyASH does not guarantee that any website we build will
          achieve specific business results, revenue, traffic, search engine
          rankings, or conversions.
        </P>
        <P>
          (c) Links to third-party websites or resources on this Site do not
          constitute endorsement. We are not responsible for the content,
          products, or services offered by third parties.
        </P>

        <H3>9. Limitation of Liability</H3>
        <P>
          To the maximum extent permitted by applicable law, DesignsbyASH
          shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages, including but not limited to
          loss of profits, data, business opportunities, or goodwill, arising
          out of or related to the use of our services or this Site. Our total
          aggregate liability for any claim arising under these Terms shall not
          exceed the total amount paid by the Client to DesignsbyASH in the
          twelve (12) months preceding the event giving rise to the claim.
        </P>

        <H3>10. Indemnification</H3>
        <P>
          You agree to indemnify, defend, and hold harmless DesignsbyASH and
          its owner, agents, and contractors from and against any claims,
          liabilities, damages, losses, costs, and expenses (including
          reasonable legal fees) arising from: (a) your breach of these Terms;
          (b) your use of our services; (c) any content you provide; or (d)
          your violation of any law or regulation or the rights of any third
          party.
        </P>

        <H3>11. Termination</H3>
        <P>
          (a) <strong>By You.</strong> You may terminate your engagement with
          DesignsbyASH at any time by providing written notice via email to
          designsbyash0@gmail.com. For recurring services, cancellation takes
          effect at the end of the current billing cycle.
        </P>
        <P>
          (b) <strong>By Us.</strong> We reserve the right to suspend or
          terminate services, without refund, if we determine that you have
          violated these Terms, engaged in abusive or unlawful conduct, or
          failed to make required payments. We will make reasonable efforts to
          provide notice before termination except in cases of egregious
          violations.
        </P>
        <P>
          (c) <strong>Effect of Termination.</strong> Upon termination, your
          access to any in-progress work, staging sites, or tools hosted by
          DesignsbyASH may be revoked. Completed work that has been fully paid
          for will be delivered to the Client within 14 business days of
          termination.
        </P>

        <H3>12. Data Storage &amp; Future Features</H3>
        <P>
          DesignsbyASH may, in the future, implement features including but
          not limited to: client account registration, project dashboards,
          databases for storing form submissions and project data, and other
          digital tools. By continuing to use the Site after such features are
          introduced, you agree to any updated Terms of Service governing
          those features. We will notify users of material changes to these
          Terms.
        </P>

        <H3>13. Governing Law &amp; Dispute Resolution</H3>
        <P>
          These Terms shall be governed by and construed in accordance with
          the laws of the Province of Alberta and the federal laws of Canada
          applicable therein. Any dispute arising out of or in connection with
          these Terms shall first be attempted to be resolved through
          good-faith negotiation. If negotiation fails, the dispute shall be
          submitted to binding arbitration in Edmonton, Alberta, Canada, in
          accordance with the Arbitration Act of Alberta. For Clients located
          in the United States, you consent to the jurisdiction described
          above and waive any objection based on inconvenient forum.
        </P>

        <H3>14. Severability</H3>
        <P>
          If any provision of these Terms is found to be unenforceable or
          invalid, that provision shall be limited or eliminated to the
          minimum extent necessary so that these Terms shall otherwise remain
          in full force and effect.
        </P>

        <H3>15. Entire Agreement</H3>
        <P>
          These Terms, together with our Privacy Policy and any written
          project agreements or proposals, constitute the entire agreement
          between you and DesignsbyASH regarding your use of this Site and our
          services.
        </P>

        <H3>16. Changes to These Terms</H3>
        <P>
          We may update these Terms from time to time. The most current
          version will always be posted on this page with the updated
          effective date. Your continued use of the Site after changes are
          posted constitutes acceptance of the revised Terms.
        </P>

        <H3>17. Contact</H3>
        <P>
          For questions regarding these Terms of Service, please contact us
          at:
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
          By using this website and our services, you acknowledge that you
          have read, understood, and agree to be bound by these Terms of
          Service.
        </P>
      </article>
    </main>
  );
}
