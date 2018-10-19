import React from 'react';
import { Form, Input, Button } from 'antd';
import * as actions from '../store/actions/auth';
import axios from 'axios';

const FormItem = Form.Item;

class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, offerID) => {
        const price = event.target.elements.price.value;
        const amount = event.target.elements.amount.value;
        const user = actions.getUsername()
        const user_id = actions.getUserID()

        switch ( requestType ) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/createoffer', {
                    user: user,
                    user_id: user_id,
                    price: price,
                    amount: amount
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${offerID}/`, {
                    price: price,
                    amount: amount
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
        }
    }

    render() {
        return (
        <div>
            <Form onSubmit={(event) => this.handleFormSubmit(
                event,
                this.props.requestType,
                this.props.offerID )}>
            <FormItem label="Price" >
                <Input name="price" placeholder="Enter the price" />
            </FormItem>
            <FormItem label="Amount" >
                <Input name="amount" placeholder="Enter the amount of enery" />
            </FormItem>
            <FormItem>
                <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
            </FormItem>
            </Form>
        </div>
        );
    }
}

export default CustomForm;