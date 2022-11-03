import React, { useEffect, useState } from "react";
import MovingProcessStepper from "../utils/Stepper";
import Book from "./Book";
import Compare from "./Compare";
import GetStarted from "./GetStarted";
import MyItems from "./MyItems";
import SuccessModal from "./Success";

function MovingProcessForm({ user, getStartedFromHome }) {
  const [step, setStep] = useState(1);
  const [dataToSubmit, setDataToSubmit] = useState(null);
  const [component, setComponent] = useState(null);

  const [getStartedData, setGetStartedData] = useState({
    house_type: "",
    moving_from: "",
    moving_to: "",
    moving_date: "",
  });

  const [items, setItems] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState({});
  const [paymentData, setPaymentData] = useState(null);
  const [bookingId, setBookingId] = useState(null);
  const [inventoryId, setInventoryId] = useState(null);
  const [quotes, setQuotes] = useState({
    mover: [{}],
  });

  const nextStep = () => {
    setStep((step) => step + 1);
  };

  const prevStep = () => {
    setStep((step) => step - 1);
  };

  const onSelect = (data) => {
    setSelectedQuote({
      ...selectedQuote,
      getStartedData,
      data,
      customer_id: user,
    });
  };

  const onBookAgain = () => {
    setStep(1);
  };

  const submitBooking = (data) => {
    // const inventoryChecklistData = {
    //   user_id: data.customer_id.use.id,
    //   customer_id: data.customer_id.use.id,
    //   item_name: "cabinet",
    //   category: "living room",
    //   count: 2,
    //   image_url: "",
    // };
    // const moveBookingData = {
    //   inventory_checklist_id: "",
    //   mover_id: data.data.mover_details.id,
    //   customer_id: data.customer_id.use.id,
    //   moving_from: data.getStartedData.moving_from.place_name,
    //   moving_to: data.getStartedData.moving_to.place_name,
    //   moving_date: "12-30-2022",
    //   status: "pending",
    // };
    // const paymentData = {
    //   payment_date: "2022-11-02T22:28:34Z",
    //   amount: 20.0,
    //   customer_id: 1,
    //   mover_id: 2,
    //   move_booking_id: 1,
    //   status: "completed",
    // };
    // fetch("http://127.0.0.1:4000/inventory_checklists", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify(inventoryChecklistData),
    // }).then((response) => {
    //   const inventory = response.json();
    //   if (response.ok) {
    //     setInventoryId(inventory.id);
    //   }
    // });

    // fetch("http://127.0.0.1:4000/move_bookings", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify({
    //     ...moveBookingData,
    //     inventory_checklist_id: inventoryId,
    //   }),
    // }).then((response) => {
    //   const booking = response.json();
    //   if (response.ok) {
    //     setBookingId(booking.id);
    //   }
    // });

    // fetch("http://127.0.0.1:4000/move_bookings", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify({ ...paymentData, move_booking_id: bookingId }),
    // }).then((response) => {
    //   const booking = response.json();
    //   if (response.ok) {
    //     console.log(booking);
    //   }
    // });

    console.log(quotes);
  };

  const getPayData = (payData) => {
    setPaymentData(payData);
    submitBooking(payData);
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
    const values = { getStartedData, paymentData, items, quotes };
    switch (step) {
      case 1:
        setComponent(
          <GetStarted
            nextStep={nextStep}
            prevStep={prevStep}
            setGetStartedData={setGetStartedData}
            values={values}
            stepper={
              <MovingProcessStepper
                step={step}
                title="Get Started"
              />
            }
            user={user}
          />
        );
        break;
      case 2:
        setComponent(
          <MyItems
            nextStep={nextStep}
            prevStep={prevStep}
            onAddItem={onAddItem}
            values={values}
            stepper={
              <MovingProcessStepper
                step={step}
                title="List Your Inventory"
              />
            }
            user={user}
          />
        );
        break;
      case 3:
        setComponent(
          <Compare
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            onSelect={onSelect}
            stepper={
              <MovingProcessStepper
                step={step}
                title="Compare"
              />
            }
            user={user}
          />
        );
        break;
      case 4:
        setComponent(
          <Book
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            selectedQuote={selectedQuote}
            values={values}
            getPayData={getPayData}
            stepper={
              <MovingProcessStepper
                step={step}
                title="Book"
              />
            }
            user={user}
          />
        );

        break;

      default:
        break;
    }
    console.log(values);
  }, [getStartedData, items, paymentData, quotes, selectedQuote, step, user]);

  return <div>{component}</div>;
}

export default MovingProcessForm;
