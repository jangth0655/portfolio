import React from "react";

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <section className="bg-gray-900">
      <main className="px-6 py-10">
        <h1 className="text-white">Contact</h1>
      </main>
    </section>
  );
};

export default Contact;
