import React from 'react'

function Pagination({currentPage, totalPages, onPageChange}) {
  if(totalPages <= 1) return null; 
  return (
    <div className='mt-6 flex items-center justify-center gap-3'>
      <button
      onClick = {()=>onPageChange(Math.max(currentPage - 1, 1))}
      disabled = {currentPage ===1}
      className='rounded bg-gray-200 px-4 py-2 disabled:cursor-not-allowed disabled : opacity-50'>
        Prev
      </button>
      <span className='text-sm font-medium'> Page {currentPage} of {totalPages}</span>
      <button
      onClick = {()=>onPageChange(Math.min(currentPage + 1, totalPages))}
      disabled = {currentPage === totalPages}
      className='rounded bg-gray-200 px-4 py-2 disabled:cursor-not-allowed disabled : opacity-50'>
        Next
      </button>
    </div>
  )
}

export default Pagination