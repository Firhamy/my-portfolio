import Image from "next/image";

interface Experience {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior IT Infrastructure & System Administrator — PT Indoseiki Metal Utama",
    description: "Memimpin pengelolaan infrastruktur Proxmox VE, server Linux (Ubuntu/Debian), dan otomatisasi backup. Bertanggung jawab atas ketersediaan sistem internal (Nginx/MariaDB), deployment Nextcloud, serta implementasi monitoring real-time menggunakan Prometheus & Grafana.",
    icon: "/assets/ism.png",
  },
  {
    id: 2,
    title: "Senior IT Network Engineer — PT Indoseiki Metal Utama",
    description: "Merancang dan mengoptimasi infrastruktur jaringan Dual ISP, segmentasi jaringan (VLAN/IP Addressing), serta penguatan keamanan melalui manajemen Firewall dan VPN. Melakukan capacity planning untuk memastikan konektivitas pabrik tetap stabil dan minim latency.",
    icon: "/assets/ism.png",
  },
  {
    id: 3, // ID disesuaikan urutannya
    title: "Freelance Computer Technician — ZaynComp",
    description: "Menyediakan jasa konsultasi teknis, optimasi performa hardware (repasting/upgrade), serta maintenance preventif untuk klien retail dan korporat guna memastikan perangkat bekerja maksimal.",
    icon: "/assets/zayncomp.png",
  },
  {
    id: 4,
    title: "IT Technician & Assistant Lecturer — Universitas Amikom Yogyakarta",
    description: "Mengelola laboratorium komputer kampus, instalasi jaringan lokal, serta mendampingi mahasiswa dalam praktikum Jaringan Komputer sebagai asisten dosen.",
    icon: "/assets/amikom.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-6xl font-bold text-white text-center mb-16">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                   <Image src={exp.icon} alt="icon" width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-white/70 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}