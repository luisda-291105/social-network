import {useContext} from 'react'
import {ContextComments} from './GroupBtn'

export default function CommentsP() {
    let [comment , setComments] = useContext(ContextComments)
  return (
    <div >
        <p>{comment}</p>
    </div>
  )
}
