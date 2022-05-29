import React, { Component } from "react";
import './inputs.css';



class Inputs extends Component {
    state = {
        name: '',
        country: '',
        bio: '',
        birthday: '',
        gender: '',
        agree: false,
        skills: []
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleCheckBox = event => {
        this.setState({
            agree: event.target.checked
        });
    };

    handleSkillChange = event => {
        if(event.target.checked){
            this.setState({
                skills: [...this.state.skills, event.target.value]
            })
        }else {
            const skills = this.state.skills.filter(skill => skill != event.target.value);
            this.setState({skills});
        }
    }

    render() {
        const {name, country, bio, birthday, agree, skills} = this.state;
        return (
            <div>
               <div>
                    <h1 className="Heading">Working with Forms in React</h1>
               </div>
               <div>
                   <input
                        onChange={this.handleChange}
                        className="form-control my-2" 
                        type='text' 
                        name='name'
                        value={name} placeholder='Rabiul Hossain'
                    />
                    <select  
                        onChange={this.handleChange}
                        value={country}
                        className="form-control my-2" name='country'>
                        <option             value='Bangladesh'>
                            Bangladesh
                        </option>
                        <option value='New Zealand'>
                            New Zealand
                        </option>
                        <option value='Japan'>
                            Japan
                        </option>
                        <option value='Bhutan'>
                            Bhutan
                        </option>
                    </select>
                    <textarea 
                        onChange={this.handleChange}
                        value={bio}
                        className="form-control my-2" name='bio' placeholder="Tell Me About Yourself"/>
                    <input 
                        onChange={this.handleChange}
                        value={birthday}
                        className="form-control my-2" type='date' name='birthday'/>
               </div>
               <div>
                   <input
                        type='radio'
                        name='gender'
                        value='male'
                        onChange={this.handleChange}
                   />
                   Male  
                   <input
                        type='radio'
                        name='gender'
                        value='female'
                        onChange={this.handleChange}
                   />
                   Female  
                   <input
                        type='radio'
                        name='gender'
                        value='other'
                        onChange={this.handleChange}
                   />
                   Other     
               </div>
               <div>
                   Skills: <br/>
                   <input
                        type='checkbox'
                        name='skills'
                        value='Java'
                        checked={skills.includes('Java')}
                        onChange={this.handleSkillChange}
                   />
                   Java
                   <input
                        type='checkbox'
                        name='skills'
                        value='Javascript'
                        checked={skills.includes('Javascript')}
                        onChange={this.handleSkillChange}
                   />
                   Javascript
                   <input
                        type='checkbox'
                        name='skills'
                        value='Python'
                        checked={skills.includes('Python')}
                        onChange={this.handleSkillChange}
                   />
                   Python
                   <input
                        type='checkbox'
                        name='skills'
                        value='GoLang'
                        checked={skills.includes('GoLang')}
                        onChange={this.handleSkillChange}
                   />
                   GoLang
               </div>
               <div>
                   <input
                        type='checkbox'
                        name='agree'
                        checked={agree}
                        onChange={this.handleCheckBox}
                   />
                   I agree to all the terms and conditions
               </div>
               <br/>
               <button onClick={()=> console.log(this.state)}>
                   Show data
               </button>

            </div>
        )
    }
}

export default Inputs;