
import ResourcePageLayout from "@/components/ResourcePageLayout";

function InfoCard({ title, children }) {
  return (
    <article className="resource-info-card">
      <h3>{title}</h3>
      {children}
    </article>
  );
}

function ProgramSection({ title, description, children }) {
  return (
    <section className="resource-program-section">
      <div className="resource-program-heading">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
      {children}
    </section>
  );
}

export default function HousingPage() {
  return (
    <ResourcePageLayout
      eyebrow="HOUSING & SHELTER"
      title="Finding a place to call home."
      description="Explore emergency shelter options, transitional housing programs, and support services that can help you find and maintain stable housing."
      photo="youth-housing-support.jpg"
    >
      <section id="overview" className="resource-content-section">
        <span className="resource-eyebrow">01 — UNDERSTANDING YOUR OPTIONS</span>
        <h2>Housing support looks different for everyone.</h2>
        <p>
          Whether you need somewhere safe to stay tonight, help navigating the
          housing system, or support moving toward independent living, there
          are different programs available throughout Edmonton.
        </p>
        <p>
          Some programs offer emergency shelter, while others provide longer-term
          transitional housing and individualized support. Eligibility and
          referral requirements vary between organizations.
        </p>

        <div className="resource-highlight">
          <strong>Not sure where to begin?</strong>
          <p>
            Bissell Centre and Hope Mission are listed in the research as
            starting points for housing navigation and connections to
            additional services. Contact them to ask about current options.
          </p>
        </div>
      </section>

      <section id="programs" className="resource-content-section">
        <span className="resource-eyebrow">02 — HOUSING PROGRAMS</span>
        <h2>Explore available programs</h2>

        <ProgramSection
          title="YMCA of Northern Alberta"
          description="Homeward Bound — Housing First support"
        >
          <InfoCard title="Eligibility and requirements">
            <ul>
              <li>
                Have experienced three episodes of homelessness within one
                calendar year.
              </li>
              <li>Participate in a Service Prioritization Decision Assistance Tool (SPDAT) assessment.</li>
            </ul>
          </InfoCard>

          <InfoCard title="How to access an assessment">
            <ol>
              <li>
                <strong>Contact a housing intake worker.</strong>
                <p>
                  Contact YMCA Housing First Services or a local housing
                  intake hub.
                </p>
              </li>
              <li>
                <strong>Complete an initial screening.</strong>
                <p>
                  A worker may complete a shorter VI-SPDAT screening to help
                  determine eligibility and urgency.
                </p>
              </li>
              <li>
                <strong>Complete a full SPDAT interview if required.</strong>
                <p>
                  A certified staff member may conduct a more detailed
                  interview covering areas such as housing history, health,
                  daily functioning, and legal issues.
                </p>
              </li>
            </ol>
          </InfoCard>

          <div className="resource-contact-strip">
            <div>
              <span>PHONE</span>
              <a href="tel:5876742895">587-674-2895</a>
            </div>
            <div>
              <span>EMAIL</span>
              <a href="mailto:TeamleadEDHB@northernalberta.ymca.ca">
                TeamleadEDHB@northernalberta.ymca.ca
              </a>
            </div>
            <div>
              <span>LOCATION</span>
              <p>9538 103A Avenue NW, Edmonton</p>
            </div>
          </div>
        </ProgramSection>

        <ProgramSection
          title="enCompass Community Safety Agency"
          description="Several housing programs with different eligibility and referral requirements."
        >
          <InfoCard title="NOVA">
            <p>
              A youth housing program with 24/7 emergency shelter services and
              an 18-month transitional housing program.
            </p>
            <ul>
              <li>Ages 16–24.</li>
              <li>Self-referral is accepted.</li>
              <li>
                Applicants must be willing and able to work, attend school,
                or participate in a day program. If unable, they must be
                working toward overcoming barriers to participation.
              </li>
            </ul>
            <p><strong>To apply:</strong> Call or email the program.</p>
            <p>
              Phone: <a href="tel:7804770104">780-477-0104</a>
            </p>
            <p>
              Email: <a href="mailto:msilverthorn@myencompass.ca">msilverthorn@myencompass.ca</a>
            </p>
          </InfoCard>

          <InfoCard title="Donnelly House">
            <p>Three-month transitional housing program.</p>
            <ul>
              <li>Ages 16 and older.</li>
              <li>Referral must come from Alberta Health Services or Recovery Alberta staff.</li>
              <li>Applicants must be sober at admission.</li>
              <li>Applicants cannot be in need of detox.</li>
              <li>A monthly accommodation fee applies.</li>
            </ul>
            <p>
              Potential referral sources include social workers, mental health
              therapists, addiction counsellors, occupational therapists, and
              physicians.
            </p>
            <p>
              Ask your healthcare professional about a referral to an AHS or
              Recovery Alberta community mental health or housing program.
            </p>
            <p>Phone: <a href="tel:7807571095">780-757-1095</a></p>
            <p>
              Email: <a href="mailto:smaslyk@myencompass.ca">smaslyk@myencompass.ca</a>
            </p>
          </InfoCard>

          <InfoCard title="The LOFT">
            <p>Approximately six-month transitional housing program.</p>
            <ul>
              <li>Ages 16–24.</li>
              <li>Self-referral is accepted.</li>
              <li>Applicants must be committed to sobriety.</li>
              <li>
                Residents must participate in a full-time routine, such as
                school, employment, or a paid day program, with a pathway
                toward income and independence.
              </li>
            </ul>
            <p>
              <strong>To apply:</strong> Call{" "}
              <a href="tel:7804867590">780-486-7590</a> or email{" "}
              <a href="mailto:loft@myencompass.ca">loft@myencompass.ca</a>.
            </p>
            <p>
              Application:{" "}
              <a
                href="https://www.myencompass.ca/programs/housing-programs/the-loft/"
                target="_blank"
                rel="noreferrer"
              >
                The LOFT — enCompass
              </a>
            </p>
            <p>
              <a
                href="https://www.myencompass.ca/wp-content/uploads/2026/08/LOFT-Application-Fillable-August-2026.docx"
                target="_blank"
                rel="noreferrer"
              >
                Download the LOFT application form
              </a>
            </p>
          </InfoCard>

          <InfoCard title="Youth Housing First">
            <p>
              Provides nine months of housing-related support to help youth
              obtain and maintain sustainable housing.
            </p>
            <ul>
              <li>Ages 16–24.</li>
            </ul>
            <p>
              To apply, email{" "}
              <a href="mailto:Panderson@myencompass.ca">Panderson@myencompass.ca</a>{" "}
              or call <a href="tel:7809705114">780-970-5114</a>.
            </p>
          </InfoCard>

          <div className="resource-external-link">
            <a
              href="https://www.myencompass.ca/programs/housing-programs/"
              target="_blank"
              rel="noreferrer"
            >
              Visit enCompass housing programs →
            </a>
          </div>
        </ProgramSection>

        <ProgramSection
          title="e4c"
          description="Youth housing and Housing First support."
        >
          <InfoCard title="e4c Youth Housing First">
            <ul>
              <li>Requires a referral from Homeward Trust.</li>
            </ul>
            <p>
              To request contact from Homeward Trust, use the{" "}
              <a
                href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=1Rs4V-uYL0G2IKfKGd50P4cNe8Ksu1FHh8ko1SrpxOpUMEwxNk1SRzBQRkxFUDNITjQyRUdVTVJISi4u&origin=lprLink&route=shorturl"
                target="_blank"
                rel="noreferrer"
              >
                Coordinated Access contact form
              </a>.
            </p>
            <p>
              Phone: <a href="tel:7807025267">780-702-5267</a>
            </p>
            <p>
              Email: <a href="mailto:coordinatedaccess@homewardtrust.ca">coordinatedaccess@homewardtrust.ca</a>
            </p>
            <p>
              Housing support workers can also be visited at Stanley A. Milner
              Library in downtown Edmonton.
            </p>
          </InfoCard>

          <InfoCard title="e4c Youth Housing Program">
            <ul>
              <li>Ages 14–17.</li>
              <li>An intake assessment is completed over the phone.</li>
            </ul>
            <p>
              Phone: <a href="tel:7804247543">780-424-7543</a>
            </p>
            <p>
              Email: <a href="mailto:info@e4calberta.org">info@e4calberta.org</a>
            </p>
          </InfoCard>
        </ProgramSection>

        <ProgramSection
          title="Hope Mission"
          description="Housing navigation, diversion, and Housing First connections."
        >
          <InfoCard title="Rapid Exit — Housing First">
            <p>
              Contact Hope Mission to ask about the Rapid Exit Housing First
              program and its assessment process.
            </p>
            <p>
              Phone: <a href="tel:7804222018">780-422-2018</a>
            </p>
            <p>
              Email: <a href="mailto:reception@hopemission.com">reception@hopemission.com</a>
            </p>
            <p>
              The research document identifies the Housing & Support Hub at
              Herb Jamieson Centre as the location for formal assessment:
            </p>
            <p>10014 105A Avenue NW, Edmonton, AB T5H 0M6</p>
          </InfoCard>

          <InfoCard title="Diversion & Housing Outreach Program">
            <p>
              Provides housing navigation, diversion, and connections to
              housing resources for people experiencing or at risk of
              homelessness.
            </p>
            <ul>
              <li>Housing assessments and housing placements.</li>
              <li>Identification and income support navigation.</li>
              <li>
                Focus on people who are new to the shelter system and may be
                diverted quickly.
              </li>
              <li>
                The program describes a process of moving community members
                through housing steps within 21 days or less.
              </li>
            </ul>
            <p>
              Visit the Housing & Support Hub on the second floor of the
              Herb Jamieson Centre, 10014 105A Avenue NW, Edmonton.
            </p>
            <p>
              Phone: <a href="tel:7804222018">780-422-2018</a>
            </p>
            <p>
              Email: <a href="mailto:reception@hopemission.com">reception@hopemission.com</a>
            </p>
          </InfoCard>
        </ProgramSection>

        <ProgramSection
          title="Bissell Centre"
          description="Housing navigation and support with immediate needs."
        >
          <InfoCard title="Housing support">
            <p>
              The research notes that Bissell Centre does not require a
              referral for its listed housing support.
            </p>
            <ul>
              <li>Emergency shelter placement connections.</li>
              <li>Income support navigation.</li>
              <li>Identification assistance.</li>
              <li>Direct rapid housing navigation.</li>
            </ul>
            <p>
              Address: 10527 96 Street NW, Edmonton, AB T5H 2H6
            </p>
            <p>
              Phone: <a href="tel:7804232285">780-423-2285</a>
            </p>
          </InfoCard>

          <InfoCard title="Housing Loss Prevention — Community Bridge">
            <p>
              One-time assistance intended to help prevent housing loss due
              to eviction or utility disconnection. The research describes
              this as a last-resort program after other options have been
              explored.
            </p>
            <p><strong>Requirements listed in the research:</strong></p>
            <ul>
              <li>Currently housed and facing eviction or utility disconnection.</li>
              <li>Have an active lease agreement.</li>
              <li>
                Be able to afford current housing or be willing to relocate
                to more affordable housing.
              </li>
              <li>Connect with other community resources first.</li>
              <li>Work with a case manager and review finances monthly.</li>
              <li>Provide three months of bank statements.</li>
              <li>
                Consent to staff contacting the landlord during the six-month
                case management period.
              </li>
            </ul>
            <p>
              <a
                href="https://bissellcentre.wufoo.com/forms/cbng-new-application-v20"
                target="_blank"
                rel="noreferrer"
              >
                Community Bridge application form →
              </a>
            </p>
          </InfoCard>
        </ProgramSection>

        <ProgramSection
          title="The Mustard Seed"
          description="Housing connections and community support."
        >
          <InfoCard title="Housing support">
            <p>
              The research describes The Mustard Seed as connecting clients
              with safe, affordable housing and community support.
            </p>
            <p>
              Phone: <a href="tel:7804265600">780-426-5600</a>
            </p>
            <p>
              Toll-free: <a href="tel:18334484673">1-833-448-4673</a>
            </p>
            <p>
              Email: <a href="mailto:InfoEdmonton@theseed.ca">InfoEdmonton@theseed.ca</a>
            </p>
          </InfoCard>
        </ProgramSection>
      </section>

      <section id="organizations" className="resource-content-section">
        <span className="resource-eyebrow">03 — ORGANIZATIONS</span>
        <h2>Additional housing support</h2>
        <p>
          These organizations also appear in the research as housing-related
          resources. Contact them to ask which services are currently
          available and whether they can help with your situation.
        </p>
        <div className="resource-simple-list">
          <p>Boyle Street Community Services — Sandy's Place</p>
          <p>Homeward Trust Edmonton — Coordinated Access</p>
          <p>e4c — Youth Housing First</p>
        </div>
      </section>

      <section id="important-information" className="resource-content-section">
        <span className="resource-eyebrow">04 — BEFORE APPLYING</span>
        <h2>Things to keep in mind</h2>
        <ul className="resource-check-list">
          <li>Age requirements differ between programs.</li>
          <li>Some programs accept self-referrals; others require a professional referral.</li>
          <li>Some transitional programs have sobriety or participation requirements.</li>
          <li>Some programs have accommodation fees.</li>
          <li>
            Ask about current availability, wait times, required documents,
            and transportation before visiting.
          </li>
        </ul>
      </section>
    </ResourcePageLayout>
  );
}
