import { useState } from "react";

const inputClass = "mt-1.5 w-full rounded-md border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-md w-[526px] sm:p-7">
      <div>
        <label htmlFor="service" className="text-sm font-medium text-slate-900">Service</label>
        <select id="service" name="service" required defaultValue="" className={inputClass}>
          <option value="" disabled>Choose the service you are interested in</option>
          <option>Web Design</option>
          <option>Web Development</option>
          <option>Mobile App Development</option>
          <option>Product Consulting</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="fullName" className="text-sm font-medium text-slate-900">Full name</label>
        <input id="fullName" name="fullName" autoComplete="name" required className={inputClass} />
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="text-sm font-medium text-slate-900">Email address</label>
        <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-slate-900">Message</label>
        <textarea id="message" name="message" rows="3" required placeholder="Tell us about your project" className={`${inputClass} resize-y`} />
      </div>

      <label className="mt-6 flex items-start gap-2 text-sm leading-5 text-slate-500">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-indigo-500" />
        <span>I agree to the <a href="#terms" className="text-indigo-500 underline">Terms &amp; Conditions</a>.</span>
      </label>

      <button type="submit" className="mt-6 rounded-md bg-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2">
        Send request
      </button>
      {submitted && (
        <p role="status" className="mt-4 text-sm text-green-700">
          Thanks! Your form is validated. Connect it to your backend or form service to send the request.
        </p>
      )}
    </form>
  );
}