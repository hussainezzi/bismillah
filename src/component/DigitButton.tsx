// Import necessary libraries and types
// Import React and any necessary hooks or types from 'react'
import React from 'react'

// Import any styles or CSS modules if needed


// Use a functional component with TypeScript
// Define the props interface for the Button componenr
interface ButtonProps { 
// Include props for label, onClick handler, and any other necessary props (e.g., style, className)
digit: number,
onClick: () => void,
}

// Define the Button componen
export default function DigitButton({ digit, onClick }: ButtonProps) {
  return (
	<button className='bg-grey-800 text-3 rounded-m border-grey-400' onClick={onClick}>
	  {digit}
	</button>
  );
}
// Export the Button component
// Use default or named export based on your preference