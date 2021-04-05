import { useState } from 'react';
import Head from 'next/head';
import AddContactForm from '../components/AddContactForm';
import ContactCard from '../components/ContactCard';

import { PrismaClient, Contact, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

async function saveContact(contact: Prisma.ContactCreateInput) {
  const res = await fetch('/api/contacts', {
    method: 'POST',
    body: JSON.stringify(contact),
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return await res.json();
}

export default function Home({ initialContacts }) {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);

  console.log(contacts);
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
          <AddContactForm
            onSubmit={async (data, e) => {
              try {
                await saveContact(data);
                setContacts([...contacts, data]);
                e.target.reset();
              } catch (err) {
                console.log(err);
              }
            }}
          />
        </section>
        <section className="w-2/3 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-gray-700">Contacts</h2>
          </div>
          {contacts.map((contact: Contact, index: number) => (
            <div className="mb-3" key={index}>
              <ContactCard contact={contact} />
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const contacts: Contact[] = await prisma.contact.findMany();

  return { props: { initialContacts: contacts } };
}
