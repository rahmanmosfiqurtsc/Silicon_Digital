import Logos from '../../../assets/Trusted/logo.png'
import Logos1 from '../../../assets/Trusted/logo-1.png'
import Logos2 from '../../../assets/Trusted/logo-2.png'
import Logos3 from '../../../assets/Trusted/logo-3.png'
import Logos4 from '../../../assets/Trusted/logo-4.png'

export default function TrustedCompanies() {
  return (
    <section className="py-10">
      <h2 className="mb-6 text-center text-xl font-extrabold tracking-tight">Trusted by Leading Companies</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <img src={Logos} alt='' />
        <img src={Logos1} alt='' />
        <img src={Logos2} alt='' />
        <img src={Logos3} alt='' />
        <img src={Logos4} alt='' />
        <img src={Logos4} alt='' />
        
      </div>
    </section>
  );
}