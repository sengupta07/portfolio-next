import React from 'react';
import Card from './Card';
import Image from 'next/image';
import assets from '../assets';
import Link from 'next/link';

type Props = {
  startDate: string;
  endDate?: string;
  position: string;
  company: string;
  logoSrc: string;
  description: string;
  companyPage: string;
};

const formatDate = (date: string, longFormat: boolean = false): string => {
  const [year, month] = date.split('-');
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return longFormat ? `${monthNames[parseInt(month, 10) - 1]} ${year}` : `${month.padStart(2, '0')}/${year}`;
};

const ExperienceCard = ({ startDate, endDate, position, company, description, logoSrc, companyPage }: Props) => {
  const formattedStartDate = formatDate(startDate, !endDate);
  const formattedEndDate = endDate ? formatDate(endDate) : 'Now';

  return (
    <Card className="p-6 space-y-4 !bg-topForeground grid grid-cols-[1fr_2fr] items-center">
      <div className="flex flex-col text-sm">
        {endDate ? (
          <h4 className="font-medium">
            {formattedStartDate} - {formattedEndDate}
          </h4>
        ) : (
          <>
            <p>{formattedStartDate}</p>
            <h4 className="font-medium">{formattedEndDate}</h4>
          </>
        )}
      </div>

      <div className="border-l space-y-6 border-white border-opacity-5 pl-32">
        <div className="space-y-2">
          <Link
            href={companyPage}
            className="py-2 pl-2 pr-4 inline-flex text-sm backdrop-filter backdrop-blur-md rounded-full border border-opacity-10 bg-white hover:bg-transparent transition-colors duration-300 ease-in-out bg-opacity-10 text-white border-white items-center"
          >
            <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
              <Image alt={company} src={logoSrc} width={24} height={24} />
            </div>
            <p>{company}</p>
          </Link>
          <h4 className="font-medium">{position}</h4>
        </div>

        <p className="text-white opacity-70">{description}</p>
      </div>
    </Card>
  );
};

export default ExperienceCard;
