import React from 'react';
import PropTypes from 'prop-types';
import { formatCharsInput } from './maskFormat';
import CodeEditor from './CodeEditor';
import maskIsValid from './maskValidator';
import MaskedInput from 'react-input-mask';
import cn from 'classnames';
import _ from 'lodash';

import * as styles from './styles.css';

import { Input, InputNumber, Select } from 'antd';

const { TextArea } = Input;
const { Option, OptGroup } = Select;

class TextInputWithActions extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.state = {
            actionsWidth: 0,
            value: this.props.value,
            oldValue: '',
        };
    }

    recalcActionsWidth() {
        if (!this.actionsNode) {
            return;
        }

        const actionsWidth = this.actionsNode.clientWidth;
        if (actionsWidth !== this.state.actionsWidth) {
            this.setState({
                actionsWidth,
            });
        }
    }

    setFocus = () => {
        if (this.props.autoFocus) {
            this.input.current.focus();
        }
    };

    componentDidMount() {
        this.recalcActionsWidth(); //желательно использовать useCallback для предотвращения повторного рендеринга 
        this.setFocus();
        this.setState({
            value: localStorage.getItem(this.props.id)
                ? localStorage.getItem(this.props.id)
                : this.props.value,
        });
    }

    componentDidUpdate() {
        this.recalcActionsWidth();
    }

    onChange = (e) => {
        const value = e.target.value;
        this.setValue(value);
    };

    setValue = (value) => {
        this.setState({ value });
        this.onChangeDebounce(value);
        localStorage.setItem(this.props.id, value);
    };

    checkReadOnly = () => {
        if (this.props.readOnly) {
            return;
        }
    };

    onBlur = (e) => {
        this.checkReadOnly();
        const value = e.target.value;
        this.setBlur(value);
    };

    onBlurSelect = () => {
        this.checkReadOnly();
        this.setBlur(this.state.value);
    };

    onChangeNumber = (value) => {
        value = this.props.prepareNumber
            ? this.props.prepareNumber(value)
            : value;
        this.setValue(value);
    };

    onBlurNumber = (e) => {
        this.checkReadOnly();
        let value = e.target.value;
        value = this.checkPrepareNumber(value);
        if (value || this.state.oldValue !== '') {
            this.setBlur(value);
        }
    };

    setBlur = (value) => {
        this.setState({ value });
        this.onChangeDebounceCancel();
        this.props.onChange && this.props.onChange(value);
        if (_.isNumber(value) && value !== this.state.oldValue)
            this.props.onEndEditing && this.props.onEndEditing(value);
        this.setState.oldValue = value;
    };

    onChangeDebounce = (value) => {
        this.onChangeDebounceCancel();
        this.changeTimer = setTimeout(() => {
            this.props.onChange && this.props.onChange(value);
        }, 200);
    };

    onChangeDebounceCancel = () => {
        clearTimeout(this.changeTimer);
    };

    onKeyDown = (e) => {
        this.props.onKeyDown && this.props.onKeyDown(e);

        if (!this.props.allowTabs) {
            return;
        }

        if (e.key === 'Tab' && !e.shiftKey) {
            e.preventDefault();
            document.execCommand('insertText', false, '\t');
            return false;
        }
    };

    onChangeMasked = (e) => {
        let { mask } = this.props;
        const value = e.target.value;

        if (value === mask.replace(/[^-]/g, '_')) {
            this.setValue('');
        } else {
            this.setValue(value);
        }
        localStorage.setItem(this.props.id, value);
    };

    getPlaceHolderMask = (mask) => {
        const charsEditableMask = _.keys(formatCharsInput).join('');
        let placeholder = '';
        let shielding = false;

        for (let i = 0; i < mask.length; i++) {
            if (shielding) {
                shielding = false;
                placeholder += mask[i];
                continue;
            }

            if (mask[i] == '\\') {
                shielding = true;
                continue;
            }

            if (charsEditableMask.includes(mask[i])) {
                placeholder += '_';
                continue;
            }

            placeholder += mask[i];
        }

        return placeholder;
    };

    renderSelectOption = (o, index) => {
        return (
            <Option key={`${o.value}-${index}`} value={o.value} label={o.label}>
                {o.label}
                {o.subLabel && (
                    <span className={styles.optionSubLabel}>{o.subLabel}</span>
                )}
            </Option>
        );
    };

    createControl = (inputStyle) => {
        const {
            className,
            style,
            type,
            theme,
            multiline,
            script,
            minRows = 1,
            maxRows = 20,
            config,
            subType,
            mask,
            options,
            ...props
        } = this.props;


        let inputCN = cn(className, {
            [styles.inputReadOnly]: this.props.readOnly,
            [styles[theme]]: !!theme,
            [styles.readOnly]: this.props.readOnly,
        });
        
const value =
this.state.value || this.state.value === 0 ? this.state.value : '';

        
        switch (true) {
            case type === 'number':
                if (this.props.readOnly) {
                    return (
                        <span className={inputCN}>
                            {this.props.formatter &&
                                this.props.formatter(value)}
                        </span>
                    );
                } else {
                    return (
                        <InputNumber
                            ref={this.input}
                            onKeyDown={this.onKeyDown}
                            className={inputCN}
                            value={this.state.value}
                            onChange={this.onChange}
                            onBlur={this.onBlurNumber}
                            style={style}
                            {...props}
                        />
                    );
                }
            case mask ? true : false:
                return (
                    <MaskedInput
                        formatChars={formatCharsInput}
                        onKeyDown={this.onKeyDown}
                        mask={mask}
                        {...props}
                        placeholder={this.getPlaceHolderMask(mask)}
                        value={this.state.value}
                        style={inputStyle}
                        className={inputCN}
                        onChange={this.onChangeMasked}
                        onBlur={this.onBlur}
                        disabled={this.props.readOnly}
                    >
                        {(inputProps) => (
                            <Input {...inputProps} ref={this.input} />
                        )}
                    </MaskedInput>
                );
            case script ? true : false:
                return (
                    <CodeEditor
                        ref={this.input}
                        {...props}
                        value={value}
                        style={inputStyle}
                        className={inputCN}
                        onChange={this.setValue}
                        onBlur={this.setBlur}
                        subType={subType}
                        rows={config.get('rows')}
                    />
                );
            case options ? true : false: {
                inputStyle = _.assign(inputStyle, { width: '100%' });
                const valueInOptions = _.some(options, (o) => {
                    if (o.value === value) {
                        return true;
                    }
                    if (
                        o.options &&
                        _.some(o.options, (o) => o.value === value)
                    ) {
                        return true;
                    }
                });
                if (!valueInOptions && value) {
                    inputCN = cn(inputCN, styles.invalidValue);
                }
                return (
                    <Select
                        ref={this.input}
                        {...props}
                        className={inputCN}
                        style={inputStyle}
                        value={value}
                        onChange={this.setValue}
                        onBlur={this.onBlurSelect}
                        onInputKeyDown={this.onKeyDown}
                        showSearch={true}
                        variant={'borderless'}
                        // showArrow={false}
                        popupMatchSelectWidth={300}
                        filterOption={(input, option) =>
                            (option.label || '')
                                .toLowerCase()
                                .includes(input.toLowerCase())
                        }
                    >
                        {options.map((o, index) => {
                            if (_.isArray(o.options)) {
                                return (
                                    <OptGroup
                                        key={`${o.value}-${index}`}
                                        label={o.label}
                                        style={{ width: '30%' }}
                                    >
                                        {o.options.map((o) => {
                                            return this.renderSelectOption(o);
                                        })}
                                    </OptGroup>
                                );
                            } else {
                                return this.renderSelectOption(o, index);
                            }
                        })}
                    </Select>
                );
            }
            case multiline ? true : false:
                return (
                    <TextArea
                        ref={this.input}
                        {...props}
                        value={value}
                        spellCheck='false'
                        rows={4}
                        autoSize={{
                            minRows: props.readOnly ? 1 : minRows,
                            maxRows: maxRows,
                        }}
                        className={cn(inputCN, styles.textArea)}
                        onChange={this.onChange}
                        onBlur={this.onBlur}
                        onKeyDown={this.onKeyDown}
                    />
                );
            case this.props.children ? true : false:
                return (
                    <div
                        style={inputStyle}
                        className={cn('ant-input', inputCN)}
                    >
                        {this.props.children}
                    </div>
                );
            default:
                return (
                    <Input
                        ref={this.input}
                        {...props}
                        config={config}
                        value={value}
                        style={inputStyle}
                        className={inputCN}
                        onChange={this.onChange}
                        onBlur={this.onBlur}
                        onKeyDown={this.onKeyDown}
                    />
                );
        }
    };

    render() {
        const {
            // eslint-disable-next-line no-unused-vars
            onEndEditing,
            wrapperClassName,
            style,
            actionsClassName,
            actions,
            type,
            multiline,
            ...otherProps
        } = this.props;

        let { mask } = otherProps;

        mask = mask && maskIsValid(mask) ? mask : undefined;

        const textInputContainer =
            type === 'number' ? '' : styles.textInputContainer;

        const containerCN = cn(wrapperClassName, textInputContainer, {
            [styles.inputMask]: !multiline && !!mask,
        });

        let actionsCN;

        const { actionsWidth } = this.state;
        let inputStyle = _.assign({}, style);
        const actionsStyle = {};
        // const { onChange, ...numberProps } = this.props;
        actionsCN = styles.inputWithActions;

        if (!actions || actions.length == 0) {
            actionsStyle.visibility = 'hidden';
        } else if (actionsWidth) {
            inputStyle.paddingRight = actionsWidth;
        }

        let control = this.createControl(inputStyle);

        return (
            <div className={containerCN}>
                {control}
                {(actions && actions.length && (
                    <ul
                        className={cn(actionsClassName, actionsCN)}
                        ref={(node) => (this.actionsNode = node)}
                        style={actionsStyle}
                    >
                        {actions.map((node, i) => (
                            <li key={i}>{node}</li>
                        ))}
                    </ul>
                )) ||
                    null}
            </div>
        );
    }
}

TextInputWithActions.propTypes = {
    options:PropTypes.any,
    id: PropTypes.string,
    checkFunction: PropTypes.func,
    maxRows: PropTypes.number,
    minRows: PropTypes.number,
    config: PropTypes.any,
    theme: PropTypes.string,
    subType: PropTypes.string,
    type: PropTypes.string,
    actionsClassName: PropTypes.string,
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
    script: PropTypes.any,
    actions: PropTypes.any,
    multiline: PropTypes.any,
    mask: PropTypes.any,
    value: PropTypes.any,
    children: PropTypes.any,
    style: PropTypes.any,
    allowTabs: PropTypes.bool,
    inputRef: PropTypes.any,
    autoFocus: PropTypes.func,
    prepareNumber: PropTypes.func,
    onChange: PropTypes.func,
    onEndEditing: PropTypes.func,
    onKeyDown: PropTypes.func,
    formatter: PropTypes.func,
    readOnly: PropTypes.bool,
    isAdditional: PropTypes.bool,
};


export default TextInputWithActions;
