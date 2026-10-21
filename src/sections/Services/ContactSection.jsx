import Container from "../../components/common/Container";
import ContactForm from "../../components/other/ContactForm";
import ContactInfo from "../../components/other/ContactInfo";

export default function ContactSection() {
  return (
    <div className="max-w-[1920px]">
      <Container>
        <div className="w-[1296px] bg-[#f2f5ff] flex px-[110px] py-[72px]">
          <div className="pr-[134px]">

          <ContactInfo />
          </div>
          <div>

          <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
