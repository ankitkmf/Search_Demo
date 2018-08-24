import React from 'react';

export default ({selectedNames,removeName})=>{
  const list=selectedNames.map(name=>{   
    return <li className={name.sex} key={name.id} onClick={()=>removeName(name)} >{name.name}</li>
  });

  return (
    <div className="favourites">
          <ul>
          {list}
          </ul>
      </div>
    );
}