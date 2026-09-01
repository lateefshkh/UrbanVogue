import React, { useState } from 'react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');

  if (!isOpen) return null;

  const measurements = [
    { size: 'S', chestIn: '36-38', chestCm: '91-96', waistIn: '30-32', waistCm: '76-81', sleeveIn: '33.5', sleeveCm: '85' },
    { size: 'M', chestIn: '38-40', chestCm: '96-101', waistIn: '32-34', waistCm: '81-86', sleeveIn: '34.5', sleeveCm: '87.5' },
    { size: 'L', chestIn: '40-42', chestCm: '101-106', waistIn: '34-36', waistCm: '86-91', sleeveIn: '35.5', sleeveCm: '90' },
    { size: 'XL', chestIn: '42-44', chestCm: '106-111', waistIn: '36-38', waistCm: '91-96', sleeveIn: '36.5', sleeveCm: '92.5' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-[#fdf8f7] border border-[#cfc4bd] p-8 rounded-xs shadow-2xl">
        <div className="flex justify-between items-center mb-6 border-b border-[#cfc4bd]/40 pb-4">
          <div>
            <h3 className="text-2xl font-serif text-[#191715]">Size &amp; Fit Guide</h3>
            <p className="text-xs text-[#69635e]">Accurate sizing for tailored outerwear &amp; knitwear</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#4c4540] hover:text-[#191715]"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Unit Toggle */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={() => setUnit('inches')}
            className={`px-3 py-1 text-xs rounded-xs font-medium cursor-pointer ${
              unit === 'inches' ? 'bg-[#191715] text-white' : 'bg-[#eae1da] text-[#4c4540]'
            }`}
          >
            Inches
          </button>
          <button
            onClick={() => setUnit('cm')}
            className={`px-3 py-1 text-xs rounded-xs font-medium cursor-pointer ${
              unit === 'cm' ? 'bg-[#191715] text-white' : 'bg-[#eae1da] text-[#4c4540]'
            }`}
          >
            Centimeters
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-[#cfc4bd]/50 rounded-xs mb-6">
          <table className="w-full text-left text-xs text-[#191715]">
            <thead className="bg-[#f7f3f2] border-b border-[#cfc4bd]/50 uppercase tracking-wider font-semibold text-[#69635e]">
              <tr>
                <th className="p-3">Size</th>
                <th className="p-3">Chest</th>
                <th className="p-3">Waist</th>
                <th className="p-3">Sleeve</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#cfc4bd]/30">
              {measurements.map((row) => (
                <tr key={row.size} className="hover:bg-[#f1edec]">
                  <td className="p-3 font-semibold">{row.size}</td>
                  <td className="p-3">{unit === 'inches' ? `${row.chestIn} in` : `${row.chestCm} cm`}</td>
                  <td className="p-3">{unit === 'inches' ? `${row.waistIn} in` : `${row.waistCm} cm`}</td>
                  <td className="p-3">{unit === 'inches' ? `${row.sleeveIn} in` : `${row.sleeveCm} cm`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-[#eae1da]/60 rounded-xs text-xs text-[#4c4540] leading-relaxed mb-6">
          <strong className="text-[#191715]">Fit note:</strong> Our outerwear is cut with an architectural, classic drape designed for layering over lightweight knitwear or shirting. If between sizes, choose the larger size for a relaxed silhouette.
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-[#191715] text-white text-xs uppercase tracking-widest font-medium rounded-xs"
        >
          Got It
        </button>
      </div>
    </div>
  );
};
