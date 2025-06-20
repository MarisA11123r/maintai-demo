import EquipmentList from '../components/EquipmentList';
import { equipmentData } from '../utils/data';

export default function EquipmentPage() {
  return (
    <main className="p-6 font-sans">
      <h2 className="text-2xl font-semibold mb-4">Iekārtu saraksts</h2>
      <EquipmentList data={equipmentData} />
    </main>
  );
}
