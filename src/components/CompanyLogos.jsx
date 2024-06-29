import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50 font-code">
        Helping people create beautiful servers
      </h5>
      <ul className="flex">
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
          </li>

      </ul>
    </div>
  );
};

export default CompanyLogos;
