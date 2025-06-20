import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-4">Maintai – Ražošanas iekārtu pārvaldība</h1>
      <p className="mb-4">Centralizēta sistēma iekārtu uzskaitei, apkopei un QR koda izmantošanai.</p>
      <Link href="/equipment">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Skatīt iekārtas</button>
      </Link>
    </main>
  );
}
