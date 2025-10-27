import { useEffect, useRef, useState } from "react";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Area, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", value: 8 },
  { month: "Feb", value: 9.2 },
  { month: "Mar", value: 10.1 },
  { month: "Apr", value: 9.7 },
  { month: "May", value: 12.3 },
  { month: "Jun", value: 13.1 },
  { month: "Jul", value: 12.8 },
  { month: "Aug", value: 14.5 },
  { month: "Sep", value: 15.4 },
  { month: "Oct", value: 16.8 },
  { month: "Nov", value: 17.2 },
  { month: "Dec", value: 18 },
];

const PerformanceSnapshot = () => {
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

  return (
    <section ref={ref} id="performance" className={`py-16 sm:py-20 md:py-32 bg-primary text-white relative overflow-hidden ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-accent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-white">Snapshot</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
            Performance Overview
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-accent mx-auto" />
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-10 animate-slide-up">
          <ChartContainer
            config={{ 
              value: { 
                label: "Annualized Return (%)", 
                color: "hsl(33, 96%, 56%)" // Gold color for accent
              } 
            }}
            className="h-[400px] w-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={data} 
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFC940" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FFC940" stopOpacity={0.01}/>
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke="rgba(255, 255, 255, 0.1)" 
                  vertical={false}
                />
                <XAxis 
                  dataKey="month" 
                  tickLine={false} 
                  axisLine={false}
                  tick={{ fill: 'rgba(255, 255, 255, 0.7)', fontSize: 12 }}
                  tickMargin={10}
                />
                <YAxis 
                  tickLine={false} 
                  axisLine={false}
                  tick={{ fill: 'rgba(255, 255, 255, 0.7)', fontSize: 12 }}
                  domain={[0, 20]}
                  tickMargin={10}
                  tickFormatter={(value) => `${value}%`}
                />
                <ChartTooltip 
                  cursor={{ stroke: '#FFC940', strokeWidth: 2 }}
                  content={(props) => (
                    <div className="bg-black/80 backdrop-blur-sm p-3 rounded-lg border border-white/20 shadow-xl">
                      <p className="text-white font-semibold text-sm mb-1">
                        {props.payload?.[0]?.payload?.month}
                      </p>
                      <p className="text-gold font-bold text-lg">
                        {props.payload?.[0]?.value}%
                      </p>
                      <p className="text-white/70 text-xs mt-1">
                        Annualized Return
                      </p>
                    </div>
                  )}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="url(#colorValue)"
                  fill="url(#colorValue)"
                  strokeWidth={0}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#FFC940" 
                  strokeWidth={3}
                  dot={{ fill: '#FFC940', r: 4, strokeWidth: 2, stroke: '#000' }}
                  activeDot={{ r: 6, fill: '#FFC940', stroke: '#FFF', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
          
          {/* Summary Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-white/70 text-sm mb-1">Target Return</p>
              <p className="text-gold font-bold text-2xl">8-18%</p>
            </div>
            <div className="text-center">
              <p className="text-white/70 text-sm mb-1">Current Performance</p>
              <p className="text-accent font-bold text-2xl">18%</p>
            </div>
            <div className="text-center">
              <p className="text-white/70 text-sm mb-1">Risk Management</p>
              <p className="text-white font-bold text-2xl">Active</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSnapshot;
