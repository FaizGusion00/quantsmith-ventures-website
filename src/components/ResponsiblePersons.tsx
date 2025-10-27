import TeamCard from "./TeamCard";
import { useEffect, useRef, useState } from "react";

const ResponsiblePersons = () => {
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

  const cmsrlHolders = [
    {
      name: "ANUAR CHE WAN",
      title: "CMSRL - Fund Manager",
      qualifications: "Portfolio Management",
      description:
        "Holds a Bachelor of Arts in Business Administration (Hons.) from University of Bolton, UK. He also holds a Diploma in Financial Markets of Affiliate Securities Institute Australia (SIA). He was a Senior Portfolio Manager in PNB's International Investment department from 1992 to 2000, where he was Head of European Region. He became Chief Dealer from 2000 to 2007 for Pegurusan Pelaburan ASN Berhad. He joined RHB Asset Management Sdn Bhd as Associate Director of Market Operations from 2007 to 2016 where he was principally supervising RHB dealer's activities in equity, money market, fixed income and foreign exchange trades. Anuar joined MIDF Amanah Investment Bank Bhd (MIDF) from 2016 to 2018 as Head of Quantitative Analytics in the Research Department. Over 38 years of his career path, he had exhibited great competency and honesty.",
    },
    {
      name: "ANWAR AB. GHANI",
      title: "CMSRL - Corporate Finance",
      qualifications: "Corporate Finance",
      description:
        "Directly involve in several cross-border project finance advisory, project, bid advisory and M&A initiatives in several countries including India, Pakistan, Bangladesh, Sri Lanka, Vietnam and Indonesia. Licensed capital market outfit in Jakarta undertaking stock broking, investment advisory and corporate finance activities. Corporate banking experience with major merchant bank. Holds a Master's Degree in Business Administration (Finance), Southern Illinois University, USA and Double Degree conferring a B. Sc Degree in Finance and Bachelor Degree in Business Economics, Southern Illinois University, USA. Also qualified Share dealing representative license with Bapepam, Indonesia.",
    },
    {
      name: "HASFARIS ABDUL HAMID",
      title: "CMSRL - Remisier",
      qualifications: "Maybank Investment Bank Berhad",
      description:
        "As Capital Market Holder License, have been more than 24- years in the investments banking experience with leverage on integrated trading platforms and be equipped with the necessary client acquisitions skill and trading techniques to build business growth. Also have been support portfolio growth needs in local / global markets to make sound interest in capital market industry. His duties include developing, maintaining and servicing the institutional client base as well as a group of high net worth individuals. His experience included recruiting remisiers, underwriting initial price offers, arranging financing for public listed company and handling private placement of substantial block of shares. He also responsible for analyzing evaluating and recommending investment actions on listed companies within the stock universe. Devise and perform our own primary research methods, keeping abreast of trends and development. On stock analysis, he perform on various functions, including utilizing spreadsheets and other forms of software to examine the securities of companies in various industries, as well as considering the financial results, market prices, and industry factors that might affect the price of a company's stock or its investments.",
    },
    {
      name: "STEVEN LEE",
      title: "CMSRL - Remisier",
      qualifications: "RHB Investment Bank Berhad",
      description:
        "Seasoned finance professional with over 10 years of experience in the industry. Currently serving as a Remisier at RHB Investment Bank Berhad, Steven specializes in portfolio management, equity markets, and risk management. In this role, he provides personalized investment advice and executes trades, helping clients achieve their financial goals through strategic investment decisions and thorough market analysis. A pivotal role in managing client portfolios, conducting financial analyses, and advising on investment opportunities.",
    },
    {
      name: "MD HASRIN MD HASSIM",
      title: "CMSRL - Remisier",
      qualifications: "Public Investment Bank Berhad",
      description:
        "Remisier and Dealer's Representative since 1992. He carries with him 30 years of experience, multiple expertise and several leadership roles in the field of capital market, investment and business management. Previously, served as a Board of Trustee for BDREF with RM5 million fund acquired from Capital Market Development Fund (CMDF) for the purpose of enhancing the professional skills and technical knowledge of Bumiputera Remisiers and Dealer's Representatives so as to increase their value to the Malaysian capital market.",
    },
  ];

  return (
    <section ref={ref} id="responsible-persons" className={`py-16 sm:py-20 md:py-32 bg-background ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-accent">Capital Markets Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6">
            Our Responsible Persons
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-accent mx-auto mb-4 md:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Our licensed capital market professionals are committed to providing expert guidance 
            and specialized services across fund management, corporate finance, and equity markets.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {cmsrlHolders.map((holder, index) => (
            <div key={holder.name} style={{ animationDelay: `${index * 0.1}s` }}>
              <TeamCard {...holder} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponsiblePersons;
