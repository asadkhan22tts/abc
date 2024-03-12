import { useState } from "react"
import Accordion from "./Accordion"

const Accordian = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "Company",
      data: "abc",
      isOpen: false,
    },
    {
      key: 2,
      title: "Company",
      data: "abc",
      isOpen: false,
    },
    {
      key: 3,
      title: "Company",
      data: "abc",
      isOpen: false,
    },
    {
      key: 4,
      title: "Company",
      data: "abc",
      isOpen: false,
    },
    {
      key: 5,
      title: "Company",
      data: "abc",
      isOpen: false,
    },
    {
      key: 6,
      title: "Company",
      data: "abc",
      isOpen: false,
    },
  ])

  const toggleAccordion = (accordionkey: string | number) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen }
      } else {
        return { ...accord, isOpen: false }
      }
    })

    setAccordion(updatedAccordions)
  }

  return (
    <div>
      <div className=" containor p-2 m-8 w-full ">
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.key}
            title={accordion.title}
            data={accordion.data}
            isOpen={accordion.isOpen}
            toggleAccordion={() => toggleAccordion(accordion.key)}
          />
        ))}
      </div>
    </div>
  )
}

export default Accordian
