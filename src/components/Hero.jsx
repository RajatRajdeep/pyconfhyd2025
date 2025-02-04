import Image from 'next/image';

import { Heading, Paragraph, Span } from '@/components/Typography';
import Icon from '@/components/Icon';
import { CONFERENCE, ASSETS } from '@/conference';

const Hero = () => {
  return (
    <section
      className="w-full"
      style={{
        backgroundImage: `url(${ASSETS.heroBannerUrl})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        ariaLabel: ASSETS.heroBannerAlt,
      }}
    >
      <div className="flex flex-col py-6 items-center w-11/12 lg:w-5/6 mx-auto">
        {/*  For SEO */}
        <Heading tagLevel={1} level={1} className="hidden">
          {CONFERENCE.title}
        </Heading>
        <div className="relative w-full sm:w-3/4 md:w-1/2 aspect-[2/1]">
          <Image
            src={ASSETS.logoUrl}
            alt={ASSETS.logoAlt}
            priority={true}
            fill
          />
        </div>
        <div className="flex items-center">
          <Icon
            name="Calendar"
            size={26}
            className="text-secondary-600 dark:text-secondary-400"
          />
          <Span
            level={1}
            className="text-center font-semibold ml-2 text-secondary-600 dark:text-secondary-400"
          >
            {CONFERENCE.dates}
          </Span>
        </div>
        <Span
          level={3}
          className="text-center font-semibold ml-2 mt-2 text-secondary-600 dark:text-secondary-400"
        >
          Conference: {CONFERENCE.conferenceDate} | Venue:{' '}
          {CONFERENCE.conferenceVenue}
        </Span>
        <Span
          level={3}
          className="text-center font-semibold ml-2 mt-2 text-secondary-600 dark:text-secondary-400"
        >
          Workshop: {CONFERENCE.workshopDate} | Venue:{' '}
          {CONFERENCE.workshopVenue}
        </Span>
        <Paragraph className="mt-3 mb-6 text-center text-gray-600 dark:text-gray-400">
          {CONFERENCE.announcement}
        </Paragraph>
      </div>
    </section>
  );
};

export default Hero;
