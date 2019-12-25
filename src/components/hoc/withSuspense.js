import React from 'react';
import Preloader from '../common/Preloader/Preloader.jsx'

export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Preloader />}>
            <Component {...props} />
        </React.Suspense>
    }
}

