export default function EquipmentList({ data }) {
  return (
    <ul className="space-y-2">
      {data.map(eq => (
        <li key={eq.id} className="border p-3 rounded shadow">
          <strong>{eq.name}</strong><br />
          Tips: {eq.type} | Atrašanās vieta: {eq.location}
        </li>
      ))}
    </ul>
  );
}
