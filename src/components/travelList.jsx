import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

export const TravelList = () => {
  const [TravelPlans, setTravelPlans] = useState(travelPlansData);

  <img src={plan.image} className="image" />;
  return (
    <div>
      <h2>Travel Plans</h2>
      {TravelPlans.map((plan) => {
        console.log(plan);
        return (
          <div key={plan.id}>
            <h3>{plan.destination}</h3>
          </div>
        );
      })}
    </div>
  );
};
