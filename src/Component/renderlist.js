import React,{Component} from "react";
import classNames from "classnames";
import "./renderlist.css";
class Renderlist extends Component{
    render(){
        const item=this.props.item;
        const index=this.props.index;
        return(
            <tr className={classNames({"is-even":index%2===0})}>
                <td>{index}</td>
                <td>{item.fistname}</td>
                <td>{item.lastname}</td>
                <td>{item.handle}</td>
            </tr>
        );

    }
}
export default Renderlist;
