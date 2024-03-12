interface AccordionProps {
  key: string | number
  title: string
  data: string
  isOpen: boolean
  toggleAccordion: () => void
}
const Accordion: React.FC<AccordionProps> = (props) => {
  return (
    <div className="grid grid-cols-12 gap-4 w-full">
      <div className="col-start-1 col-end-4">
        <div className="border rounded-md mb-5 ">
          <button
            className="w-full p-2  pl-0 text-left bg-[#636466]
                          text-white transition duration-300 text-xs"
            onClick={props.toggleAccordion}
          >
            <span className="accord-icon p-2 pl-3 pr-3 border-[#fbbf24] bg-[#fbbf24]">
              2
            </span>
            <span className="accordion-heading pl-12 font-bold">
              {props.title}
            </span>
            <span className="float-right transform transition-transform duration-300">
              {props.isOpen ? "-" : "+"}
            </span>
          </button>
          {props.isOpen && (
            <div className="w-full p-4 bg-white">{props.data}</div>
          )}
        </div>
      </div>
      <div className="col-start-4 col-end-9">
        <div className="border rounded-md mb-5 ">
          <button
            className="w-full p-2  pl-0 text-left bg-[#636466]
                          text-white transition duration-300 text-xs"
            onClick={props.toggleAccordion}
          >
            <span className="accord-icon p-2 pl-3 pr-3 border-[#fbbf24] bg-[#fbbf24]">
              2
            </span>
            <span className="accordion-heading pl-12 font-bold">
              {props.title}
            </span>
            <span className="float-right transform transition-transform duration-300">
              {props.isOpen ? "-" : "+"}
            </span>
          </button>
          {props.isOpen && (
            <div className="w-full p-4 bg-white">{props.data}</div>
          )}
        </div>
      </div>
      <div className="col-start-9 col-end-12">
        <div className="border rounded-md mb-5 ">
          <button
            className="w-full p-2  pl-0 text-left bg-[#636466]
                          text-white transition duration-300 text-xs"
            onClick={props.toggleAccordion}
          >
            <span className="accord-icon p-2 pl-3 pr-3 border-[#fbbf24] bg-[#fbbf24]">
              2
            </span>
            <span className="accordion-heading pl-12 font-bold">
              {props.title}
            </span>
            <span className="float-right transform transition-transform duration-300">
              {props.isOpen ? "-" : "+"}
            </span>
          </button>
          {props.isOpen && (
            <div className="w-full p-4 bg-white">{props.data}</div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Accordion
