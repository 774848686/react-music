import React from 'react';

import { loading, LoadingWrapper } from './style';
function Loading() {
    return (
        <LoadingWrapper>
            <div></div>
            <div></div>
        </LoadingWrapper>
    )
}
export default React.memo(Loading);