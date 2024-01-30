import { ArrowUturnLeftIcon } from '@heroicons/react/16/solid'

import Link from 'next/link'

const StudioNavbar = (props: any) => {
  return (
    <div>


<div className='flex items-center justify-between p-5'>
    <Link href="/" className='text-blue-700 flex items-center '>
        
        <ArrowUturnLeftIcon className=' h-6 w-6 text-blue-700 font-bold mr-2'></ArrowUturnLeftIcon>
        Go To Website</Link>
</div>



<>{props.renderDefault(props)}</>


    </div>
  )
}

export default StudioNavbar