import { Mail, MapPin, Phone } from "lucide-react";
import Facebook from "../../assets/Services/Ms.png";
import Instagram from "../../assets/Services/Ms-2.png";
import Linkedin from "../../assets/Services/Ms-1.png";
import Twitter from "../../assets/Services/hover.png";



export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-[34px]">
        Get in Touch
      </h2>
      <p className="mt-4 max-w-sm text-sm leading-[21px] text-slate-500">
        Have a project in mind? To request a quote contact us directly or fill
        out the form and let us know how we can help.
      </p>

      <h3 className="mt-12 text-2xl font-bold text-slate-950">Contact Info</h3>
      <ul className="mt-5 space-y-3 text-sm text-slate-700">
        <li className="flex items-center gap-2">
          <Phone size={15} className="text-indigo-500" />
          <a href="tel:+14065550120" className="hover:text-indigo-600">
            (406) 555-0120
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Mail size={15} className="text-indigo-500" />
          <a href="mailto:example@gmail.com" className="hover:text-indigo-600">
            example@gmail.com
          </a>
        </li>
        <li className="flex items-start gap-2">
          <MapPin size={15} className="mt-0.5 shrink-0 text-indigo-500" />
          <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
        </li>
      </ul>

      <div className="mt-14 flex gap-3 items-center">
        <img src={Facebook} alt=""></img>
        <img src={Twitter} alt=""></img>
        <img src={Linkedin} alt=""></img>
        <img src={Instagram} alt=""></img>
      </div>
    </div>
  );
}
