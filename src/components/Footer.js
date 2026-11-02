import Link from "next/link";
import Logo from "./Logo";
import { APP_URL } from "@/lib/config";

export default function Footer() {
  const appUrl = APP_URL;
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm text-slate-400">
            Helping independent hotels, resorts and homestays keep 100% of their
            direct booking revenue.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/#features" className="hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link href="/demo" className="hover:text-white">
                Live Demo
              </Link>
            </li>
            <li>
              <Link href="/#calculator" className="hover:text-white">
                ROI Calculator
              </Link>
            </li>
            <li>
              <a href={appUrl} className="hover:text-white">
                Hotelier Admin Login
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">
            Legal &amp; Compliance
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:text-white">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Contact</h4>
          <p className="mt-4 text-sm">
            <a href="mailto:support@mail.purebook.in" className="hover:text-white">
              support@mail.purebook.in
            </a>
            <br />
            <a href="tel:+916305110174" className="hover:text-white">
              +91 6305110174
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} PureBook. All rights reserved.
      </div>
    </footer>
  );
}
