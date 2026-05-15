import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiDotnet,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiTerraform,
} from "react-icons/si";

const stack = [
  { name: "React", Icon: SiReact, color: "text-sky-400" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-blue-400" },
  { name: "Node.js", Icon: SiNodedotjs, color: "text-emerald-400" },
  { name: ".NET", Icon: SiDotnet, color: "text-violet-300" },
  { name: "Python", Icon: SiPython, color: "text-amber-300" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "text-sky-300" },
  { name: "Docker", Icon: SiDocker, color: "text-blue-300" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "text-indigo-300" },
  { name: "AWS", Icon: SiAmazon, color: "text-orange-300" },
  { name: "Terraform", Icon: SiTerraform, color: "text-purple-300" },
];

export default function SoftwareStack() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 top-20 w-96 h-96 bg-sky-100/80 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          <SectionTitle
            badgeText="Technology"
            title="Right Tool for"
            highlightText="Every Layer of the Stack"
            description="We are pragmatic technologists — we choose boring technology where it reduces risk, and cutting-edge where it unlocks velocity. Below is a representative slice of what we ship with regularly."
            align="center"
            containerAlign="center"
          />

          <div className="max-w-4xl mx-auto rounded-3xl border border-gray-100 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
              {stack.map(({ name, Icon, color }) => (
                <div
                  key={name}
                  className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-6 hover:bg-white/[0.08] hover:border-sky-500/30 transition-all duration-300"
                >
                  <Icon
                    className={`w-9 h-9 ${color} opacity-90 group-hover:scale-110 transition-transform`}
                    aria-hidden
                  />
                  <span className="text-xs font-semibold text-gray-300 text-center">
                    {name}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-10 max-w-2xl mx-auto">
              Not married to a single vendor stack — we also work deeply with
              Azure, Google Cloud, message buses, data warehouses, and
              enterprise identity providers. Your constraints drive the
              blueprint.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
