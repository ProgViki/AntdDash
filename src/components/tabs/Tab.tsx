import React, { ReactElement } from 'react'

type Props = {
    title: string;
    children: ReactElement[];
    setSelectedTab: (index: number) => void;
    index: number
}

export const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {
    return (
        <li>
            <div className=' w-full'
                onClick={() => setSelectedTab(index)}>
            
                <button  className='w-[100px] h-10 md:w-[400px] mt-10 md:h-20 font-bold text-center bg-gray-200 border border-gray-500 rounded-t-md'>{title}</button>
                </div>
        </li>
    )
}
const Tab: React.FC<Props> = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}
export default Tab