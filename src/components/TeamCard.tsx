import { Award } from "lucide-react";

interface TeamCardProps {
  name: string;
  title: string;
  description: string;
  qualifications?: string;
  imageSrc?: string;
}

const TeamCard = ({ name, title, description, qualifications, imageSrc }: TeamCardProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-medium border border-border overflow-hidden hover:shadow-large hover:border-accent/30 transition-all duration-500 animate-scale-in group cursor-pointer">
      {/* Image Placeholder */}
      <div className="aspect-[4/5] bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center relative overflow-hidden">
        {imageSrc ? (
          <img src={imageSrc} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="text-center p-6 md:p-8">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full gradient-accent flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl md:text-4xl font-heading font-bold text-white">
                {name.split(' ')[0].charAt(0)}
              </span>
            </div>
            <Award className="w-10 h-10 md:w-12 md:h-12 text-accent/30 mx-auto" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-2">
          {name}
        </h3>
        <div className="inline-block px-2.5 py-1 md:px-3 bg-accent/10 border border-accent/30 rounded-full mb-3 md:mb-4">
          <p className="text-xs md:text-sm font-medium text-accent">{title}</p>
        </div>
        
        {qualifications && (
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <Award className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold group-hover:scale-110 transition-transform duration-300" />
            <p className="text-xs md:text-sm font-medium text-gold">{qualifications}</p>
          </div>
        )}
        
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-5 md:line-clamp-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
