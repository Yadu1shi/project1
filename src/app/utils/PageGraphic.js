import Image from 'next/image';

export default function PageGraphic({
  src = '/Graphic1.svg',
  position = 'top-0 left-0',
  rotation = '',
  size = 'h-[1500px] w-[2500px]',
  className = '',
}) {
  return (
    <div
      className={`absolute ${position} ${size} ${src} z-0  pointer-events-none ${rotation} ${className}`}
    >
      <Image
        src={src}
        alt="Decorative Graphic"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
