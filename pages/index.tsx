import { useState } from 'react';
import Head from 'next/head';
import AddContactForm from '../components/AddContactForm';
import ContactCard from '../components/ContactCard';
import contacts from './api/contacts';

export default function Home() {
  const [contacts, setContacts] = useState('');

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <title>Next Prisma Contact App</title>
      </Head>
      <div className="flex">
        <section className="w-1/3 bg-gray-800 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-white">Add a Contact</h2>
          </div>
          <AddContactForm onSubmit={''} />
        </section>
        <section className="w-2/3 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-gray-700">Contacts</h2>
          </div>
          {contacts.map((card, index) => (
            <div className="mb-3" key={index}>
              <ContactCard contact={card} />
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
