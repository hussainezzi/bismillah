// Import necessary libraries and types
import React from 'react'

// Import any styles or CSS modules if needed

// Use a functional component with TypeScript
// Define the props interface for the Button component
interface DigitButtonProps { 
// Include props for label, onClick handler, and any other necessary props (e.g., style, className)
digit: number,
onClick: () => void,
}

// Define the Button component
export default function DigitButton({ digit, onClick }: DigitButtonProps) {
  return (
	<button name={`${digit}`} value={`${digit}`} className='bg-grey-800 text-3 rounded-m border-grey-400' onClick={onClick}>
	  {digit}
	</button>
  );
}
// Export the Button component
// Use default or named export based on your preference