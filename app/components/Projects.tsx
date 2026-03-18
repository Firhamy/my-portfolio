import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Prometheus & Grafana Monitoring Integration",
    description: "Implementasi sistem monitoring terpusat untuk VM Server menggunakan Node Exporter. Proyek ini mencakup konfigurasi otomatis service melalui SSH, manajemen target metrik pada Prometheus, serta visualisasi real-time metrik CPU, RAM, dan Network pada dashboard Grafana untuk kebutuhan troubleshooting dan analisis beban sistem di PT Indoseiki Metal Utama.",
    image: "/projects/monitoring.png",
    tags: ["Linux", "Prometheus", "Grafana", "DevOps"],
  },
  {
    id: 2,
    title: "IP-Based CCTV System & Hik-Connect Integration",
    description: "Perancangan dan implementasi jaringan CCTV berbasis IP Statik menggunakan perangkat Hikvision. Mengatur segmentasi jaringan khusus untuk memastikan keamanan data visual, konfigurasi NVR, serta integrasi platform Hik-Connect untuk memungkinkan monitoring jarak jauh yang stabil bagi tim manajemen.",
    image: "/projects/cctv.png",
    tags: ["Network Design", "Hikvision", "IP Surveillance"],
  },
  {
    id: 3,
    title: "Enterprise Messaging System (Openfire + LDAP)",
    description: "Membangun infrastruktur komunikasi internal yang aman sebagai pengganti WhatsApp menggunakan server Openfire yang terintegrasi dengan LDAP/Active Directory. Solusi ini memungkinkan otentikasi akun otomatis bagi admin melalui klien Pidgin, menciptakan lingkungan chatting internal yang terkontrol dan privat.",
    image: "/projects/openfire.png",
    tags: ["Openfire", "LDAP", "Active Directory", "XMPP"],
  },
  {
    id: 4,
    title: "MikroTik API Firewall Management System",
    description: "Pengembangan aplikasi berbasis PHP Native untuk mengotomatisasi manajemen Filter Rule pada MikroTik OS di UPT Lab Amikom Yogyakarta. Sistem ini menggunakan MikroTik API untuk memvalidasi input dan melakukan perubahan konfigurasi firewall secara real-time melalui antarmuka web yang intuitif.",
    image: "/projects/mikrotik-api.png",
    tags: ["PHP Native", "MikroTik API", "Network Security"],
  },
  {
    id: 5,
    title: "IT Asset Management System (Snipe-IT)",
    description: "Implementasi sistem manajemen aset terpusat menggunakan Snipe-IT untuk digitalisasi pelacakan inventaris IT. Proyek ini mencakup pengelolaan siklus hidup aset, pencatatan riwayat maintenance secara digital (paperless), serta monitoring lokasi perangkat secara real-time guna meningkatkan efisiensi audit dan akurasi data inventaris di seluruh departemen.",
    image: "/projects/snipe-it.png",
    tags: ["Snipe-IT", "Asset Management", "Inventory Control", "System Admin"],
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-white/60">Solusi infrastruktur dan jaringan yang telah saya implementasikan.</p>
        </div>
        
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          
          return (
            <div key={project.id} className="mb-32 last:mb-0">
              <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2 text-right" : "text-left"}`}>
                  <p className="text-purple-400 text-lg mb-2 font-medium">
                    Technical Project
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>
                  
                  {/* Description Card */}
                  <div className="relative z-10 mb-6">
                    <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                      isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                    }`}>
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className={`flex flex-wrap gap-3 ${isEven ? "justify-end" : "justify-start"}`}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Content */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-white/5 shadow-2xl group">
                    <div className="relative w-full h-full p-4">
                       {/* Overlay effect on hover */}
                      <div className="absolute inset-0 bg-purple-600/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}