import React from "react";

interface SessionModalContentProps {
  sessionName: string;
  relevantTopics: string;
  sessionType?: string;
  date: string | number;
  attendeesLimit: number;
  description: string;
  occurence: string;
  tag: string;
  sessionUrl: string;
}

const SessionModalContent: React.FC<SessionModalContentProps> = ({
  sessionName,
  relevantTopics,
  date,
  sessionType,
  description,
  attendeesLimit,
  tag,
  occurence,
  sessionUrl,
}) => {
  function formatDateString(dateString: string | number): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    return formattedDate;
  }
  const formattedDate = formatDateString(date);
  return (
    <div className="grid sm:grid-cols-2 gap-5 mb-10 justify-between items-center font-Hanken w-full">
      <div>
        <p className="text-Neutra30">Name of Mentee</p>
        <p>{sessionName}</p>
      </div>
      <div>
        <p className="text-Neutra30">Session Name</p>
        <p>{relevantTopics}</p>
      </div>
      <div>
        <p className="text-Neutra30">Description</p>
        <p>{description}</p>
      </div>

      <div>
        <p className="text-Neutra30">Date of Session</p>
        <p>{formattedDate}</p>
      </div>

      {occurence && (
        <div>
          <p className="text-Neutra30">Occurence</p>
          <p>{occurence}</p>
        </div>
      )}
      {attendeesLimit && (
        <div>
          <p className="text-Neutra30">Attendees</p>
          <p>{attendeesLimit}</p>
        </div>
      )}
      {sessionType && (
        <div>
          <p className="text-Neutra30">Mode of session</p>
          <p>{sessionType}</p>
        </div>
      )}
      {tag && (
        <div>
          <p className="text-Neutra30">Type of Session</p>
          <p>{tag}</p>
        </div>
      )}
      <div>
        <p className="text-Neutra30">Link</p>
        <a className="text-blue-600" href={sessionUrl}>
          Go
        </a>
      </div>
    </div>
  );
};

export default SessionModalContent;
