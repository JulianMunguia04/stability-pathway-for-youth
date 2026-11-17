
import ResourcePageLayout from "@/components/ResourcePageLayout";

function DocumentSection({ number, title, description, children }) {
  return (
    <article className="document-section">
      <div className="document-section-number">{number}</div>
      <div className="document-section-body">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        {children}
      </div>
    </article>
  );
}

export default function IdentificationPage() {
  return (
    <ResourcePageLayout
      eyebrow="IDENTIFICATION & DOCUMENTATION"
      title="Getting the documents you need."
      description="Identification and government documents can help you access housing, employment, healthcare, income support, and other essential services. Find out what you may need and where to begin."
      photo="youth-documentation-support.jpg"
    >
      <section id="overview" className="resource-content-section">
        <span className="resource-eyebrow">01 — GETTING STARTED</span>
        <h2>Important documents open doors.</h2>
        <p>
          If you do not have identification, replacing or applying for
          documents can feel overwhelming. Different documents have different
          application processes, proof requirements, and costs.
        </p>
        <p>
          The information below summarizes the requirements collected in the
          resource research. If you are missing one of the documents required
          to apply for another, review the designated-agent options and
          support organizations listed below.
        </p>

        <div className="resource-highlight">
          <strong>You may still have options without standard identification.</strong>
          <p>
            For example, the Alberta birth certificate application information
            in the research describes using a designated agent when an
            applicant cannot provide acceptable proof of identity. Support
            organizations may also help with navigating applications.
          </p>
        </div>
      </section>

      <section id="programs" className="resource-content-section">
        <span className="resource-eyebrow">02 — DOCUMENT GUIDE</span>
        <h2>Types of identification</h2>

        <DocumentSection
          number="01"
          title="Alberta Identification Card"
          description="A provincial photo identification card for Alberta residents who do not have or need a driver's licence."
        >
          <h4>Where to apply</h4>
          <p>Visit an authorized registry agent in Alberta in person.</p>

          <h4>Requirements listed in the research</h4>
          <ul>
            <li>Minimum age: 12 years old.</li>
            <li>
              Applicants under 18 must be accompanied by a parent or guardian
              to provide consent.
            </li>
            <li>Proof of Alberta residency, such as a utility bill or bank statement.</li>
            <li>
              Proof of legal status in Canada, such as a Canadian birth
              certificate, passport, citizenship certificate, PR card, or
              another accepted government document.
            </li>
          </ul>
          <p>
            <strong>Important:</strong> The exact accepted documents depend on
            your situation. Confirm the current list with a registry agent
            before visiting.
          </p>
        </DocumentSection>

        <DocumentSection
          number="02"
          title="Alberta Birth Certificate"
          description="A provincial record of birth that can be used as supporting documentation for other applications."
        >
          <h4>Application form</h4>
          <p>
            <a
              href="https://formsmgmt.gov.ab.ca/Public/DVS11163B.xdp"
              target="_blank"
              rel="noreferrer"
            >
              Alberta birth certificate application form →
            </a>
          </p>

          <h4>Where to apply</h4>
          <p>Submit the application through an Alberta registry agent.</p>

          <h4>Proof of identity</h4>
          <ul>
            <li>
              The research identifies an original government-issued document
              containing a recognizable photograph, full name, and
              distinctive identification number.
            </li>
            <li>
              If you do not have acceptable proof of identity, you may be
              able to use a designated agent.
            </li>
          </ul>

          <h4>Using a designated agent</h4>
          <ul>
            <li>The designated agent must be at least 18 years old.</li>
            <li>They must have known you for at least one year.</li>
            <li>They must provide their own acceptable proof of identity.</li>
          </ul>

          <h4>Cost and mailing address</h4>
          <p>
            The research lists an approximate cost of $20. Confirm the current
            fee with the registry agent.
          </p>
          <p>
            You do not need a permanent residence to apply. You do need a
            reliable mailing address where the document can be received.
            The research lists a shelter, a trusted friend or family member,
            or an outreach program as possible alternatives.
          </p>
        </DocumentSection>

        <DocumentSection
          number="03"
          title="Canadian Passport"
          description="A federal travel and identity document for Canadian citizens."
        >
          <h4>Application information</h4>
          <p>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/new-adult-passport.html"
              target="_blank"
              rel="noreferrer"
            >
              Apply for a new adult passport →
            </a>
          </p>

          <h4>Requirements listed in the research</h4>
          <ul>
            <li>Proof of Canadian citizenship, such as a birth certificate or citizenship certificate.</li>
            <li>A document supporting your identity.</li>
            <li>Two identical passport photos.</li>
            <li>A guarantor who has known you personally for at least two years and meets passport requirements.</li>
            <li>Two references who have known you for at least two years.</li>
          </ul>

          <h4>If you cannot find a guarantor</h4>
          <p>
            Contact or visit a Service Canada Centre to ask about the
            Statutory Declaration in Lieu of Guarantor process.
          </p>
          <p>
            Passport program phone: <a href="tel:18199978331">1-819-997-8331</a>
          </p>
          <p>
            The research lists an approximate adult passport cost of
            $120–$160. Confirm current fees before applying.
          </p>
        </DocumentSection>

        <DocumentSection
          number="04"
          title="Permanent Resident Card"
          description="For individuals who already have permanent resident status in Canada."
        >
          <h4>Application information</h4>
          <p>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/permanent-residents/card/apply.html"
              target="_blank"
              rel="noreferrer"
            >
              Apply for, renew, or replace a PR card →
            </a>
          </p>

          <h4>Application methods</h4>
          <ul>
            <li>
              <strong>Online:</strong> Complete the application through the
              PR Portal and upload the required documents, photos, and fee
              receipt.
            </li>
            <li>
              <strong>By mail:</strong> Complete the paper application and
              document checklist, then submit the required materials.
            </li>
          </ul>

          <h4>Requirements listed in the research</h4>
          <ul>
            <li>Proof of permanent resident status, such as a current or expired PR card or Confirmation of Permanent Residence.</li>
            <li>Evidence supporting the residency obligation.</li>
            <li>A copy of a primary identity document.</li>
            <li>Photos taken within 12 months of the application date.</li>
          </ul>
          <p>
            The research lists a $50 application fee. Confirm the current
            fee and document checklist with IRCC.
          </p>
        </DocumentSection>

        <DocumentSection
          number="05"
          title="Indigenous Status Cards"
          description="The research includes information on Secure Certificate of Indian Status and Métis identification."
        >
          <h4>Secure Certificate of Indian Status</h4>
          <p>
            If you are already registered for Indian Status, consult the{" "}
            <a
              href="https://www.sac-isc.gc.ca/DAM/DAM-ISC-SAC/DAM-INSTS/STAGING/texte-text/seccertindstatus_INTER-83-172instr_1554737179608_eng.pdf"
              target="_blank"
              rel="noreferrer"
            >
              application instructions for registered persons →
            </a>
          </p>
          <p>
            If you are not yet registered, review the{" "}
            <a
              href="https://www.sac-isc.gc.ca/eng/1462806841047/1572461062751"
              target="_blank"
              rel="noreferrer"
            >
              Indian Status application information →
            </a>
          </p>
          <ul>
            <li>Eligibility may depend on whether one or both parents are registered or entitled to be registered.</li>
            <li>An original proof of birth document with parental information.</li>
            <li>Valid identification, such as a passport, driver's licence, or accepted government ID.</li>
          </ul>
          <p>
            <strong>In-person location listed in the research:</strong>
            <br />
            Canada Place, Room 130, 9700 Jasper Avenue, Edmonton, AB T5J 4G2.
            Appointments are required.
          </p>

          <h4>Métis Status Card</h4>
          <p>
            The research lists the following application materials:
          </p>
          <ul>
            <li>Family tree.</li>
            <li>Birth certificate.</li>
            <li>Identification, such as a driver's licence, passport, or ID card.</li>
            <li>Proof of Alberta residency for at least 90 days.</li>
            <li>Photos for mailed applications.</li>
          </ul>
          <p>
            Applications may be mailed, emailed, or delivered in person.
          </p>
          <p>
            Address: #100, Delia Gray Building, 11738 Kingsway Avenue,
            Edmonton, AB T5G 0X5.
          </p>
          <p>Phone: <a href="tel:7804552200">780-455-2200</a></p>
          <p>
            Email: <a href="mailto:Citizenship@Metis.org">Citizenship@Metis.org</a>
          </p>
        </DocumentSection>

        <DocumentSection
          number="06"
          title="Alberta Personal Health Card"
          description="Information about applying for Alberta Health Care Insurance Plan coverage."
        >
          <h4>Application form</h4>
          <p>
            <a
              href="https://cfr.forms.gov.ab.ca/form/AHC0102"
              target="_blank"
              rel="noreferrer"
            >
              Alberta health card application form →
            </a>
          </p>

          <h4>Three types of supporting documents</h4>
          <ul>
            <li>Proof of identity.</li>
            <li>Proof of Alberta residency.</li>
            <li>Proof of legal entitlement to be in and remain in Canada.</li>
          </ul>

          <p>
            Examples listed in the research include a passport, permanent
            resident card, driver's licence, government-issued ID, Canadian
            birth certificate, citizenship certificate, and accepted
            immigration documents.
          </p>
          <p>
            The completed form and supporting documents can be submitted by
            mail or in person to an Alberta registry.
          </p>
        </DocumentSection>

        <DocumentSection
          number="07"
          title="Social Insurance Number (SIN)"
          description="A SIN is used to access employment and certain government programs and services."
        >
          <h4>Application form</h4>
          <p>
            <a
              href="https://catalogue.servicecanada.gc.ca/content/EForms/en/CallForm.html?Lang=en&PDF=GC-NAS2120.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Social Insurance Number application form →
            </a>
          </p>

          <h4>Requirements listed in the research</h4>
          <ul>
            <li>
              One primary identity document proving legal status in Canada,
              such as a provincial birth certificate or Canadian citizenship
              certificate.
            </li>
            <li>
              One secondary identity document confirming identity, such as
              a passport or provincial or territorial ID card.
            </li>
          </ul>

          <h4>Where to apply</h4>
          <p>
            In person: Visit a Service Canada Centre.
          </p>
          <p>
            By mail:
            <br />
            Service Canada Social Insurance Registration Office
            <br />
            P.O. Box 7000
            <br />
            Bathurst, NB E2A 4T1, Canada
          </p>
        </DocumentSection>
      </section>

      <section id="organizations" className="resource-content-section">
        <span className="resource-eyebrow">03 — GETTING HELP</span>
        <h2>Organizations that can help</h2>
        <p>
          If you are missing identification or are unsure how to complete an
          application, these organizations are listed in the research as
          possible places to ask for assistance.
        </p>

        <div className="resource-organization-grid">
          <article className="resource-organization-card">
            <h3>Navigation Centre</h3>
            <p>10530 96 Street NW, Edmonton, AB T5H 2H8</p>
            <p>Phone: <a href="tel:7804222018">780-422-2018</a></p>
          </article>

          <article className="resource-organization-card">
            <h3>CarePoint Wellness Centre</h3>
            <p>14830 124 Avenue NW, Edmonton, AB T5L 3B3</p>
            <p>Phone: <a href="tel:8253943537">825-394-3537</a></p>
            <p>
              Email: <a href="mailto:carepoint.centre@hopemission.com">carepoint.centre@hopemission.com</a>
            </p>
          </article>

          <article className="resource-organization-card">
            <h3>Boyle Street Community Services</h3>
            <p>10805 107 Avenue NW, Edmonton, AB T5H 0W9</p>
            <p>Phone: <a href="tel:7804244106">780-424-4106</a></p>
            <p>
              Email: <a href="mailto:info@boylestreet.org">info@boylestreet.org</a>
            </p>
          </article>

          <article className="resource-organization-card">
            <h3>Karis Centre</h3>
            <p>10302 107 Street, Edmonton, AB T5J 1K2</p>
            <p>Phone: <a href="tel:7804222018">780-422-2018</a></p>
            <p>
              Email: <a href="mailto:karis.centre@hopemission.com">karis.centre@hopemission.com</a>
            </p>
          </article>
        </div>
      </section>

      <section id="important-information" className="resource-content-section">
        <span className="resource-eyebrow">04 — IMPORTANT INFORMATION</span>
        <h2>Before applying for a document</h2>
        <ul className="resource-check-list">
          <li>
            Check the current application form and requirements through the
            relevant government website.
          </li>
          <li>
            Confirm fees before applying, as costs may change.
          </li>
          <li>
            Ask whether original documents are required or whether copies
            are accepted.
          </li>
          <li>
            If you do not have a permanent address, ask whether an alternative
            mailing address can be used.
          </li>
          <li>
            If you do not have identification, ask an outreach or support
            organization about help navigating the application process.
          </li>
        </ul>
      </section>
    </ResourcePageLayout>
  );
}
