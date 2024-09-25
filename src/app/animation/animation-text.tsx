// "use client";
// import React, { useEffect, useState } from "react";

// const AnimatedText: React.FC = () => {
//   const phrases = [
//     "I'm a junior front-end developer",
//     " I'm a content creator",
//   ];

//   const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
//     }, 2000); // Ganti setiap 2 detik

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     setCurrentPhrase(phrases[index]);
//   }, [index]);

//   return (
//     <h3 className="text-white text-4xl font-bold transition-opacity duration-500">
//       {currentPhrase}
//     </h3>
//   );
// };

// export default AnimatedText;
