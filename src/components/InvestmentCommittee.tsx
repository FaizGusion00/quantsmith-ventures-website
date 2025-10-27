import TeamCard from "./TeamCard";
import { useEffect, useRef, useState } from "react";

const InvestmentCommittee = () => {
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

  const committeeMembers = [
    {
      name: "DATO' NIK AMIN NIK ABD MAJID ISHAK",
      title: "Investment Committee Member",
      qualifications: "Capital Market and Investment Industry",
      description:
        "Recognising the fast-changing environment, our advisor supports capital market development through providing independent, focused and pragmatic research, advocacy and data-driven perspectives which can be tapped by the industry, policy makers and regulators.",
    },
    {
      name: "AYUB GHAZALI MUHAMMAD ISHAMUDIN",
      title: "Investment Committee Member",
      qualifications: "Corporate Banking and Financial Market",
      description:
        "Motivated business leader with more than 30 years of progressive experience in management and operations from Banking and Investment industries. Our Advisory Team player dedicated to helping employees improve their skills and techniques in order to reach larger goals. Visionary behind company operations and strategies. Also, they are deep understanding of how to streamline business operations and engage employees in order to reach company objectives and increase profits.",
    },
    {
      name: "MOHAMAD ISMAIL MOHD ROSSLE JAMAT",
      title: "Investment Committee Member",
      qualifications: "Corporate Governance and Regulatory",
      description:
        "More than 30 years of professional experiences serving financial services and central banking function. Extensive exposure in audit, risk management, compliance, governance, policy development, internal and regulatory controls. Serviced the Central Bank of Malaysia (BNM) for more than 10 years appointment as Reference Points (RP) for coaching on Islamic Banking, Operational Risk and AMLCFT.",
    },
  ];

  return (
    <section ref={ref} id="investment-committee" className={`py-16 sm:py-20 md:py-32 bg-background/50 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-gold">Our Investment Committee</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6">
            Investment Committee Members (ICM)
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-gold via-accent to-gold mx-auto mb-4 md:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Our experienced investment committee members bring decades of expertise across capital markets, 
            corporate banking, and regulatory governance to guide our investment decisions.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {committeeMembers.map((member, index) => (
            <div key={member.name} style={{ animationDelay: `${index * 0.1}s` }}>
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentCommittee;
