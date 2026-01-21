import { Text, TextProps } from 'react-native';

interface AppTextProps extends TextProps {
  className?: string;
  variant?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
}

export function AppText({ className, variant = 'regular', ...props }: AppTextProps) {
  const fontMapping = {
    light: 'font-poppins-light',
    regular: 'font-poppins',
    medium: 'font-poppins-medium',
    semibold: 'font-poppins-semibold',
    bold: 'font-poppins-bold', 
  };

  const fontFamily = fontMapping[variant];

  return (
    <Text className={`${fontFamily} text-slate-900 ${className}`} 
      {...props} 
    />
  );
}