import { Rating } from 'react-native-ratings';
import React from 'react';

const Valuation = (props) => {

    const { starSize, readOnly, value, fractions } = props;

    return <Rating
        type='custom'
        imageSize={starSize}
        ratingColor='#FF8C00'
        readonly={readOnly}
        startingValue={value}
        fractions={fractions}
    >
    </Rating>

}

export default Valuation;