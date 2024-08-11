import Pagination from '@/app/ui/dashboard/pagination/pagination'
import Search from '@/app/ui/dashboard/search/search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/ui/dashboard/products/products.module.css'


const ProductsPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <Search 
        placeholder={"Search for a product..."}
      /> 
      <Link href={'/dashboard/products/add'}>
        <button className={styles.addButton}>
          Add New
        </button>
      </Link>
      
    </div>
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>Price</td>
          <td>Created At</td>
          <td>Stock</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className={styles.user}>
              <Image 
                src={'/noproduct.jpg'}
                alt=''
                width={40}
                height={40}
                className={styles.userImage}
              />
              IPhone
            </div>
          </td>
          <td>Desc</td>
          <td>$999</td>
          <td>13.01.2022</td>
          <td>73</td>
          <td>
            <div className={styles.buttons}>
              <Link href={'/'}>
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>

              <Link href={'/'}>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </Link>
            </div>

          </td>
        </tr>
      </tbody>
    </table>
    <Pagination />
  </div>
  )
}

export default ProductsPage