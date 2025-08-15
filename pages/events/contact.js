// Components
import FormContact from "../../components/formContact";
import LayoutDefault from "../../components/templates/layoutDefault";
import Bottom from "../../components/bottom";

export default function Contact() {
  return (
    <LayoutDefault
      meta={{
        title: "Book a demo",
      }}
    >
      <div className="container mx-auto px-5 py-5 md:py-10 text-center">
        <h1 className="text-[40px] md:text-fs-heroHeader">Contact Us</h1>
        <p className="text-fs-body mx-auto max-w-[780px]">
          Want to see how we can help with your next food and beverage event?
          Let's set up a demo to talk about your needs.
        </p>
      </div>

      <div className="container mb-10 mx-auto px-5 py-5 md:py-10 text-center max-w-[780px]">
        <FormContact
          buttonClass={
            "text-white border hover:text-purple-300 hover:bg-[#7c3aed] hover: border-[#7c3aed] bg-[#7c3aed]"
          }
          contact_form_id="5884"
        />
      </div>

      <Bottom />
    </LayoutDefault>
  );
}
