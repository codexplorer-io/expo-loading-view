import React from 'react';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import { LoadingRoot, Text } from './styled';

export const LoadingView = ({
    size = 'large',
    message = null
}) => {
    const theme = useTheme();

    return (
        <LoadingRoot>
            <ActivityIndicator
                animating
                color={theme.colors.primary}
                size={size}
            />
            {!!message && (
                <Text>{message}</Text>
            )}
        </LoadingRoot>
    );
};
