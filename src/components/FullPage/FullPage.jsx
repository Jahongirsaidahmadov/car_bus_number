import React from 'react';
import Header from '../Header/Header';
import HomePage from '../Homepage/HomPage'
import '../Homepage/hompage.css'


function FullPage() {
    return (
        <div className="fp" >
            <Header />
            <HomePage />
        </div>
    )
}

export default FullPage
