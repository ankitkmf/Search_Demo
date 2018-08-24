import React, { Component } from 'react';
import Namelist from './components/namelist';
import Search from './components/search';
import SelectList from './components/selectedname';

class App extends Component {

    constructor(props){
      super(props);
      this.state={
        filterUpdate:'',
        selectedNames:[],
        data:this.props.data
      };
    }

    searchData(value){
      this.setState({
        filterUpdate:value
      });   
  }

  selectedNameCallback(name){
    console.log("Remove:"+name.name+" , ID:"+name.id);
    var nameCollection=this.state.selectedNames;
    nameCollection.push(name);
     this.setState({
        selectedNames:nameCollection
     });
     let datalist =this.state.data;
     datalist=datalist.filter(obj=>{
       return obj.id!==name.id;
     });
     
     this.setState({
       data:datalist
     })
  };

  removeName(name){
      console.log("removeName:"+name.name);
      let datalist =this.state.data;
      datalist.push(name);
      this.setState({
        data:datalist
      })

    var nameCollection=this.state.selectedNames;
    nameCollection=nameCollection.filter(obj=>{
      return obj.id!==name.id;
    });
     this.setState({
        selectedNames:nameCollection
     });
  }

  render() {
    //console.log("Update state:"+this.state.filterUpdate);
    return (
      <div>
      <Search
      filterUpdate={this.state.filterUpdate}
      SearchData={this.searchData.bind(this)}/>
      <SelectList selectedNames={this.state.selectedNames} removeName={this.removeName.bind(this)} />
        <main>
          <Namelist
          data={this.state.data}
          filterData={this.state.filterUpdate}
          selectedName={this.selectedNameCallback.bind(this)}
        />
        </main>
      </div>
    );
  }
}

export default App;

