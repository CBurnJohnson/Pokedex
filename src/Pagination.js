import React from 'react';

function Pagination({ goToNextPage, goToPrevPage }) {
    return (
        <div className='btn-container'>
            {goToPrevPage && (
                <button onClick={goToPrevPage} className='btn-page'>
                    Previous
                </button>
            )}
            {goToNextPage && (
                <button onClick={goToNextPage} className='btn-page'>
                    Next
                </button>
            )}
        </div>
    );
}

export default Pagination;
