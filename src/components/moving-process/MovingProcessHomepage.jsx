import React, { useState } from 'react';


function MovingProcessHomepage() {
  const [step, setStep] = useState(1);
  const [locationFrom, setLocationFrom] = useState("");
  const [locationTo, setLocationTo] = useState("");
  const [houseType, setHouseType] = useState("");
  const [movingDate, setMovingDate] = useState("");
  const [sofa, setSofa] = useState(0);
  const [table, setTable] = useState(0);
  const [cabinet, setCabinet] = useState(0);
  const [quote, setQuote] = useState(0);

    // proceed to next step
    const nextStep = () => {
        setStep( step + 1 )
    }

    const prevStep = () => {
        setStep( step - 1 )
    }

  return (
    <div>
        MovingProcessHomepage
    </div>
  )
}

export default MovingProcessHomepage