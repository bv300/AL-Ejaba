import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";
import styles from "./Contact.module.css";

const Icon = ({ path }: { path: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
    <path d={path} />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Reveal>
            <SectionTitle eyebrow="CONTACT" title="GET IN TOUCH" />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.introText}>
              <p className={styles.subtitle}>LET&apos;S WORK TOGETHER</p>
              <p className={styles.description}>
                Let&apos;s discuss your requirements and find the right technical or interior solution for your project.
              </p>
            </div>
          </Reveal>
        </div>

        <div className={styles.contentGrid}>
          {/* Left Side: Cards */}
          <div className={styles.cardsColumn}>
            <Reveal delay={100}>
              <div className={styles.card}>
                <span className={styles.iconWrapper}><Icon path="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></span>
                <div>
                  <div className={styles.cardLabel}>FIND US</div>
                  <div className={styles.cardValue}>
                    {site.legalName}<br />
                    Naif, Deira<br />
                    Dubai, U.A.E.
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className={styles.card}>
                <span className={styles.iconWrapper}><Icon path="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></span>
                <div>
                  <div className={styles.cardLabel}>CALL US</div>
                  <div className={styles.cardValue}>
                    <a href={`tel:${site.phone1}`}>{site.phone1}</a><br />
                    <a href={`tel:${site.phone2}`}>{site.phone2}</a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className={styles.card}>
                <span className={styles.iconWrapper}><Icon path="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" /></span>
                <div>
                  <div className={styles.cardLabel}>EMAIL</div>
                  <div className={styles.cardValue}>
                    <a href={`mailto:${site.email}`}>{site.email}</a><br />
                    <a href={`mailto:${site.altEmail}`}>{site.altEmail}</a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className={styles.card}>
                <span className={styles.iconWrapper}><Icon path="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></span>
                <div>
                  <div className={styles.cardLabel}>OFFICE LOCATION</div>
                  <div className={styles.cardValue}>
                    Naif, Deira<br />
                    Dubai, U.A.E.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Map */}
          <Reveal delay={500} className={styles.mapColumn}>
            <div className={styles.mapHeader}>
              <div>
                <h3 className={styles.mapTitle}>VISIT OUR OFFICE</h3>
                <p className={styles.mapDesc}>Find {site.legalName} in Naif, Deira, Dubai.</p>
              </div>
              <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
                OPEN IN MAPS &rarr;
              </a>
            </div>
            <div className={styles.mapWrapper}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.438258385758!2d55.30232255!3d25.26691455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433f48a1768b%3A0xc301f2f811df6b5c!2sNaif%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}