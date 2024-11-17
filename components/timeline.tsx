import { UserIcon } from '@heroicons/react/solid'; 
import { ArrowLeft, ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

interface Event {
  date: string;
  title: string;
  location: string;
}

interface TimelineProps {
  events: Event[];
}

const TimeLine: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl text-center sm:text-5xl font-semibold mb-20 mt-36">
          My TimeLine
        </h1>
      {/* Vertical Line (Progress Bar) - Positioned in the center */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-200 dark:bg-gray-600"></div>

      {/* Timeline Events */}
      <div className="space-y-16">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row ${
              index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
            } items-start relative`}
          >
            {/* Event Circle with Icon (on the center line) */}
            <div className="w-8 h-8 rounded-full bg-zinc-950 dark:bg-zinc-300 absolute left-1/2 transform -translate-x-1/2 -mt-2 flex items-center justify-center">
              <UserIcon className="w-5 h-5 text-white" />{/* Example icon */}
            </div>

            {/* Event Content: Left or Right Side */}
            <div
              className={`flex-1 ${
                index % 2 === 0 ? 'pl-12 sm:pl-20 text-left' : 'pr-12 sm:pr-20 text-right'
              }`}
            >
              {/* Event Content Section */}
              <div className="space-y-1">
                {/* Event Date */}
                <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">{event.date}</div>

                {/* Event Title */}
                <div className="text-xl font-bold text-gray-900 dark:text-gray-100">{event.title}</div>

                {/* Event Location */}
                <div className="text-lg text-gray-600 dark:text-gray-400">{event.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-24 -mb-6">
                <Link
                    href='/aboutme'
                    className="mt-8 inline-flex items-center gap-2 text-sm font-light"
                >
                    <ArrowLeft className="¨h-5 w-5" />
                    <span>To Top </span>
                </Link>
                <Link
                    href='/'
                    className="mt-8 inline-flex items-center gap-2 text-sm font-light"
                >
                    <span>Back to Home</span>
                    <ArrowRightIcon className="¨h-5 w-5" />
                </Link>
      </div>
    </div>
  );
};

export default TimeLine;
