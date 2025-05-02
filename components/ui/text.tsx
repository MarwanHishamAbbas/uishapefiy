/* eslint-disable react/display-name */
import React from 'react';
import {
    Text as RNText,
    TextProps as RNTextProps,
    StyleSheet,
    TextStyle,
    Platform,
} from 'react-native';

export type TextVariant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'title'
    | 'subtitle'
    | 'body'
    | 'bodyLarge'
    | 'bodySmall'
    | 'caption'
    | 'label'
    | 'code'
    | 'quote';

export type TextSize =
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl';

export type TextWeight =
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold';

export type TextAlign =
    | 'auto'
    | 'left'
    | 'right'
    | 'center'
    | 'justify';

export type TextTransform =
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase';

export type TextDecoration =
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';

export interface TextProps extends RNTextProps {
    /** Text variant style */
    variant?: TextVariant;

    /** Text font size */
    size?: TextSize | number;

    /** Text color */
    color?: string;

    /** Text font weight */
    weight?: TextWeight;

    /** Text letter spacing */
    letterSpacing?: number;

    /** Text line height */
    lineHeight?: number;

    /** Text alignment */
    align?: TextAlign;

    /** Text transformation */
    transform?: TextTransform;

    /** Text decoration */
    decoration?: TextDecoration;

    /** Whether the text is muted (reduced opacity) */
    muted?: boolean;

    /** Whether the text has an ellipsis when it overflows */
    ellipsis?: boolean;

    /** Number of lines before truncation (works with ellipsis) */
    lines?: number;

    /** Whether text is italic */
    italic?: boolean;

    /** Whether text should have a strikethrough */
    strikethrough?: boolean;

    /** Whether text should be underlined */
    underline?: boolean;

    /** Custom spacing below the text */
    mb?: number;

    /** Custom spacing above the text */
    mt?: number;

    /** Custom spacing on both sides of the text */
    mx?: number;

    /** Custom spacing on left side of the text */
    ml?: number;

    /** Custom spacing on right side of the text */
    mr?: number;

    /** Whether the text should be selectable by the user */
    selectable?: boolean;

    /** Whether the text should adjust font size to fit */
    adjustsFontSizeToFit?: boolean;

    /** Minimum scale factor for automatic font size adjustment */
    minimumFontScale?: number;

    /** Custom style override */
    style?: TextStyle | TextStyle[];

    /** Content of the Text component */
    children?: React.ReactNode;
}

/**
 * Text component that follows shadcn/ui design principles
 */
export const Text = ({
    variant = 'body',
    size,
    color,
    weight,
    letterSpacing,
    lineHeight,
    align,
    transform,
    decoration,
    muted = false,
    ellipsis = false,
    lines,
    italic = false,
    strikethrough = false,
    underline = false,
    mb,
    mt,
    mx,
    ml,
    mr,
    selectable = true,
    adjustsFontSizeToFit,
    minimumFontScale,
    style,
    children,
    ...rest
}: TextProps) => {
    // Get variant styles
    const getVariantStyle = (): TextStyle => {
        switch (variant) {
            case 'h1':
                return {
                    fontSize: 36,
                    fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
                    lineHeight: 44,
                    letterSpacing: -0.5,
                };
            case 'h2':
                return {
                    fontSize: 30,
                    fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
                    lineHeight: 38,
                    letterSpacing: -0.5,
                };
            case 'h3':
                return {
                    fontSize: 26,
                    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
                    lineHeight: 32,
                    letterSpacing: -0.3,
                };
            case 'h4':
                return {
                    fontSize: 22,
                    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
                    lineHeight: 28,
                    letterSpacing: -0.3,
                };
            case 'title':
                return {
                    fontSize: 20,
                    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
                    lineHeight: 28,
                    letterSpacing: -0.2,
                };
            case 'subtitle':
                return {
                    fontSize: 18,
                    fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
                    lineHeight: 24,
                    letterSpacing: -0.2,
                };
            case 'bodyLarge':
                return {
                    fontSize: 18,
                    fontWeight: 'normal',
                    lineHeight: 26,
                };
            case 'body':
                return {
                    fontSize: 16,
                    fontWeight: 'normal',
                    lineHeight: 24,
                };
            case 'bodySmall':
                return {
                    fontSize: 14,
                    fontWeight: 'normal',
                    lineHeight: 20,
                };
            case 'caption':
                return {
                    fontSize: 12,
                    fontWeight: 'normal',
                    lineHeight: 16,
                    letterSpacing: 0.2,
                };
            case 'label':
                return {
                    fontSize: 14,
                    fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
                    lineHeight: 20,
                    letterSpacing: 0.1,
                };
            case 'code':
                return {
                    fontSize: 14,
                    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
                    lineHeight: 20,
                    backgroundColor: '#f1f5f9',
                    paddingHorizontal: 4,
                    paddingVertical: 2,
                    borderRadius: 4,
                };
            case 'quote':
                return {
                    fontSize: 16,
                    fontStyle: 'italic',
                    lineHeight: 24,
                    borderLeftWidth: 4,
                    borderLeftColor: '#e2e8f0',
                    paddingLeft: 12,
                    marginVertical: 8,
                };
            default:
                return {};
        }
    };

    // Get font size based on size prop
    const getFontSize = (): TextStyle => {
        if (typeof size === 'number') {
            return { fontSize: size };
        }

        switch (size) {
            case 'xs':
                return { fontSize: 12 };
            case 'sm':
                return { fontSize: 14 };
            case 'md':
                return { fontSize: 16 };
            case 'lg':
                return { fontSize: 18 };
            case 'xl':
                return { fontSize: 20 };
            case '2xl':
                return { fontSize: 24 };
            case '3xl':
                return { fontSize: 30 };
            case '4xl':
                return { fontSize: 36 };
            case '5xl':
                return { fontSize: 48 };
            case '6xl':
                return { fontSize: 64 };
            default:
                return {};
        }
    };

    // Get font weight based on weight prop
    const getFontWeight = (): TextStyle => {
        switch (weight) {
            case 'normal':
                return { fontWeight: 'normal' };
            case 'medium':
                return { fontWeight: Platform.OS === 'ios' ? '500' : 'bold' };
            case 'semibold':
                return { fontWeight: Platform.OS === 'ios' ? '600' : 'bold' };
            case 'bold':
                return { fontWeight: 'bold' };
            case 'extrabold':
                return { fontWeight: Platform.OS === 'ios' ? '800' : 'bold' };
            default:
                return {};
        }
    };

    // Get text align based on align prop
    const getTextAlign = (): TextStyle => {
        if (align) {
            return { textAlign: align };
        }
        return {};
    };

    // Get text transform based on transform prop
    const getTextTransform = (): TextStyle => {
        if (transform) {
            return { textTransform: transform };
        }
        return {};
    };

    // Get text decoration based on decoration prop or individual props
    const getTextDecoration = (): TextStyle => {
        if (decoration) {
            return { textDecorationLine: decoration };
        }

        if (underline && strikethrough) {
            return { textDecorationLine: 'underline line-through' };
        }

        if (underline) {
            return { textDecorationLine: 'underline' };
        }

        if (strikethrough) {
            return { textDecorationLine: 'line-through' };
        }

        return {};
    };

    // Get margin styles
    const getMarginStyles = (): TextStyle => {
        const marginStyles: TextStyle = {};

        if (mb !== undefined) marginStyles.marginBottom = mb;
        if (mt !== undefined) marginStyles.marginTop = mt;
        if (mx !== undefined) {
            marginStyles.marginLeft = mx;
            marginStyles.marginRight = mx;
        }
        if (ml !== undefined) marginStyles.marginLeft = ml;
        if (mr !== undefined) marginStyles.marginRight = mr;

        return marginStyles;
    };

    // Combine all styles
    const textStyles = [
        styles.base,
        getVariantStyle(),
        getFontSize(),
        color ? { color } : {},
        getFontWeight(),
        letterSpacing !== undefined ? { letterSpacing } : {},
        lineHeight !== undefined ? { lineHeight } : {},
        getTextAlign(),
        getTextTransform(),
        getTextDecoration(),
        muted ? { opacity: 0.7 } : {},
        italic ? { fontStyle: 'italic' } : {},
        getMarginStyles(),
        style,
    ];

    return (
        <RNText
            // @ts-ignore
            style={textStyles}
            numberOfLines={ellipsis || lines ? lines || 1 : undefined}
            ellipsizeMode={ellipsis ? 'tail' : undefined}
            selectable={selectable}
            adjustsFontSizeToFit={adjustsFontSizeToFit}
            minimumFontScale={minimumFontScale}
            {...rest}
        >
            {children}
        </RNText>
    );
};

const styles = StyleSheet.create({
    base: {
        color: '#000000',
    },
});

// Convenience compound components
Text.H1 = (props: Omit<TextProps, 'variant'>) => <Text variant="h1" {...props} />;
Text.H2 = (props: Omit<TextProps, 'variant'>) => <Text variant="h2" {...props} />;
Text.H3 = (props: Omit<TextProps, 'variant'>) => <Text variant="h3" {...props} />;
Text.H4 = (props: Omit<TextProps, 'variant'>) => <Text variant="h4" {...props} />;
Text.Title = (props: Omit<TextProps, 'variant'>) => <Text variant="title" {...props} />;
Text.Subtitle = (props: Omit<TextProps, 'variant'>) => <Text variant="subtitle" {...props} />;
Text.Body = (props: Omit<TextProps, 'variant'>) => <Text variant="body" {...props} />;
Text.BodyLarge = (props: Omit<TextProps, 'variant'>) => <Text variant="bodyLarge" {...props} />;
Text.BodySmall = (props: Omit<TextProps, 'variant'>) => <Text variant="bodySmall" {...props} />;
Text.Caption = (props: Omit<TextProps, 'variant'>) => <Text variant="caption" {...props} />;
Text.Label = (props: Omit<TextProps, 'variant'>) => <Text variant="label" {...props} />;
Text.Code = (props: Omit<TextProps, 'variant'>) => <Text variant="code" {...props} />;
Text.Quote = (props: Omit<TextProps, 'variant'>) => <Text variant="quote" {...props} />;

export default Text;