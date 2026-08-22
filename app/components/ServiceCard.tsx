type ServiceCardProps = {
  name: string;
  description: string;
};

export default function ServiceCard({ name, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h3 className="text-xl font-serif mb-2">{name}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}