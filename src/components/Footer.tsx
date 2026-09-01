import React, { useState } from "react";
import { ActiveTab } from "../types";

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenPolicyModal?: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenPolicyModal,
}) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <footer
      id="app-footer"
      className="w-full bg-[#191715] text-[#ffffff] border-t border-[#7e756f]/30 mt-24 pt-20 pb-16 px-5 md:px-12"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center">
        {/* Newsletter Signup in editorial style */}
        <div className="max-w-md w-full mb-16 px-4">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[#97928f] mb-3 font-medium">
            The Editorial Journal
          </p>
          <h4 className="text-2xl font-serif mb-3 text-white">
            Receive Seasonal Invitations
          </h4>
          <p className="text-[14px] text-[#97928f] mb-6">
            Subscribers receive private early access to lookbooks, capsule
            drops, and bespoke editorial previews.
          </p>

          {subscribed ? (
            <div className="bg-[#2e2b29] border border-[#cfc4bd]/40 p-4 rounded-sm text-sm text-[#eae1da] transition-all">
              ✓ Thank you for subscribing. Your invitation has been dispatched.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-[#2e2b29] border border-[#7e756f] text-white text-sm px-4 py-3 placeholder:text-[#97928f] focus:outline-none focus:border-[#eae1da] rounded-xs"
              />
              <button
                type="submit"
                className="bg-[#eae1da] text-[#191715] px-6 py-3 text-[12px] uppercase tracking-widest font-medium hover:bg-white transition-colors cursor-pointer rounded-xs"
              >
                Join
              </button>
            </form>
          )}
        </div>

        {/* Brand Mark */}
        <button
          id="footer-brand-title"
          onClick={() => {
            setActiveTab("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-3xl md:text-4xl font-serif font-bold tracking-tighter text-white hover:opacity-90 transition-opacity mb-8 cursor-pointer"
        >
          Danish Vogue
        </button>

        {/* Primary Category Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[12px] uppercase tracking-widest text-[#d8cec6] font-medium mb-8">
          <button
            onClick={() => {
              setActiveTab("shop");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-white transition-colors cursor-pointer"
          >
            All Shop
          </button>
          <button
            onClick={() => {
              setActiveTab("clothing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Clothing
          </button>
          <button
            onClick={() => {
              setActiveTab("footwear");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Footwear
          </button>
          <button
            onClick={() => {
              setActiveTab("accessories");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Accessories
          </button>
          <button
            onClick={() => {
              setActiveTab("lookbook");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Lookbook
          </button>
          <button
            onClick={() => {
              setActiveTab("sale");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-[#ba1a1a] hover:text-red-400 transition-colors cursor-pointer font-bold"
          >
            Sale
          </button>
        </div>

        {/* Legal and Support Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-[13px] text-[#97928f] mb-10 tracking-wide">
          <button
            onClick={() =>
              onOpenPolicyModal
                ? onOpenPolicyModal("Privacy Policy")
                : setActiveTab("home")
            }
            className="hover:text-white transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <button
            onClick={() =>
              onOpenPolicyModal
                ? onOpenPolicyModal("Terms of Service")
                : setActiveTab("home")
            }
            className="hover:text-white transition-colors cursor-pointer"
          >
            Terms of Service
          </button>
          <button
            onClick={() =>
              onOpenPolicyModal
                ? onOpenPolicyModal("Shipping & Returns")
                : setActiveTab("home")
            }
            className="hover:text-white transition-colors cursor-pointer"
          >
            Shipping & Returns
          </button>
          <button
            onClick={() =>
              onOpenPolicyModal
                ? onOpenPolicyModal("Contact Us")
                : setActiveTab("home")
            }
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact Us
          </button>
        </nav>

        {/* Copyright */}
        <p className="text-[11px] tracking-[0.15em] text-[#97928f]/60 uppercase">
          © 2026 Danish Vogue EDITORIAL. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};
