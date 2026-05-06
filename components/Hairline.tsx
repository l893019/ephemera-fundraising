export default function Hairline({ className = '' }: { className?: string }) {
  return <div className={`hairline my-16 md:my-24 max-w-[700px] mx-auto ${className}`} />;
}
