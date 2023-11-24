import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ShippingPolicyAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full mt-10 bg-white">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is NootroStacker?</AccordionTrigger>
        <AccordionContent>
          NootroStacker is a platform designed for nootropic enthusiasts and
          experts. It allows you to create, customize, and track your own
          nootropic stacks to enhance cognitive performance and mental
          well-being.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How does NootroStacker work?</AccordionTrigger>
        <AccordionContent>
          NootroStacker offers a user-friendly interface that enables you to
          select and customize various nootropics, creating personalized stacks.
          You can track the effectiveness of your stacks and adjust them as
          needed to optimize your cognitive performance.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Are there any fees to use NootroStacker?
        </AccordionTrigger>
        <AccordionContent>
          No, NootroStacker is currently free to use. We believe in providing a
          valuable service to the nootropic community without any additional
          costs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Is my data safe and private on NootroStacker?
        </AccordionTrigger>
        <AccordionContent>
          Absolutely. We take your privacy and data security seriously. Your
          personal information and stack configurations are encrypted and stored
          securely. We will never share or sell your data.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          Can I share my nootropic stack configurations with others?
        </AccordionTrigger>
        <AccordionContent>
          Yes, you can choose to share your nootropic stack configurations with
          the NootroStacker community or specific users. It&apos;s a great way
          to exchange ideas and get feedback.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          Do you provide guidance on which nootropics to include in my stack?
        </AccordionTrigger>
        <AccordionContent>
          While we do not provide specific medical or nootropic recommendations,
          our platform offers information on various nootropics and their
          effects. You should always consult with a healthcare professional
          before creating a new stack.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>
          Can I access NootroStacker on mobile devices?
        </AccordionTrigger>
        <AccordionContent>
          Yes, NootroStacker is designed to be mobile-responsive. You can access
          and use it on your smartphone or tablet for convenience on the go.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ShippingPolicyAccordion;
