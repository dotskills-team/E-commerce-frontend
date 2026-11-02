import Link from "next/link";
import { Facebook, Instagram, Youtube, MapPin, Phone } from "lucide-react";

const topCategories = [
  { name: "MEN'S FASHION", href: "/category/mens-fashion" },
  { name: "Sweatshirt", href: "/category/sweatshirt" },
  { name: "Striped Cotton T-shirt", href: "/category/striped-cotton-t-shirt" },
  { name: "Combo Offer", href: "/category/combo-offer" },
  { name: "HOODIE", href: "/category/hoodie" },
];

const customerService = [
  { name: "Contact Us", href: "/contact" },
  { name: "Track Your Order", href: "/orders" },
  { name: "Delivery Terms", href: "/terms-and-conditions" },
  { name: "Returns & Refunds", href: "/return-policy" },
];

const company = [
  { name: "Wholesale Accounts", href: "/wholesale" },
  { name: "Dropshipping Program", href: "/dropship" },
];

export function Footer() {
  return (
    <footer className="mt-10 border-t bg-gray-50">
      <div className="container grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="text-2xl font-extrabold">
            Your<span className="text-accent">Brand</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-gray-500">
            Premium T-shirts, polo shirts and jerseys, made for everyday comfort.
            Cash on Delivery all over Bangladesh.
          </p>
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              Your store address, Dhaka, Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +880 1800-000000
            </p>
          </div>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full border p-2 hover:bg-white">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full border p-2 hover:bg-white">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="rounded-full border p-2 hover:bg-white">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterCol title="Top Categories" links={topCategories} />
        <FooterCol title="Customer Service" links={customerService} />
        <FooterCol title="Company" links={company} />
      </div>

      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-2 py-4 text-xs text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-500">
        {links.map((l) => (
          <li key={l.name}>
            <Link href={l.href} className="hover:text-accent">
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
