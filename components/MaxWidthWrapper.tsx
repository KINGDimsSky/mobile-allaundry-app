import { View, ViewProps } from "react-native";

interface MaxWidthWrapperProps extends ViewProps {
    children: React.ReactNode;
    className?: string;
}

export default function MaxWidthWrapper ({ children, className, ...props }: MaxWidthWrapperProps) {
    return (
       <View className={`w-full max-w-[600px] mx-auto px-5 ${className}`} {...props}>
         {children}
       </View>
    )
}