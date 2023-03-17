import { View, Spinner, Button } from 'native-base'
import { useState } from 'react';

const Loading = () => {
    return (
        <View
            flex={1}
            justifyContent="center"
            alignItems="center"
        >
            <Spinner />
        </View>
    )
}


export default Loading;