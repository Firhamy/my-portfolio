import Image from "next/image";

export default function About(): React.JSX.Element {

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-medium text-white mb-4">
            I specialize in building and securing <span className="text-purple-400">Network Infrastructure</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Experienced in managing MikroTik, Proxmox virtualization, and enterprise server monitoring 
            to ensure high availability and network security.
          </p>
        </div>
        <Image 
          src="/assets/illustration.png"
          alt="Skills"
          width={800}
          height={800}
          className="object-cover mx-auto"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </section>
  );
}