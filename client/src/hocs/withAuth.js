import React from 'react'
import { connect } from "react-redux";

export default function withAuth(ComponentToBeRendered) {
	class Authenticate extends React.Component{
		componentDidMount(){
			console.log("isAuthenticated",this.props.isAuthenticated);
			if(this.props.isAuthenticated === false ){
				this.props.history.push("/signin");
			}
		}
		componentDidUpdate(nextProps){
			console.log("isAuthenticated",this.props.isAuthenticated);
			if(nextProps.isAuthenticated === false ){
				this.props.history.push("/signin");
			}
		}
		render(){
			console.log('Main curr user:');
			return <ComponentToBeRendered {...this.props}/> 
		}
		
	}

function mapStateToProps(state){
	return{
		isAuthenticated: state.currentUser.isAuthenticated
	}
}

return connect(mapStateToProps)(Authenticate)
}