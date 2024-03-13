/* eslint-disable react/prop-types */
export default function PlaceTree({ id, placesById, parentId, onComplete }) {
  const place = placesById[id]; // Earth

  const childIds = place.childIds; // [2, 10, 19, 26, 34]
  console.log(childIds);

  return (
    <li>
      {place.title}{" "}
      <button onClick={() => onComplete(parentId, id)}>Complete</button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}
