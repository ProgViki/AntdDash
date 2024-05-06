import React, { ReactElement, useState } from 'react'
import { TabTitle } from './Tab'


type Props = {
    children: ReactElement[]
    index: number;
}

const Tabs: React.FC<Props> = ({children}) => {
    const [selectedTab, setSelectedTab] = useState(0)
  return (
    <div className='w-full h-auto'>
        <ul className='w-full h-30 flex  gap-2 border justify-center items-center'>
            {children.map((item, index) =>(
                <TabTitle key={index} title={item.props.title} index={index}
                setSelectedTab={setSelectedTab}
                 />  
            ))}
        </ul>
        {children[selectedTab]}
    </div>
  )
}

export default Tabs