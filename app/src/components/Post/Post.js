import React from 'react';
import ReactDOM from 'react-dom/client';
import './Post.css';

export function Post() {
    return (
        <div>
            <form>
                <label>Enter your name:
                    <input type="text" />
                </label>
            </form>
        </div>
    );
}
