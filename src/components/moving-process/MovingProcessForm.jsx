import React, { useEffect, useState } from "react";
import Book from "./Book";
import Compare from "./Compare";
import GetStarted from "./GetStarted";
import MyItems from "./MyItems";

function MovingProcessForm({ user, getStartedFromHome }) {
  const [step, setStep] = useState(1);

  const [component, setComponent] = useState(null);

  const [getStartedData, setGetStartedData] = useState({
    house_type: "",
    moving_from: "",
    moving_to: "",
    moving_date: "",
  });

  const [items, setItems] = useState([]);
  const [quotes, setQuotes] = useState({
    mover: [{}],
  });

  const nextStep = () => {
    setStep((step) => step + 1);
  };

  const prevStep = () => {
    setStep((step) => step - 1);
  };

  const handleChange = (input) => (e) => {
    switch (input) {
      case "quote":
        setQuotes({ ...quotes, [input]: e.target.value });
        break;

      default:
        break;
    }
  };
  const [state, setState] = useState(0);
  const onAddItem = (item) => {
    const duplicate = items?.find((it) => it.item === item.item);
    if (duplicate) {
      const index = items.indexOf(duplicate);
      setState((state) => state + 1);
      items[index].count = item.count;
    } else {
      setItems([...items, item]);
    }
  };

  useEffect(() => {
    console.log(getStartedFromHome);
    const values = { getStartedData, items, quotes };

    switch (step) {
      case 1:
        setComponent(
          <GetStarted
            nextStep={nextStep}
            setGetStartedData={setGetStartedData}
            values={values}
            user={user}
          />
        );
        break;
      case 2:
        setComponent(
          <MyItems
            nextStep={nextStep}
            onAddItem={onAddItem}
            values={values}
            user={user}
          />
        );
        break;
      case 3:
        setComponent(
          <Compare
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
            user={user}
          />
        );
        break;
      case 4:
        setComponent(
          <Book
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
            user={user}
          />
        );
        break;
      default:
        break;
    }
    console.log(values);
  }, [items, quotes, step]);

  return <div>{component}</div>;
}

export default MovingProcessForm;
