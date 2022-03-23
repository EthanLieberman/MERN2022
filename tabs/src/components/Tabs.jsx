import React, { useState } from 'react'

const Tabs = () => {

    const tab1 = {
        title: 'tab 1',
        content: 'ADSFUAHGDBVJASHB'
    }
    const tab2 = {
        title: 'tab 2',
        content: 'ajrhbveiurfhbv'
    }
    const tab3 = {
        title: 'tab 3',
        content: 'rishfb48vf'
    }
    const [tabs, setTabs] = useState([tab1, tab2, tab3])

    const [currentTab, setCurrentTab] = useState(0)

    // const colorSet = (e) => {
    //     console.log(e)
    //     e.style.backgroundColor = 'pink'
    // }



    return (
        <fieldset>
            <legend>Tabs</legend>

            {JSON.stringify({ tabs })}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>

                {tabs.map((tab, i) => {
                    return <div style={ currentTab == i ? {backgroundColor: 'pink'} :{backgroundColor: 'lightgray'}} onClick={(e) => { setCurrentTab(i) }} className='Tab' key={i}> {tab.title} </div>
                })}
            </div>


                    <div style={{backgroundColor: 'lightgray', width: '300px', height: '200px', margin: 'auto', marginTop: '20px'}}>
                        {tabs[currentTab].title} <br />
                        {tabs[currentTab].content}
                    </div>


        </fieldset>

    )
}

export default Tabs