import Image from 'next/image';
import React from 'react';
import { clients } from '@/app/data/clients.data';

type Props = {};

const Clients = (props: Props) => {
  return (
    <div className="flex justify-center opacity-20 gap-20 mt-16">
      {clients.map((client, index) => (
        <Image alt={client.name} key={index} src={client.src} width={168} height={69} />
      ))}
    </div>
  );
};

export default Clients;
