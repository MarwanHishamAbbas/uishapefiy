import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    View,
    ViewStyle,
    TextStyle,
    GestureResponderEvent,
} from 'react-native';

import { Feather } from '@expo/vector-icons';


export type ButtonVariant =
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

export interface ButtonProps {
    /** Button label text */
    children?: React.ReactNode;

    /** Button variant styling */
    variant?: ButtonVariant;

    /** Button size */
    size?: ButtonSize;

    /** Whether the button is disabled */
    disabled?: boolean;

    /** Whether the button is in a loading state */
    loading?: boolean;

    /** Left icon component to show before text */
    leftIcon?: React.ReactNode;

    /** Right icon component to show after text */
    rightIcon?: React.ReactNode;

    /** For icon-only buttons */
    icon?: React.ReactNode;

    /** Whether the button has a full width */
    fullWidth?: boolean;

    /** Optional press handler */
    onPress?: (event: GestureResponderEvent) => void;

    /** Button press animation duration in ms */
    pressAnimationDuration?: number;

    /** Custom button style */
    style?: ViewStyle;

    /** Custom text style */
    textStyle?: TextStyle;

    /** Add a gradient background (requires expo-linear-gradient) */




    /** Accessibility label for screen readers */
    accessibilityLabel?: string;

    /** Test ID for testing */
    testID?: string;
}

/**
 * Button component that follows shadcn/ui design principles
 */
export const Button = ({
    children,
    variant = 'default',
    size = 'md',
    disabled = false,
    loading = false,
    leftIcon,
    rightIcon,
    icon,
    fullWidth = false,
    onPress,
    style,
    textStyle,

    accessibilityLabel,
    testID,
}: ButtonProps) => {
    // Determine if it's an icon-only button
    const isIconOnly = size === 'icon' || (!children && (icon || leftIcon));



    // Get button styles based on variant, size, and state
    const getButtonStyles = (): ViewStyle => {
        const baseStyle: ViewStyle = {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            overflow: 'hidden',
            opacity: disabled ? 0.5 : 1,
            ...getSizeStyle(),
        };

        // Width style if fullWidth is true
        if (fullWidth) {
            baseStyle.width = '100%';
        }

        // Add style based on variant
        switch (variant) {
            case 'default':
                return {
                    ...baseStyle,
                    backgroundColor: '#171717',
                };
            case 'destructive':
                return {
                    ...baseStyle,
                    backgroundColor: '#ef4444',
                };
            case 'outline':
                return {
                    ...baseStyle,
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderColor: '#171717',
                };
            case 'secondary':
                return {
                    ...baseStyle,
                    backgroundColor: '#4F4F4F',
                };
            case 'ghost':
                return {
                    ...baseStyle,
                    backgroundColor: 'transparent',
                };
            case 'link':
                return {
                    ...baseStyle,
                    backgroundColor: 'transparent',
                    padding: 0,
                };
            default:
                return baseStyle;
        }
    };

    // Get text styles based on variant
    const getTextStyles = (): TextStyle => {
        const baseStyle: TextStyle = {
            fontWeight: '600',
            textAlign: 'center',
            ...getTextSizeStyle(),
        };

        switch (variant) {
            case 'default':
            case 'destructive':
                return {
                    ...baseStyle,
                    color: '#ffffff',
                };
            case 'outline':
                return {
                    ...baseStyle,
                    color: '#171717',
                };
            case 'secondary':
                return {
                    ...baseStyle,
                    color: '#ffffff',
                };
            case 'ghost':
                return {
                    ...baseStyle,
                    color: '#171717',
                };
            case 'link':
                return {
                    ...baseStyle,
                    color: '#171717',
                    textDecorationLine: 'underline',
                };
            default:
                return baseStyle;
        }
    };

    // Get button size styles
    const getSizeStyle = (): ViewStyle => {
        switch (size) {
            case 'sm':
                return {
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    minHeight: 36,
                };
            case 'md':
                return {
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    minHeight: 48,
                };
            case 'lg':
                return {
                    paddingHorizontal: 20,
                    paddingVertical: 12,
                    minHeight: 56,
                };
            case 'icon':
                return {
                    paddingHorizontal: 12,
                    paddingVertical: 12,
                    minHeight: 40,
                    minWidth: 40,
                    aspectRatio: 1,
                };
            default:
                return {};
        }
    };

    // Get text size styles
    const getTextSizeStyle = (): TextStyle => {
        switch (size) {
            case 'sm':
                return {
                    fontSize: 14,
                };
            case 'md':
                return {
                    fontSize: 16,
                };
            case 'lg':
                return {
                    fontSize: 18,
                };
            case 'icon':
                return {
                    fontSize: 0, // No text for icon buttons
                };
            default:
                return {};
        }
    };

    // Spacing between icon and text
    const iconSpacing = size === 'sm' ? 6 : size === 'md' ? 8 : 10;

    // Determine loading indicator color
    const getLoaderColor = () => {
        if (variant === 'default' || variant === 'destructive') {
            return '#ffffff';
        }
        return '#171717';
    };

    // Button content with conditionals for loading, icons, etc.
    const renderContent = () => (
        <>
            {loading ? (
                <ActivityIndicator size="small" color={getLoaderColor()} />
            ) : (
                <>
                    {leftIcon && !isIconOnly && (
                        <View style={{ marginRight: iconSpacing }}>{leftIcon}</View>
                    )}
                    {icon && isIconOnly ? (
                        icon
                    ) : (
                        <>
                            {children && (
                                <Text style={[styles.text, getTextStyles(), textStyle]}>
                                    {children}
                                </Text>
                            )}
                        </>
                    )}
                    {rightIcon && !isIconOnly && (
                        <View style={{ marginLeft: iconSpacing }}>{rightIcon}</View>
                    )}
                </>
            )}
        </>
    );

    // Main button render
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.7}
            style={[getButtonStyles(), style]}
            accessibilityLabel={accessibilityLabel || (typeof children === 'string' ? children : undefined)}
            accessibilityRole="button"
            accessibilityState={{ disabled: disabled || loading, busy: loading }}
            testID={testID}
        >
            {
                renderContent()}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        letterSpacing: 0.3,
    },
});
// Compound pattern components
// eslint-disable-next-line react/display-name
Button.Icon = ({ name, size = 20, color, style }: { name: string, size?: number, color?: string, style?: any }) => (
    <Feather name={name as any} size={size} color={color} style={style} />
);




export default Button;