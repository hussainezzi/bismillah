import React from 'react'


//  * Step-by-step guidance to create an operator button for a calculator in a TypeScript React project:
//  *
//  * 1. **Create a Functional Component**:
//  *    - Define a functional component named `OperatorButton`.
//  *
//  * 

//  * 2. **Props Definition**:
interface OperatorButtonProps {
//   *    - Define the props that the `OperatorButton` will accept. These might include:
//  *      - `operator`: The symbol of the operator (e.g., `+`, `-`, `*`, `/`).
operator: string,
//  *      - `onClick`: A function to handle the button click event.
//  *
onClick: () => void
}

export default function OperatorButton({ operator, onClick }: OperatorButtonProps) {
  //  * 3. **Button Element**:
  //  *    - Inside the component, create a button element.
  //  *    - Set the button's text to the `operator` prop.
  return (
	<button value ={`${operator}`} name  ={`${operator}`} className='border-grey-800 border rounded-l text-5' onClick={onClick}>
	  {operator}
	</button>
  );
//  * 4. **Event Handling**:
//  *    - Attach the `onClick` prop to the button's `onClick` event.
//  *
//  * 5. **Styling**:
//  *    - Optionally, add some styling to the button to make it visually appealing.
//  *
//  * 6. **Export the Component**:
//  *    - Export the `OperatorButton` component so it can be used in other parts of your application.
//  *
//  * 7. **Usage**:
//  *    - Import and use the `OperatorButton` component in your calculator component, passing the appropriate props.
//  *
//  * By following these steps, you should be able to create a reusable operator button for your calculator application.
 
}