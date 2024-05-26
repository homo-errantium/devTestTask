import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const { TextArea } = Input;

class CodeEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    checkFunction(func, value) {
        if (func) {
            if (value) func(value);
            else func();
        }
    }

    onChange = (e) => {
        const value = e.target.value;
        this.setState({ value });
        this.checkFunction(this.props.onChange, value);
    };

    onBlur = () => {
        this.checkFunction(this.props.onBlur, this.state.value);
    };

    render() {
        const { className, style } = this.props;
        const { value } = this.state;

        return (
            <TextArea
                rows={4}
                ref={this.props.inputRef}
                value={value}
                onChange={this.onChange}
                onBlur={this.onBlur}
                className={className}
                style={style}
            />
        );
    }
}
  
  CodeEditor.propTypes = {
      className: PropTypes.string,
      style: PropTypes.any,
      inputRef: PropTypes.any,
      onChange: PropTypes.func,
      onBlur: PropTypes.func,
  };

export default CodeEditor
