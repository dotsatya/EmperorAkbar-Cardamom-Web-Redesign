import React from "react";
import { Mail, Phone, ShieldCheck } from "lucide-react";

interface PolicySection {
  heading?: string;
  paragraphs: string[];
}

interface PolicyLayoutProps {
  title: string;
  subtitle?: string;
  introduction?: string;
  sections: PolicySection[];
  supportEmail?: string;
  badge?: string;
  breadcrumb?: string;
}

// Helper function to turn URLs, emails, and phone numbers into clickable links
function renderFormattedParagraph(text: string) {
  // Check if text is just a URL
  if (text.startsWith("http://") || text.startsWith("https://")) {
    return (
      <a
        href={text}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1b4b36] font-medium underline underline-offset-4 hover:text-[#d4af37] transition-colors break-all"
      >
        {text}
      </a>
    );
  }

  // Regex to match URLs, emails, and phone numbers
  const tokenRegex = /(https?:\/\/[^\s)]+)|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(\+91\s?\d{5}\s?\d{5})/g;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const token = match[0];
    if (match[1]) {
      // URL
      parts.push(
        <a
          key={match.index}
          href={token}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1b4b36] font-semibold underline underline-offset-2 hover:text-[#d4af37] transition-colors"
        >
          {token}
        </a>
      );
    } else if (match[2]) {
      // Email
      parts.push(
        <a
          key={match.index}
          href={`mailto:${token}`}
          className="text-[#1b4b36] font-semibold underline underline-offset-2 hover:text-[#d4af37] transition-colors"
        >
          {token}
        </a>
      );
    } else if (match[3]) {
      // Phone
      const cleanPhone = token.replace(/\s+/g, "");
      parts.push(
        <a
          key={match.index}
          href={`tel:${cleanPhone}`}
          className="text-[#1b4b36] font-semibold underline underline-offset-2 hover:text-[#d4af37] transition-colors"
        >
          {token}
        </a>
      );
    }
    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return <>{parts}</>;
}

export default function PolicyLayout({
  title,
  subtitle,
  introduction,
  sections,
  supportEmail = "birbal@emperorakbar.com",
}: PolicyLayoutProps) {
  return (
    <div className="font-sans bg-bg-primary min-h-screen flex flex-col">
      <main className="flex-1 pt-10 md:pt-16 pb-20 px-4 md:px-6 max-w-5xl mx-auto w-full">
        {/* Title and Heading Structure matching store & recipes */}
        <div className="w-full text-right md:text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-800 uppercase tracking-wide mb-4">
            {title}
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] ml-auto mr-0 md:mx-auto mb-4 md:mb-6"></div>
          {subtitle && (
            <p className="text-stone-500 font-serif italic text-base sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {/* Policy Content Card */}
        <div className="bg-white rounded-2xl md:rounded-3xl border border-stone-200/70 shadow-sm p-6 sm:p-10 md:p-12 divide-y divide-stone-100">
        
          {sections.map((section, idx) => {
            const hasHeading = Boolean(
              section.heading && section.heading.trim().length > 0
            );

            return (
              <section
                key={idx}
                className={`${idx === 0 && !introduction ? "pt-0" : "pt-8 sm:pt-10"} ${
                  idx === sections.length - 1 ? "pb-0" : "pb-8 sm:pb-10"
                }`}
              >
                {hasHeading && (
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-800 mb-3 md:mb-4">
                    {section.heading}
                  </h2>
                )}

                <div className="space-y-4 text-stone-600 leading-relaxed text-sm sm:text-base">
                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {renderFormattedParagraph(para)}
                    </p>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Need Assistance Contact Box */}
        <div className="mt-10 bg-gradient-to-br from-[#1b4b36] to-[#0e271c] text-white rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 hidden sm:flex">
              <ShieldCheck className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-white mb-1">
                Have questions or need assistance?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300">
                Our customer care team is always here to help ensure your satisfaction.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`mailto:${supportEmail}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#1b4b36] hover:bg-[#d4af37] hover:text-white transition-all text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Support</span>
            </a>
            <a
              href="tel:+919699196991"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-xs font-bold uppercase tracking-wider"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 96991 96991</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
