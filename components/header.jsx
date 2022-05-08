import React, { Component } from 'react';

function Header() {
    return(
        <div className='bg-white dark:bg-slate-900 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
            <div className='w-1/4 border-slate-900 dark:border-slate-200 border-double border-b-8'>
                <p className='text-slate-900 dark:text-slate-50 text-6xl font-extrabold pl-2 pb-2'>KnowRuz</p>
            </div>
        </div>
    )
}

export default Header;