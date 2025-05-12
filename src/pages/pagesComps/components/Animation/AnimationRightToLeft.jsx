import React, { useEffect, useState } from 'react';

// AnimatedDiv Component
const AnimatedDiv = ({ index, children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100 + index * 200); // Delay for each div based on its index

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`transform transition-all duration-1000 ease-in-out 
        ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} >
        {children} 
    </div>
  );
};

export default AnimatedDiv;

// // Main App Component Example to use for animations
// function App() {
//   return (
//     <div className="flex flex-col items-center justify-center p-10 bg-gray-100">
//       <h1 className="text-3xl font-bold mb-5">Welcome to Our Website</h1>
//       <div className="flex mr-4">
//         <AnimatedDiv index={0}>This is animated div #1!</AnimatedDiv>
//         <AnimatedDiv index={1}>This is animated div #2!</AnimatedDiv>
//         <AnimatedDiv index={2}>This is animated div #3!</AnimatedDiv>
//       </div>
//       <div className="mt-10">
//         {/* Add the GenerateClaim component with animation */}
//         <AnimatedDiv index={3}> 
//           <GenerateClaim />
//         </AnimatedDiv>
//       </div>
//       <div className="mt-10">
//         {/* You can add more components here with their own animations */}
//         <AnimatedDiv index={4}>This is another animated div!</AnimatedDiv>
//       </div>
//     </div>
//   );
// }

// export default App;
