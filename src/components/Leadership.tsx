import TeamCard from "./TeamCard";
import { useEffect, useRef, useState } from "react";

const Leadership = () => {
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
  const leaders = [
    {
      name: "MOHD AZMIR MOHD SHAHIDAN",
      title: "Founder / Chairman",
      qualifications: "CFA, CMSRL",
      description:
        "He has more than 18 years of professional experience encompassing areas of analysis, product research and development. He is extensively involved in the Malaysian Capital and Financial markets and has been part of a dynamic team responsible for analysis on Quantitative Strategies, Asset Allocation Recommendations, Risk Management and Attribution Analysis, Economic Outlooks, and the generation of product ideas for various asset classes. From his previous posting in a Fund Management firm, he was tasked to perform daily investment activities in line with the firm's mandate such as Trading, Allocation, Conformation and Reporting of Security Transactions. He was responsible for analysing, evaluating and recommending investment actions on listed companies within the stock universe. He has conducted Due Diligence on companies and industries by researching, reviewing financial statements and market data. He has also set the comprehensive Risk Appetite Statements (RAS) and Asset Liability Management (ALM) framework as a guide for achieving the optimal structure in addressing risk, ensuring all Key Risk Indicators (KRI) required for reporting to regulators including but not limited to Securities Commission Malaysia are accurate and timely, for any potential areas of concern and to meet standards of regulatory expectations. He holds a Chartered Financial Analyst (CFA) and also Capital Markets Services Representative Licence (CMSRL).",
    },
    {
      name: "MUHAMMAD SHAZREEN BIN MOHD SHAHIDAN",
      title: "Managing Director",
      qualifications: "BA (Hons) Industrial Management",
      description:
        "Muhammad Shazreen bin Mohd Shahidan completed a BA (Hons) in Industrial Management at University Selangor. He started his career as an HR Executive at Encorp Berhad, where he successfully implemented job rotation to enhance efficiency and teamwork. This achievement led to him being awarded Best New Employee in 2014. Driven by his passion for financial management, he joined Coshare Holding Berhad as a Credit Administration Executive and effectively reduced Aging Debtors by more than 70% within a year. He then moved to UNITAR International University as a Senior Executive and was subsequently promoted to Assistant Manager due to consistently exceeding KPI requirements. With almost 10 years of managerial experience in the construction and education sectors, he specializes in forensic accounting and financial analysis. In 2022, he became the Vice President at Ar-Rizqi Capital Berhad, leveraging his expertise in capital markets and investment strategies. Last position before joining Quantsmith Ventures Sdn. Bhd., he serves as the Chief Financial Officer at Tanjak Mega Holding Berhad, overseeing financial operations and leveraging his skills in forensic research, financial analysis, and reporting in the capital market industry.",
    },
    {
      name: "AZMY ABDUL RAHMAN",
      title: "Executive Director",
      qualifications: "Web & Design Background",
      description:
        "Azmy Abdul Rahman is a results-driven professional with extensive experience in corporate management, marketing, and market analysis. With a strong academic background in Web and Design, Azmy has showcased his expertise in content management and programming during his tenure at esteemed companies such as Astro and Media Prima Bhd. His contributions to notable projects like iAOTG and the Merdeka & Malaysia Day Sales campaign have demonstrated his ability to drive successful outcomes. Additionally, Azmy's involvement with Quantsmith Ventures Sdn Bhd, where he actively participated in market analysis for capital markets, further showcases his analytical skills and understanding of market dynamics. With a deep understanding of digital marketing strategies and a creative mindset, Azmy is well-equipped to excel in any corporate role focused on driving growth and achieving organizational objectives.",
    },
    {
      name: "QURRASHIDAH ANIS BAHARUL HAFIDZ",
      title: "Executive Director",
      qualifications: "Bachelor of Economics",
      description:
        "Qurrashidah Anis Baharul Hafidz, a Bachelor of Economics graduate from the University of Malaya, began her career as an Executive at UNITAR International University in 2014. After pursuing her economic degree, getting married, and becoming a mother of two, she reconnected with her passion for economics and transitioned to an Analyst role. In 2022, she was promoted to Senior Analyst, where she implemented an economic framework within the organization, updated marketing materials for investment opportunities, and maintained databases for decision-making support. She sought to engage with influential decision-makers and thought leaders, leading her to join Tanjak Mega Holding Berhad as a Manager. In this position, she excelled in Financial Planning and Analysis, formulating effective business strategies, preparing budgets, and considering economic factors to drive company development.",
    },
    {
      name: "ROSLI MOHAMAD AMIN",
      title: "Director",
      qualifications: "MIA, MBA in Finance",
      description:
        "Rosli Mohamad Amin is a highly experienced finance and corporate governance professional with over 25 years in financial management, treasury, auditing, taxation, and corporate reporting. His expertise spans regulatory compliance, risk assessment, business strategy, and investment management across industries such as finance, education, pharmaceuticals, and construction. He has held key leadership roles at Pembangunan Ekuiti, Unitar International University, Pharmaniaga, and MYA Construction, overseeing financial reporting, procurement, stakeholder relations, and corporate governance. At Unitar, he led student finance services, revenue management, and zakat fund administration, while at Pharmaniaga, he managed treasury, general ledger, and accounts receivable. As Head of Finance at Pembangunan Ekuiti, he ensured regulatory compliance with the Securities Commission (SC), SSM, and investors, handling financial reporting and HR functions. He also played a crucial role in implementing ISO standards and enhancing governance practices in previous roles. A Malaysian Institute of Accountants (MIA) member, he holds an MBA in Finance and is proficient in financial strategy, business development, and corporate compliance. Skilled in SAP, Oracle, and SQL Accounting, Rosli is committed to driving financial excellence and governance.",
    },
  ];

  return (
    <section ref={ref} id="leadership" className={`py-8 sm:py-12 md:py-20 lg:py-32 bg-background ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6">
            Leadership Team
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-accent mx-auto mb-4 md:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Our experienced leadership team brings decades of combined expertise in financial management, 
            capital markets, and corporate strategy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {leaders.map((leader, index) => (
            <div key={leader.name} style={{ animationDelay: `${index * 0.1}s` }}>
              <TeamCard {...leader} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
