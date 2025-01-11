import Image from "next/image";

interface StatCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const StatCard = ({
  icon,
  title,
  description,
  className = "",
}: StatCardProps) => (
  <div
    className={`bg-white p-6 rounded-lg relative ${className} max-w-lg mx-auto md:h-80 lg:h-60`}
  >
    <div className="absolute -top-8 left-1/2 md:left-8 transform -translate-x-1/2 md:translate-x-0">
      <div className="bg-[hsl(257,27%,26%)] p-4 rounded-full">
        <Image src={icon} alt="" width={40} height={40} />
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">{title}</h3>
    <p className="text-gray-500 text-sm">{description}</p>
  </div>
);

export default StatCard;
