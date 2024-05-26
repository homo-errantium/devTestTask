/* eslint-disable no-unused-vars */

import React from "react";
import cn from "classnames";
import PropTypes from 'prop-types';
import TextInputWithActions from './TextInputWithActions';

import * as styles from "./styles.css";

class UniversalInput extends React.Component {
    state = {
        shouldProcess: false,
    }
      
    // checkFunction = (func, value) => {
    //     if (func) {
    //         if (value) { func(value)}
    //         else func();
    //     }
    // };

    // changeShouldProcess = (boolean) => {
    //   this.setState({ shouldProcess: boolean });
    // };

    onChange = value => {
        this.props.onChange && this.props.onChange(value);
        this.props.eventable && this.setState({ shouldProcess: true });
      
    };

    onEndEditing = value => {
        this.props.onEndEditing && this.props.onEndEditing(value);
        this.setState({ shouldProcess: false });
    };

    render() {
        //этих аргументов нет в пропс
            const {
                updateProcess,
                eventable,
                actions,
                // onEndEditing,
                t,
                ...props
        } = this.props;
        
        let { shouldProcess } = this.state;

        const inProcess = updateProcess && updateProcess.get('inProcess');
        
        const newActions = [...(actions || [])];
        
        if (shouldProcess || inProcess) {
            newActions.push(
                <span
                    className={cn(styles.actionIcon, {
                        [styles.actionIconGray]: inProcess,
                    })}
                    title={inProcess ? '' : 'ready to send'}
                ></span>
            );
        }

        return (
            <TextInputWithActions
                {...props}
                // onEndEditing={this.onEndEditing}
                onChange={this.onChange}
                actions={newActions}
            />
        );
    }
}

UniversalInput.propTypes = {
        t: PropTypes.any,
        id: PropTypes.string,
      onEndEditing: PropTypes.func,
      actions: PropTypes.array,
      updateProcess: PropTypes.func,
      onChange: PropTypes.func,
      eventable: PropTypes.any, // bool?
  };
export default UniversalInput
