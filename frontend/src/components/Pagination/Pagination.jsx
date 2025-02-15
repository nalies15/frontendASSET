import React from 'react'
import styles from './Pagination.module.css'

const Pagination = () => {
  return (
    <div className={`d-flex justify-content-between align-items-center gap-3 ${styles.pagination}`}>
        <i class="fa-solid fa-arrow-left"></i>
        <div className='d-flex gap-2'>
            <div className={`${styles.current} ${styles.page}`}>1</div>
            <div className={`${styles.next} ${styles.page}`}>2</div>
        </div>
        <i class="fa-solid fa-arrow-right"></i>
    </div>
  )
}

export default Pagination
