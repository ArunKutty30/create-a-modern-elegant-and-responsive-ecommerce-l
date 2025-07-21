import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center p-6">
      <div className="inline-block p-3 bg-[#8B4513] text-white rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif text-[#3C1810] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}