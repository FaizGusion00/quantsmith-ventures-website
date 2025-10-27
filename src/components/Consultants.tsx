import TeamCard from "./TeamCard";
import { useEffect, useRef, useState } from "react";

const Consultants = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const consultants = [
    {
      name: "FAIZAL AZLEE MOHAMAD YUNUS",
      title: "IT Director",
      qualifications: "Information Technology (IT)",
      description:
        "IT Director with over 22 years of experience in financial, education, and sustainability technologies. He specializes in software architecture, full-stack development, IT operations, and project management. Currently leading IT at Malaysian Sustainable Palm Oil (MSPO), he has driven key projects like e-MSPO system development and Microsoft 365 migration. Previously, he held leadership roles at CMA Solutions, AIM Solutions, and Unitar Capital. Holding a Bachelor's in Computer Science from Universiti Putra Malaysia, he excels in Java, Angular, Spring Boot, and Agile methodologies, seeking a dynamic role in tech leadership.",
    },
    {
      name: "MUHAMMAD AIZAT BIN AZMI",
      title: "Director Finance & Accounting",
      qualifications: "Accounting, Auditing, Taxation & Finance",
      description:
        "Over 15 years of experience in accounting, auditing, taxation and finance. Notably, served The Big Group showcased his strategic acumen in analysing EBITDA and sustaining business outlets. Aizat then moved to the Oil & Gas sector, becoming Head of Finance & Accounting at Shapadu Corporation Group, overseeing a billion-ringgit project with Petronas at Pengerang, Johor. Further diversifying, Aizat served as Director at Teraju Aspirasi Sinergi Sdn Bhd, focusing on food security. Currently, he is the Executive Director for Innovation International Berhad. Aizat's career exemplifies a dynamic and accomplished finance professional.",
    },
    {
      name: "MOHD IZAN HELMI MOHAMED ASLAR",
      title: "Head of Legal",
      qualifications: "Legal & Procurement",
      description:
        "Practising lawyer, specializing in corporate and commercial matter. He is the Head of Corporate and Commercial Department in the legal firm he is practising, managing the Corporate & Commercial Department and its clients. Extensive experience in corporate and commercial matters, including infrastructure contracts and EPCC, Merger & Acquisition for SME and GLC companies, Company structuring and re-structuring, due diligence, share sales, licensing and franchising, intellectual properties and other types of commercial contracts. Previously, was the Head of Legal in a company which involves in offering investment products. Also been the legal manager for various companies, be it SMEs and also GLC. Early years of practice, has served in the Group Legal Practice of Malaysian Airlines System Sdn Bhd and advising many units and departments in MAS, such as customer relations unit, corporate communications department and MAS' subsidiary, Firefly. experienced in practising as corporate lawyer since the beginning of his career in the legal fraternity with one of top legal firm in Kuala Lumpur.",
    },
  ];

  return (
    <section ref={ref} id="consultants" className={`py-8 sm:py-12 md:py-20 lg:py-32 bg-background/50 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10 md:mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-purple-500/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-purple-500">Our Consultants</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6">
            People Behind the Services
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-purple-500 via-accent to-purple-500 mx-auto mb-4 md:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Our expert consultants bring specialized knowledge and experience across IT, finance, 
            and legal disciplines to support our clients' comprehensive business needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {consultants.map((consultant, index) => (
            <div key={consultant.name} style={{ animationDelay: `${index * 0.1}s` }}>
              <TeamCard {...consultant} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultants;
