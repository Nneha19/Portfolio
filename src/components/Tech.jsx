import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
    {technologies.map((technology) => (
      <div className="w-10 h-10 sm:w-28 sm:h-28" key={technology.name}>
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-full h-full object-contain"
        />
      </div>
    ))}
  </div>
  
  );
};

export default SectionWrapper(Tech, "");
