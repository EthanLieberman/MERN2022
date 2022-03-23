import React from 'react'

const List = (props) => {


    const checked = (isChecked, i) => {

        props.updateChecked(isChecked, i)

    }

    const remove = (e, i) =>{
        e.preventDefault();
        props.remove(e, i)
    }


    return (
        <fieldset>
            <legend>List</legend>
            
            {
                props.list.map( (item, i) => {
                    return <form onSubmit={ (e) => remove(e, i) } key={i}>
                        <label style={ item.isChecked === true? {textDecoration: 'line-through'} : {}}>{item.title}</label>
                        <input type="checkbox" checked={item.isChecked} onChange={ (e) => checked(e.target.checked, i) }/>
                        <button style={{borderRadius: '5px', backgroundColor: 'black', color: 'white', padding: '5px', margin: '5px'}}>Delete</button>
                    </form>
                })
            }


        </fieldset>
    )
}

export default List