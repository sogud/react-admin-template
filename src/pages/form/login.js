import React, { Component } from 'react'
import { Card, Form, Input } from 'antd'
const FormItem = Form.Item
export default class login extends Component {
  render() {
    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名" />
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
