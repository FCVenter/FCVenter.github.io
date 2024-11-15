import { ButtonProps } from '@rewind-ui/core';

export const buttonStyles = {
  base: ({ color, tone }: ButtonProps = {}) => {
    const baseClasses = 'px-4 py-2 font-semibold rounded transition-colors';
    const colorClasses: Record<string, string> = {
      blue: tone === 'solid' ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-800',
      purple: tone === 'solid' ? 'bg-purple-600 text-white' : 'bg-purple-200 text-purple-800',
      red: tone === 'solid' ? 'bg-red-600 text-white' : 'bg-red-200 text-red-800',
      green: tone === 'solid' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800',
      gray: tone === 'solid' ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-800',
      // Add more colors if necessary
    };

    return `${baseClasses} ${colorClasses[color || 'blue'] || ''}`;
  },
};
