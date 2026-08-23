import Header from "../components/Header";
import Footer from "../components/Footer";

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
    <div className="bg-[#faf8f5] text-[#1a2b4c] min-h-screen">
      <Header />

      <section className="max-w-2xl mx-auto py-16 px-5">
        <h2 className="text-3xl font-playfair mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-white p-5 rounded-lg shadow">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}