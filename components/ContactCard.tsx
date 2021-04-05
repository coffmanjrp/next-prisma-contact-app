import Image from 'next/image';
import { Contact } from '@prisma/client';
interface ContactCardProps {
  contact: Contact;
}

function ContactCard({ contact }: ContactCardProps) {
  return (
    <>
      <div className="border rounded-lg p-4 flex">
        <div className="my-auto">
          <Image
            src={contact.avatar}
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="ml-4">
          <p className="text-xl text-gray-700">
            {contact.firstName} {contact.lastName}
          </p>
          <p className="text-gray-500">{contact.email}</p>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
