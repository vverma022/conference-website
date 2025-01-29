import { saveAs } from "file-saver";

const addToCalendar = (title, description, startDate, endDate) => {
  // Calculate the reminder date (3 days before the event start)
  const reminderDate = new Date(
    new Date(startDate.slice(0, 4), startDate.slice(4, 6) - 1, startDate.slice(6, 8)) // Convert startDate to Date object
      .getTime() -
      3 * 24 * 60 * 60 * 1000 // Subtract 3 days in milliseconds
  )
    .toISOString()
    .replace(/[-:]/g, "")
    .split(".")[0]; // Format reminder date to YYYYMMDDTHHMMSS

  const calendarEvent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    `BEGIN:VALARM`,
    `TRIGGER:-P3D`, // 3 days before the event
    `DESCRIPTION:Reminder for ${title}`,
    `ACTION:DISPLAY`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");

  const blob = new Blob([calendarEvent], { type: "text/calendar" });
  saveAs(blob, `${title}.ics`);
};

const CardContentCalender = () => {
  return (
    <div className="text-black">
      <p className="font-bold text-lg">Conference Details</p>
      <p>
        <strong>Dates:</strong>{" "}
        <span
          className="text-gray-600 cursor-pointer underline"
          onClick={() =>
            addToCalendar(
              "Conference 2025",
              "Conference taking place on 29, 30, and 31 October 2025.",
              "20251029T090000",
              "20251031T170000"
            )
          }
        >
          29, 30, 31 October 2025
        </span>
      </p>
      <div className="mt-4">
        <p className="font-bold text-lg">Important Deadlines</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>Call for Paper:</strong>{" "}
            <span
              className="text-gray-600 cursor-pointer underline"
              onClick={() =>
                addToCalendar(
                  "Call for Paper",
                  "Start date for paper submissions.",
                  "20250301T090000",
                  "20250301T170000"
                )
              }
            >
              1 March 2025
            </span>
          </li>
          <li>
            <strong>Abstract Submission Deadline:</strong>{" "}
            <span
              className="text-gray-600 cursor-pointer underline"
              onClick={() =>
                addToCalendar(
                  "Abstract Submission Deadline",
                  "Deadline for abstract submissions.",
                  "20250305T090000",
                  "20250305T170000"
                )
              }
            >
              5 March 2025
            </span>
          </li>
          <li>
            <strong>Paper Submission Opens:</strong>{" "}
            <span
              className="text-gray-600 cursor-pointer underline"
              onClick={() =>
                addToCalendar(
                  "Paper Submission Opens",
                  "Opening date for paper submissions.",
                  "20250405T090000",
                  "20250405T170000"
                )
              }
            >
              5 April 2025
            </span>
          </li>
          <li>
            <strong>Submission Deadline:</strong>{" "}
            <span
              className="text-gray-600 cursor-pointer underline"
              onClick={() =>
                addToCalendar(
                  "Submission Deadline",
                  "Final date for paper submissions.",
                  "20250901T090000",
                  "20250901T170000"
                )
              }
            >
              1 September 2025
            </span>
          </li>
          <li>
            <strong>Paper Submission Closes:</strong>{" "}
            <span
              className="text-gray-600 cursor-pointer underline"
              onClick={() =>
                addToCalendar(
                  "Paper Submission Closes",
                  "Closing date for paper submissions.",
                  "20250905T090000",
                  "20250905T170000"
                )
              }
            >
              5 September 2025
            </span>
          </li>
          <li>
            <strong>Revision Deadline:</strong>{" "}
            <span
              className="text-gray-600 cursor-pointer underline"
              onClick={() =>
                addToCalendar(
                  "Revision Deadline",
                  "Deadline for revisions.",
                  "20250922T090000",
                  "20250922T170000"
                )
              }
            >
              22 September 2025
            </span>
          </li>
          <li>
            <strong>Acceptance Notification:</strong>{" "}
            <span
              className="text-gray-600 cursor-pointer underline"
              onClick={() =>
                addToCalendar(
                  "Acceptance Notification",
                  "Date when acceptance notifications are sent.",
                  "20251001T090000",
                  "20251001T170000"
                )
              }
            >
              1 October 2025
            </span>
          </li>
          <li>
            <strong>Camera Ready Deadline:</strong>{" "}
            <span
              className="text-gray-600 cursor-pointer underline"
              onClick={() =>
                addToCalendar(
                  "Camera Ready Deadline",
                  "Deadline for camera-ready submissions.",
                  "20251010T090000",
                  "20251010T170000"
                )
              }
            >
              10 October 2025
            </span>
          </li>
          <li>
            <strong>Registration Deadline:</strong>{" "}
            <span
              className="text-gray-600 cursor-pointer underline"
              onClick={() =>
                addToCalendar(
                  "Registration Deadline",
                  "Final date for registration.",
                  "20251015T090000",
                  "20251015T170000"
                )
              }
            >
              15 October 2025
            </span>
          </li>
          <li>
            <strong>Final Notification:</strong>{" "}
            <span
              className="text-gray-600 cursor-pointer underline"
              onClick={() =>
                addToCalendar(
                  "Final Notification",
                  "Final notification date.",
                  "20251017T090000",
                  "20251017T170000"
                )
              }
            >
              17 October 2025
            </span>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <p>
          Papers must be submitted on or before the last date of submission.
          After the deadline, new papers cannot be registered, but you can edit
          the information of already submitted papers.
        </p>
      </div>
    </div>
  );
};

export default CardContentCalender;