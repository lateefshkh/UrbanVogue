import React from "react";

interface PolicyModalProps {
  title: string | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ title, onClose }) => {
  if (!title) return null;

  const getContent = () => {
    switch (title) {
      case "Privacy Policy":
        return (
          <div className="space-y-4 text-xs text-[#4c4540] leading-relaxed">
            <p>
              Danish Vogue is committed to safeguarding personal data. We
              collect order processing details, preference indicators, and
              telemetry solely to enhance your bespoke shopping experience.
            </p>
            <p>
              We do not sell personal information to third parties. All
              transactional records are encrypted using 256-bit TLS protocols.
            </p>
            <p>
              For inquiries regarding data erasure or account preferences,
              contact our concierge at privacy@urbanvogue-editorial.com.
            </p>
          </div>
        );
      case "Terms of Service":
        return (
          <div className="space-y-4 text-xs text-[#4c4540] leading-relaxed">
            <p>
              All garments, lookbook imagery, editorial copy, and typography
              displayed on Danish Vogue are proprietary and protected under
              international copyright conventions.
            </p>
            <p>
              Prices are denominated in USD and subject to seasonal inventory
              adjustments. Orders are confirmed upon dispatch verification.
            </p>
          </div>
        );
      case "Shipping & Returns":
        return (
          <div className="space-y-4 text-xs text-[#4c4540] leading-relaxed">
            <p>
              <strong>Complimentary Shipping:</strong> Orders over $150 qualify
              for carbon-neutral express courier shipping worldwide.
            </p>
            <p>
              <strong>Tailoring Care:</strong> All tailored suits, overcoats,
              and leather goods arrive in breathable garment bags with bespoke
              cedar hangers.
            </p>
            <p>
              <strong>30-Day Returns:</strong> Items may be returned within 30
              days of delivery in pristine condition with security tags intact.
            </p>
          </div>
        );
      case "Contact Us":
        return (
          <div className="space-y-4 text-xs text-[#4c4540] leading-relaxed">
            <p>
              <strong>Client Concierge:</strong> Monday – Saturday, 8:00 AM –
              8:00 PM EST.
            </p>
            <p>
              <strong>Direct Line:</strong> +1 (800) 842-8926
            </p>
            <p>
              <strong>Editorial Inquiries:</strong>{" "}
              concierge@urbanvogue-editorial.com
            </p>
            <p>
              <strong>Flagship Showroom:</strong> 450 Madison Avenue, New York,
              NY 10022
            </p>
          </div>
        );
      default:
        return (
          <p className="text-xs text-[#4c4540]">
            Information currently unavailable.
          </p>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-[#fdf8f7] border border-[#cfc4bd] p-8 rounded-xs shadow-2xl">
        <div className="flex justify-between items-center mb-6 border-b border-[#cfc4bd]/40 pb-4">
          <h3 className="text-2xl font-serif text-[#191715]">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 text-[#4c4540] hover:text-[#191715]"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {getContent()}

        <button
          onClick={onClose}
          className="w-full mt-6 py-3 bg-[#191715] text-white text-xs uppercase tracking-widest font-medium rounded-xs"
        >
          Close
        </button>
      </div>
    </div>
  );
};
