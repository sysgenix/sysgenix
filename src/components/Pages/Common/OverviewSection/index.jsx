import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";


export default function OverviewSection({
  titleProps,
  paragraphs = [],
  features = [],
  className = "",
}) {
  return (
    <section className={`relative py-28 bg-gray-50 overflow-hidden ${className}`}>
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#fc1660]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] -left-40 w-[500px] h-[500px] bg-[#1e3a52]/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          
          {/* Section Header */}
          <SectionTitle {...titleProps} />

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Paragraphs */}
            <div className="lg:col-span-7 space-y-8 text-gray-600 leading-relaxed">
              {paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            {/* Right: Feature Points */}
            {features.length > 0 && (
              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 divide-y">
                  {features.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-5 p-6 hover:bg-gray-50 transition-colors"
                    >
                      {item.icon && (
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] flex items-center justify-center text-white flex-shrink-0">
                          <item.icon size={22} />
                        </div>
                      )}

                      <div>
                        <h4 className="text-lg font-bold text-[#1e3a52] mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </Container>
    </section>
  );
}
