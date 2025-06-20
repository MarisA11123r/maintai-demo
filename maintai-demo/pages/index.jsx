import EquipmentCard from '../components/EquipmentCard';

const mockEquipment = [
  { id: 'EQ001', name: 'Preses iekārta', lastMaintenance: '2025-06-10' },
  { id: 'EQ002', name: 'Metināšanas roboti', lastMaintenance: '2025-05-22' }
];

export default function Home() {
  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Iekārtu saraksts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockEquipment.map(e => (
          <EquipmentCard key={e.id} equipment={e} />
        ))}
      </div>
    </main>
  );
}
