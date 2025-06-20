import Link from 'next/link';
import QRCode from 'qrcode.react';

export default function EquipmentCard({ equipment }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{equipment.name}</h2>
      <p className="text-sm text-gray-500">ID: {equipment.id}</p>
      <p className="mt-2 text-sm">Pēdējā apkope: {equipment.lastMaintenance}</p>
      <div className="mt-4">
        <QRCode value={`https://your-demo.vercel.app/equipment/${equipment.id}`} size={96} />
      </div>
      <Link href={`/equipment/${equipment.id}`} className="block mt-4 text-blue-500 underline">
        Skatīt detaļas
      </Link>
    </div>
  );
}
