type ServiceCardProps = {
  name: string;
  price: number;
  duration: string;
};

export default function ServiceCard({ name, price, duration }: ServiceCardProps) {
  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h3 className="text-xl font-serif mb-2">{name}</h3>
      <p>Price: GHS {price}</p>
      <p>Duration: {duration}</p>
    </div>
  );
}