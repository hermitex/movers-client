import React, { useState } from 'react';


function MovingProcessHomepage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    locationFrom: "",
    locationTo: "",
    houseType: "",
    movingDate: "",
    cabinet: "",
    table: "",
    side_table: "",
    sofa: "",
    bed: "",
    cooker: "",
    fridge: "",
    washing_machine: "",
    microwave: "",
    dining_table: "",
    dining_chair: "",
  });
  const [quote, setQuote] = useState(0);


  const myItemsData = {
    living_room_items: {
      sofa: {
        name: "sofa",
        count: data.sofa,
        category: "living room",
      },
      table: {
        name: "table",
        count: data.table,
        category: "living room",
      },
      cabinet: {
        name: "cabinet",
        count: 0,
        category: "living room",
      },
    },
    dining_room_items: {
      dining_table: {
        name: "dining table",
        count: data.dining_table,
        category: "dining room",
      },
      dining_chair: {
        name: "dining chair",
        count: data.dining_chair,
        category: "dining room",
      },
    },
    kitchen_items: {
      cooker: {
        name: "cooker",
        count: 0,
        category: "kitchen",
      },
      washing_machine: {
        name: "washing machine",
        count: data.washing_machine,
        category: "kitchen",
      },
      fridge: {
        name: "fridge",
        count: data.fridge,
        category: "kitchen",
      },
      microwave: {
        name: "microwave",
        count: data.microwave,
        category: "kitchen",
      },
    },
    bed_room_items: {
      bed: {
        name: "bed",
        count: data.bed,
        category: "bedroom",
      },
      side_table: {
        name: "side table",
        count: data.side_table,
        category: "bedroom",
      },
    },
  };  

    // proceed to next step
    const nextStep = () => {
        setStep( step + 1 )
    }

    // Go back to previous Step
    const prevStep = () => {
        setStep( step - 1 )
    }

    // Handle fields change
    const handleChange = input = e => {
      setData({ [input]: e.target.value })
    }

    

  return (
    <div>
        MovingProcessHomepage
    </div>
  )
}

export default MovingProcessHomepage