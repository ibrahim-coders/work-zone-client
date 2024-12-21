import React from 'react';

const BidsTable = ({ bidsRes, handleStatusChange }) => {
  const { title, email, deadline, price, category, status, _id } =
    bidsRes || {};

  if (!bidsRes) {
    return (
      <tr>
        <td colSpan="7" className="text-center text-gray-500 py-4">
          No bids available.
        </td>
      </tr>
    );
  }

  // Format deadline
  const formattedDeadline = deadline
    ? new Date(deadline).toLocaleDateString()
    : 'No Date';

  // Check if status is a valid string
  const statusDisplay = typeof status === 'string' ? status : 'Unknown Status';

  return (
    <tr className="divide-y divide-gray-200 hover:bg-gray-100">
      {/* Title */}
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        {title || 'No Title'}
      </td>

      {/* Email */}
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        {email || 'No Email'}
      </td>

      {/* Deadline */}
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        {formattedDeadline}
      </td>

      {/* Price */}
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        {price ? `$${price}` : 'No Price'}
      </td>

      {/* Category */}
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <p className="px-3 py-1 rounded-full text-blue-500 bg-blue-100/60 text-xs">
            {category || 'No Category'}
          </p>
        </div>
      </td>

      {/* Status */}
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500">
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
          <h2 className="text-sm font-normal">{statusDisplay}</h2>
        </div>
      </td>

      {/* Actions */}
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          {/* Accept Button */}
          <button
            onClick={() =>
              handleStatusChange(_id, statusDisplay, 'In Progress')
            }
            aria-label="Approve"
            className="disabled:cursor-not-allowed text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </button>

          {/* Reject Button */}
          <button
            onClick={() => handleStatusChange(_id, statusDisplay, 'Reject')}
            aria-label="Reject"
            className="disabled:cursor-not-allowed text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BidsTable;
