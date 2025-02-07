import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function PaymentOptions() {
  return (
    <div className="max-w-screen-xl mx-auto text-custom-green px-6 py-16 md:py-20 space-y-10">
     
      <section className="space-y-4 ">
        <h1 className="text-2xl md:text-4xl font-bold">Payment Options</h1>
        <p>
          At <strong>OAK&TEAK</strong>, we ensure a smooth and secure payment process to give you a hassle-free shopping experience. We offer multiple payment methods so you can choose the one that works best for you.
        </p>
        <p>We currently accept payments through the following methods:</p>
        <ul className="list-disc ml-5 space-y-2">
          <li><strong>Easypaisa:</strong> Convenient and quick payments via your Easypaisa app.</li>
          <li><strong>JazzCash:</strong> Fast and reliable payments through your JazzCash app.</li>
          <li><strong>Bank Transfer:</strong> Secure transfers directly to our bank account.</li>
        </ul>
      </section>

    
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Frequently Asked Questions (FAQs)</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="text-xl">
            <AccordionTrigger className="text-base md:text-lg">Can I use multiple payment methods for a single order?</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-900">
              No, we currently support one payment method per transaction. Please choose the most convenient option during checkout.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="text-lg">
            <AccordionTrigger className="text-base md:text-lg">How do I know if my payment was successful?</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-900">
              Once your payment is successfully processed, you will receive a confirmation email or SMS from us. You can also check your transaction status in your payment app.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="text-lg">
            <AccordionTrigger className="text-base md:text-lg">Is it safe to pay online?</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-900">
              Absolutely! We use secure payment gateways, and your payment details are encrypted to ensure safety.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-base md:text-lg">What happens if my payment fails?</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-900">
              If your payment fails, please retry using the same or another payment method. For further assistance, contact our support team.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-base md:text-lg">Are there any hidden charges for using these payment methods?</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-900">
              No, we do not charge any additional fees for payments made through Easypaisa, JazzCash, or Bank Transfer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-base md:text-lg">Can I cancel my payment after it&apos;s processed?</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-900">
              Payments cannot be canceled once processed. However, you can contact our support team for assistance regarding refunds or order cancellations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-base md:text-lg">What details do I need for Bank Transfer payments?</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-900">
              You will need our account number, account name, and bank name, which are provided at checkout. Use your order number as the reference for the transfer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-base md:text-lg">Do you support international payments?</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-900">
              Currently, we only support local payments through Easypaisa, JazzCash, and Bank Transfer within Pakistan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="text-base md:text-lg">Can I pay in installments?</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-900">
              We do not offer installment options at this time. Full payment is required at checkout.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
