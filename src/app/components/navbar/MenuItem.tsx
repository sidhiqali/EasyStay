"use client"

interface MenuProps {
  onclick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuProps> = ({ onclick, label }) => {
  return (
    <div
      onClick={onclick}
      className='px-4 py-3 flex items-center justify-center hover:bg-neutral-100 transition font-semibold'
    >
      {label}
    </div>
  );
};

export default MenuItem;
