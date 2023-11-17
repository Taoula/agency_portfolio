export default function Tracker({ steps }) {
  return (
    <>
      <div className="w-fit px-8 flex gap-12 bg-blue-600/20 py-4 rounded-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-full h-4 w-4 flex justify-center hover:p-2 items-center hover:scale-150 transform duration-200"
          >
            <div className="absolute bg-red-600 rounded-full h-1.5 w-1.5 scale-0 group-hover:scale-110 duration-200"></div>
          </div>
        ))}
      </div>
    </>
  );
}
