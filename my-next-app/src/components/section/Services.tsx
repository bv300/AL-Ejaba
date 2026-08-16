import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Reveal>
            <SectionTitle eyebrow="SERVICES" title="WHAT WE DO" />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.introText}>
              <p className={styles.subtitle}>Complete Solutions. One Professional Team.</p>
              <p className={styles.description}>
                We provide a wide range of technical, interior, maintenance and fit-out services for residential and commercial requirements.
              </p>
            </div>
          </Reveal>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 100}>
              <div className={styles.serviceCard}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.title}>{service.title}</h3>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.desc}>{service.description}</p>
                  {service.points && service.points.length > 0 && (
                    <ul className={styles.pointsList}>
                      {service.points.map((point) => (
                        <li key={point} className={styles.point}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}