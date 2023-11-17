// export default function Tracker({ steps, currentStep, setStep }) {
//   return (
//     <>
//       <div className="w-fit px-8 flex gap-12 bg-blue-600/20 py-4 rounded-full">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             onClick={() => setStep(index)}
//             className="group relative bg-white rounded-full h-4 w-4 flex justify-center hover:p-2 items-center hover:scale-150 transform duration-200"
//           >
//             <div className="absolute bg-blue-600 rounded-full h-1.5 w-1.5 scale-0 group-hover:scale-110 duration-200"></div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

export default function Tracker({ steps, currentStep, setStep }) {
  return (
    <>
      <div className="w-fit px-12 flex gap-20 bg-blue-600/10 py-6 rounded-full scale-90">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`group relative bg-white rounded-full h-4 w-4 flex justify-center items-center transform duration-200 cursor-pointer ${
              index === currentStep
                ? "scale-150 p-2"
                : "hover:scale-150 hover:p-2"
            }`}
            onClick={() => setStep(index)}
          >
            <div
              className={`absolute bg-blue-600 rounded-full h-1.5 w-1.5 duration-200 ${
                index === currentStep
                  ? "scale-110"
                  : "scale-0 group-hover:scale-110"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
}

// import { motion } from "framer-motion";

// export default function Tracker({ steps, currentStep }) {
//   return (
//     <>
//       <div className="w-fit px-8 flex gap-12 bg-blue-600/20 py-4 rounded-full relative">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className="group relative bg-white rounded-full h-4 w-4 flex justify-center items-center hover:scale-150 transform duration-200"
//           >
//             <div className="absolute bg-blue-600 rounded-full h-1.5 w-1.5 scale-0 group-hover:scale-110 duration-200"></div>
//           </div>
//         ))}
//         <motion.div
//           className="absolute top-0 -translate-y-6" // Adjust positioning
//           initial={false}
//           animate={{ x: `${currentStep * 48}px` }} // Adjust x-position based on currentStep
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           <div className="w-4 h-4 bg-green-600">🔽</div>{" "}
//           {/* Arrow or indicator style */}
//         </motion.div>
//       </div>
//     </>
//   );
// }
