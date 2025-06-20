import { useRouter } from 'next/router';
import { useState } from 'react';

export default function EquipmentDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [history, setHistory] = useState([
    { date: '2025-06-10', technician: 'Jānis', notes: 'Tīrīšana un eļļošana' },
    { date: '2025-04-12', technician: 'Inese', notes: 'Gultņu nomaiņa' },
  ]);

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Iekārta: {id}</h1>

      <h2 className="text-lg font-semibold mt-6">Apkopju vēsture</h2>
      <ul className="mt-2">
        {history.map((item, i) => (
          <li key={i} className="border-b py-2">
            <p><strong>{item.date}</strong> – {item.technician}</p>
            <p className="text-sm text-gray-600">{item.notes}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
