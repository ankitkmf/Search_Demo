import React, { Component } from 'react';

class Namelist extends Component  {     
  //console.log("filterData:"+filterData);
  // selectName(name){
  //   console.log("Selected name:",name);
  // }  

  render(){
      const {data,filterData,selectedName}=this.props;
      const result=data
        .filter(name=>{      
          return name.name.toLowerCase().indexOf(filterData.toLowerCase())>=0
        })
        .map(name=>{
          return <li className={name.sex} key={name.id} 
          onClick={()=>selectedName(name)}>{name.name}
         
          </li>
        });
        return (
          <ul>
              {result}
          </ul>
        );
     }   
}

export default Namelist;



