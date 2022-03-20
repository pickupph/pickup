import { SITE_FULL_YEAR } from "../config/constants";

export default function Footer({ className }) {
  return (
    <footer className="text-footerMenu text-fs-footerMenu p-5 text-center">
      <div className="container mx-auto">
         <p>Copyright © {SITE_FULL_YEAR} Pickup.ph. This site was made with ❤️ in the Philippines.</p>
      </div>
    </footer>
  )
}