import React, { PureComponent } from 'react';

class AddForm extends PureComponent {
    inputRef = React.createRef();

    handleAdd = (e) =>{
        e.preventDefault();
        this.props.addForm(this.inputRef.current.value);
        this.inputRef.current.value = '';
    }

    render() {
        return (
            <form className="AddForm">
                <input ref={this.inputRef} type="text" className="AddForm-input" placeholder="이곳에 입력하세요."></input>
                <button className="AddForm-btn" onClick={this.handleAdd}>추가</button>
            </form>
        );
    }
}

export default AddForm;