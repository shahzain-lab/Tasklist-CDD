import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { Tasklist } from './Tasklist';


type Props = {
    error?: string
}

export const PureInboxScreen: FC<Props> = ({ error }) => {
    if (error) {
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className="icon-face-sad" />
                    <div className="title-message">Oh no!</div>
                    <div className="subtitle-message">Something went wrong</div>
                </div>
            </div>
        );
    }
    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">
                    <span className="title-wrapper">Taskbox</span>
                </h1>
            </nav>
            <Tasklist />
        </div>
    );
}


export function InboxScreen() {
    // We're retrieving the error field from our updated store
    const isError = useSelector((state: any) => state.isError);

    return <PureInboxScreen />;
}