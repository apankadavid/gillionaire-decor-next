import Header from "../components/Header";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
const faqs = [
  {
    question: "What services does Gillionaire Decor provide?",
    answer: "We provide custom curtains, Venetian blinds, zebra blinds, vertical blinds, roller blinds, curtain repairs and curtain washing.",
  },
  {
    question: "Do you repair old curtains?",
    answer: "Yes. We provide curtain repair services for old or damaged curtains where restoration is possible.",
  },
  {
    question: "Do you wash curtains?",
    answer: "Yes. Curtain washing is one of our services and is designed to help refresh and maintain your curtains.",
  },
  {
    question: "Do you provide both curtains and blinds?",
    answer: "Yes. We provide several curtain and blind solutions, including Venetian, zebra, vertical and roller blinds.",
  },
  {
    question: "Can I contact you through WhatsApp?",
    answer: "Yes. You can contact us through WhatsApp using either of our listed phone numbers.",
  },
  {
    question: "Where are you located?",
    answer: "We are located in Conca.",
  },
  {
    question: "How do I request a service?",
    answer: "Simply call or WhatsApp us, or use the contact form on our website. Tell us the service you require and provide some information about your project.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#faf8f5] text-[#1a2b4c]">
      <Header />

      <section className="mx-auto max-w-2xl px-5 py-16 sm:py-20">
        <h1 className="mb-9 text-center font-playfair text-3xl leading-tight sm:text-4xl">
          Frequently Asked Questions
        </h1>

        <div className="flex flex-col gap-5">
          {faqs.map((faq) => (
            <FadeIn key={faq.question}>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm">{faq.answer}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}