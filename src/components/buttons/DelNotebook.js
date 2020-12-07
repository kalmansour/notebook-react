import { useState } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import notebookStore from '../../stores/notebookStore'

const DelNotebook = ({ notebookId }) => {
  const handleDelete = () => {
    console.log('yoooooo')
    notebookStore.deleteNotebook(notebookId)
  }
  return (
    <div>
      <BsFillTrashFill
        className='float-right'
        size='2em'
        onClick={handleDelete}
      />
    </div>
  )
}

export default DelNotebook
