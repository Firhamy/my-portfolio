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
    title: "Network & IT Support - Indoseiki",
    description: "Mengelola infrastruktur jaringan Dual ISP, optimasi MikroTik, dan pemeliharaan server Proxmox serta Synology NAS untuk operasional pabrik.",
    icon: "/assets/circle.png",
  },
  {
    id: 2,
    title: "Server Monitoring Integration",
    description: "Implementasi Node Exporter, Prometheus, dan Grafana untuk monitoring performa VM server secara real-time.",
    icon: "/assets/circle.png",
  },
  {
    id: 3,
    title: "IP CCTV System Implementation",
    description: "Instalasi dan konfigurasi sistem CCTV Hikvision berbasis IP Statik dengan integrasi Hik-Connect untuk akses remote.",
    icon: "/assets/circle.png",
  },
  {
    id: 4,
    title: "Enterprise Messaging System",
    description: "Implementasi server Openfire terintegrasi LDAP untuk sistem komunikasi internal admin yang aman.",
    icon: "/assets/circle.png",
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