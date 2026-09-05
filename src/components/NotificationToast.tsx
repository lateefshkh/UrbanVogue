import React from 'react';

interface ToastProps {
  message: string | null;
  type?: 'bag' | 'wishlist' | 'info';
  onAction?: () => void;
  actionText?: string;
  onClose: () => void;
}

export const NotificationToast: React.FC<ToastProps> = ({
  message,
  type = 'bag',
  onAction,
  actionText,
  onClose,
}) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 bg-[#191715] text-white px-5 py-4 rounded-xs shadow-2xl border border-[#7e756f]/40 max-w-sm animate-toast-in">
      <span className="material-symbols-outlined text-[20px] text-[#eae1da]">
        {type === 'bag' ? 'shopping_bag' : type === 'wishlist' ? 'favorite' : 'check_circle'}
      </span>
      <p className="text-xs font-medium flex-1">{message}</p>
      {onAction && actionText && (
        <button
          onClick={onAction}
          className="text-xs uppercase tracking-wider font-semibold text-[#eae1da] hover:underline cursor-pointer"
        >
          {actionText}
        </button>
      )}
      <button onClick={onClose} className="text-white/60 hover:text-white p-1 cursor-pointer">
        <span className="material-symbols-outlined text-[16px]">close</span>
      </button>
    </div>
  );
};
