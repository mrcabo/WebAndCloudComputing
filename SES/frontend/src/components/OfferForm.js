import React from 'react';
import { Form, Input, Button } from 'antd';
import * as actions from '../store/actions/auth';
import axios from 'axios';

const FormItem = Form.Item;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function reload() {
    await sleep(100);
    window.location.reload()
}
class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, offerID) => {
        event.preventDefault();
        const price = event.target.elements.price.value;
        const amount = event.target.elements.amount.value;
        const user = actions.getUsername()
        const user_id = actions.getUserID()

                axios.post('http://35.204.253.189/api/createoffer', {
                    user: user,
                    user_id: user_id,
                    price: price,
                    amount: amount
                })
                reload();
        
    }

    render() {
        return (
        <div>
            <h3>Create Offer</h3>
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