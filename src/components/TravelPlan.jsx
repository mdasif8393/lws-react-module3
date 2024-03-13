import { useState } from "react";
import { initialTravelPlan } from "../data/places-normalized";
import PlaceTree from "./PlaceTree";

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);

  const root = plan[0]; // {id: 0, title: '(Root)', childIds: Array(3)}
  const planetIds = root.childIds; // [1, 42, 46]

  const handleComplete = (parentId, childId) => {
    const parent = plan[parentId];

    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };

    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  };

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map((placeId) => (
          <PlaceTree
            key={placeId}
            id={placeId}
            placesById={plan} // full plan
            onComplete={handleComplete}
            parentId={0}
          />
        ))}
      </ol>
    </>
  );
}
