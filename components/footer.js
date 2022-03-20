import { SITE_FULL_YEAR } from "../config/constants";

export default function Footer({ className }) {
  return (
    <footer className="text-footerMenu text-fs-footerMenu px-5 py-6 text-center">
      <div className="px-5 max-w-1184px mx-auto">
         <p>Copyright © {SITE_FULL_YEAR} Pickup.ph. This site was made with ❤️ in the Philippines.</p>
      </div>
    </footer>
  )
}