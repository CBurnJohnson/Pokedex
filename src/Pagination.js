import React from 'react';

function Pagination({ goToNextPage, goToPrevPage }) {
    return (
        <div className='btn-container'>
            {goToPrevPage && (
                <button
                    onTouch={goToPrevPage}
                    onClick={goToPrevPage}
                    className='btn-page'
                >
                    Previous
                </button>
            )}
            {goToNextPage && (
                <button
                    onTouch={goToNextPage}
                    onClick={goToNextPage}
                    className='btn-page'
                >
                    Next
                </button>
            )}
        </div>
    );
}

export default Pagination;
