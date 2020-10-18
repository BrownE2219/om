import React, { useState, Component} from 'react';
import './main.css'
import axios from 'axios';
import './../../logo1.jpg';
import Header from './../../header';
import Footer from './../../footer';
class Main extends Component{
  state = { users:[],
            stories:[]};

    componentWillMount = async() => {
		  const finndAllUserStory = await axios.post("http://localhost:3000/getpost")
      this.setState({users:finndAllUserStory.data});
      console.log(this.state.users);
      this.findAllStory();
	};
  findAllStory = () =>{
  this.state.users.map(user => (
  axios.post("http://localhost:3000/findAllStory",{user_id:user._id})
  .then(response =>{
  const updataStories = this.state.stories.concat(response.data);
  this.setState({stories:updataStories});
  console.log(this.state.stories);
})
))}
	render(){
    const {users,stories} = this.state
		return (

			<div onClick={() =>{console.log(this.state.users)}}>
			<div>
				<Header/>
			</div>
			<div className="td1">
					<div className="leftDiv">
          {stories.map(story => (
						<div className= "userLeft">
						<table className="width">
						<tbody>
						<tr className="width">
						<td className="nameString">
							<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
							<div className="contain">
								<p className="showCity">{`Blood Group- ${story.bloodGroup}`}</p>
							</div>
						</td>
						<td className="nameString">
							<h2>{story.name}</h2>
							<p>{story.message}</p>
						</td>
						</tr>
						</tbody>
						</table>
						</div>
          ))}
						<div className= "userLeft">
						<table className="width">
						<tbody>
						<tr className="width">
						<td className="nameString">
							<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
							<div className="contain">
								<p className="showCity">John Doe</p>
							</div>
						</td>
						<td className="nameString">
							<h2>Name</h2>
							<p> location and other</p>
						</td>
						</tr>
						</tbody>
						</table>
						</div>
						<div className= "userLeft">
						<table className="width">
						<tbody>
						<tr className="width">
						<td className="nameString">
							<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
							<div className="contain">
								<p className="showCity">John Doe</p>
							</div>
						</td>
						<td className="nameString">
							<h2>Name</h2>
							<p> location and other</p>
						</td>
						</tr>
						</tbody>
						</table>
						</div>
						<div className= "userLeft">
						<table className="width">
						<tbody>
						<tr className="width">
						<td className="nameString">
							<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
							<div className="contain">
								<p className="showCity">John Doe</p>
							</div>
						</td>
						<td className="nameString">
							<h2>Name</h2>
							<p> location and other</p>
						</td>
						</tr>
						</tbody>
						</table>
						</div>
						<div className= "userLeft">
						<table className="width">
						<tbody>
						<tr className="width">
						<td className="nameString">
							<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
							<div className="contain">
								<p className="showCity">John Doe</p>
							</div>
						</td>
						<td className="nameString">
							<h2>Name</h2>
							<p> location and other</p>
						</td>
						</tr>
						</tbody>
						</table>
						</div>
						<div className= "userLeft">
						<table className="width">
						<tbody>
						<tr className="width">
						<td className="nameString">
							<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
							<div className="contain">
								<p className="showCity">John Doe</p>
							</div>
						</td>
						<td className="nameString">
							<h2>Name</h2>
							<p> location and other</p>
						</td>
						</tr>
						</tbody>
						</table>
						</div>
						<div className= "userLeft">
						<table className="width">
						<tbody>
						<tr className="width">
						<td className="nameString">
							<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
							<div className="contain">
								<p className="showCity">John Doe</p>
							</div>
						</td>
						<td className="nameString">
							<h2>Name</h2>
							<p> location and other</p>
						</td>
						</tr>
						</tbody>
						</table>
						</div>
						<div className= "userLeft">
						<table className="width">
						<tbody>
						<tr className="width">
						<td className="nameString">
							<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
							<div className="contain">
								<p className="showCity">John Doe</p>
							</div>
						</td>
						<td className="nameString">
							<h2>Name</h2>
							<p> location and other</p>
						</td>
						</tr>
						</tbody>
						</table>
						</div>
						<div className= "userLeft">
						<table className="width">
						<tbody>
						<tr className="width">
						<td className="nameString">
							<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
							<div className="contain">
								<p className="showCity">John Doe</p>
							</div>
						</td>
						<td className="nameString">
							<h2>Name</h2>
							<p> location and other</p>
						</td>
						</tr>
						</tbody>
						</table>
						</div>
						<div className= "userLeft">
						<table className="width">
						<tbody>
						<tr className="width">
						<td className="nameString">
							<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
							<div className="contain">
								<p className="showCity">John Doe</p>
							</div>
						</td>
						<td className="nameString">
							<h2>Name</h2>
							<p> location and other</p>
						</td>
						</tr>
						</tbody>
						</table>
						</div>
						<div className= "userLeft">
						<table className="width">
						<tbody>
						<tr className="width">
						<td className="nameString">
							<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
							<div className="contain">
								<p className="showCity">John Doe</p>
							</div>
						</td>
						<td className="nameString">
							<h2>Name</h2>
							<p> location and other</p>
						</td>
						</tr>
						</tbody>
						</table>
						</div>
						<div className= "userLeft">
						<table className="width">
						<tbody>
						<tr className="width">
						<td className="nameString">
							<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
							<div className="contain">
								<p className="showCity">John Doe</p>
							</div>
						</td>
						<td className="nameString">
							<h2>Name</h2>
							<p> location and other</p>
						</td>
						</tr>
						</tbody>
						</table>
						</div>
						<div className= "userLeft">
						<table className="width">
						<tbody>
						<tr className="width">
						<td className="nameString">
							<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
							<div className="contain">
								<p className="showCity">John Doe</p>
							</div>
						</td>
						<td className="nameString">
							<h2>Name</h2>
							<p> location and other</p>
						</td>
						</tr>
						</tbody>
						</table>
						</div>
						<div className= "userLeft">
						<table className="width">
						<tbody>
						<tr className="width">
						<td className="nameString">
							<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
							<div className="contain">
								<p className="showCity">John Doe</p>
							</div>
						</td>
						<td className="nameString">
							<h2>Name</h2>
							<p> location and other</p>
						</td>
						</tr>
						</tbody>
						</table>
						</div>
						<div className= "userLeft">
						<table className="width">
						<tbody>
						<tr className="width">
						<td className="nameString">
							<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
							<div className="contain">
								<p className="showCity">John Doe</p>
							</div>
						</td>
						<td className="nameString">
							<h2>Name</h2>
							<p> location and other</p>
						</td>
						</tr>
						</tbody>
						</table>
						</div>
						<div className= "userLeft">
						<table className="width">
						<tbody>
						<tr className="width">
						<td className="nameString">
							<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
							<div className="contain">
								<p className="showCity">John Doe</p>
							</div>
						</td>
						<td className="nameString">
							<h2>Name</h2>
							<p> location and other</p>
						</td>
						</tr>
						</tbody>
						</table>
						</div>
					</div>
					<div className="searchInput">
						<input className="input1"  placeholder="Search" type="text"/>
						<input className="input2" placeholder="Blood Group" type="dropdown"/>
						<input className="input2" placeholder="City" type="dropdown"/>
					</div>
					<div className="rightDiv">
          {users.map(user => (
            <div className="userRight1">
              <table className="width">
              <tbody>
              <tr className="width">
              <td className="nameString">
                <img className="circleImage" src="logo1.jpg" alt="Avatar"/>
                <div className="contain">
                  <p className="showCity">{user.city}</p>
                </div>
              </td>
              <td className="nameString">
                <h2>{user.name}</h2>
                <p>{`Blood Group- ${user.bloodGroup}`}</p>
                <p>{`Recovered on- ${user.reportDate}`}</p>
                <p>{`Age- ${user.age}`}</p>
                <p>{`Pin Code- ${user.pinCode}`}</p>
                <button className="contect">contact</button>
              </td>
              </tr>
              </tbody>
              </table>
            </div>
            ))}
						<div className="userRight1">
							<table className="width">
							<tbody>
							<tr className="width">
							<td className="nameString">
								<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
								<div className="contain">
									<p className="showCity">John Doe</p>
								</div>
							</td>
							<td className="nameString">
								<h2>Name</h2>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<button className="contect">contact</button>
							</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div className="userRight1">
							<table className="width">
							<tbody>
							<tr className="width">
							<td className="nameString">
								<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
								<div className="contain">
									<p className="showCity">John Doe</p>
								</div>
							</td>
							<td className="nameString">
								<h2>Name</h2>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<button className="contect">contact</button>
							</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div className="userRight1">
							<table className="width">
							<tbody>
							<tr className="width">
							<td className="nameString">
								<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
								<div className="contain">
									<p className="showCity">John Doe</p>
								</div>
							</td>
							<td className="nameString">
								<h2>Name</h2>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<button className="contect">contact</button>
							</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div className="userRight1">
							<table className="width">
							<tbody>
							<tr className="width">
							<td className="nameString">
								<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
								<div className="contain">
									<p className="showCity">John Doe</p>
								</div>
							</td>
							<td className="nameString">
								<h2>Name</h2>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<button className="contect">contact</button>
							</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div className="userRight1">
							<table className="width">
							<tbody>
							<tr className="width">
							<td className="nameString">
								<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
								<div className="contain">
									<p className="showCity">John Doe</p>
								</div>
							</td>
							<td className="nameString">
								<h2>Name</h2>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<button className="contect">contact</button>
							</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div className="userRight1">
							<table className="width">
							<tbody>
							<tr className="width">
							<td className="nameString">
								<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
								<div className="contain">
									<p className="showCity">John Doe</p>
								</div>
							</td>
							<td className="nameString">
								<h2>Name</h2>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<button className="contect">contact</button>
							</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div className="userRight1">
							<table className="width">
							<tbody>
							<tr className="width">
							<td className="nameString">
								<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
								<div className="contain">
									<p className="showCity">John Doe</p>
								</div>
							</td>
							<td className="nameString">
								<h2>Name</h2>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<button className="contect">contact</button>
							</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div className="userRight1">
							<table className="width">
							<tbody>
							<tr className="width">
							<td className="nameString">
								<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
								<div className="contain">
									<p className="showCity">John Doe</p>
								</div>
							</td>
							<td className="nameString">
								<h2>Name</h2>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<button className="contect">contact</button>
							</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div className="userRight1">
							<table className="width">
							<tbody>
							<tr className="width">
							<td className="nameString">
								<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
								<div className="contain">
									<p className="showCity">John Doe</p>
								</div>
							</td>
							<td className="nameString">
								<h2>Name</h2>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<button className="contect">contact</button>
							</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div className="userRight1">
							<table className="width">
							<tbody>
							<tr className="width">
							<td className="nameString">
								<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
								<div className="contain">
									<p className="showCity">John Doe</p>
								</div>
							</td>
							<td className="nameString">
								<h2>Name</h2>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<button className="contect">contact</button>
							</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div className="userRight1">
							<table className="width">
							<tbody>
							<tr className="width">
							<td className="nameString">
								<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
								<div className="contain">
									<p className="showCity">John Doe</p>
								</div>
							</td>
							<td className="nameString">
								<h2>Name</h2>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<button className="contect">contact</button>
							</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div className="userRight1">
							<table className="width">
							<tbody>
							<tr className="width">
							<td className="nameString">
								<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
								<div className="contain">
									<p className="showCity">John Doe</p>
								</div>
							</td>
							<td className="nameString">
								<h2>Name</h2>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<button className="contect">contact</button>
							</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div className="userRight1">
							<table className="width">
							<tbody>
							<tr className="width">
							<td className="nameString">
								<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
								<div className="contain">
									<p className="showCity">John Doe</p>
								</div>
							</td>
							<td className="nameString">
								<h2>Name</h2>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<button className="contect">contact</button>
							</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div className="userRight1">
							<table className="width">
							<tbody>
							<tr className="width">
							<td className="nameString">
								<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
								<div className="contain">
									<p className="showCity">John Doe</p>
								</div>
							</td>
							<td className="nameString">
								<h2>Name</h2>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<button className="contect">contact</button>
							</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div className="userRight1">
							<table className="width">
							<tbody>
							<tr className="width">
							<td className="nameString">
								<img className="circleImage" src="logo1.jpg" alt="Avatar"/>
								<div className="contain">
									<p className="showCity">John Doe</p>
								</div>
							</td>
							<td className="nameString">
								<h2>Name</h2>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<p> location and other</p>
								<button className="contect">contact</button>
							</td>
							</tr>
							</tbody>
							</table>
						</div>

						</div>
			</div>
			<div>
				<Footer/>
			</div>
			</div>
			);
	}
}

export default Main
