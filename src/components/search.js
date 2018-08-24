import React , {Component} from 'react';

class Search extends Component{

  dataUpdate(){
   // console.log(this.refs.control.value);
    this.props.SearchData(this.refs.control.value);
  }

  render(){
    return (
    <form>
       <input 
       type="text" 
       ref="control"
       onChange={this.dataUpdate.bind(this)}
       placeholder="type somthing to search name" 
      // value={this.props.filterUpdate}
       />
    </form>
    );
  }
}
export default Search;
