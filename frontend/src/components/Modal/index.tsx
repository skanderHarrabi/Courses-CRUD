import React from "react";
import {Button, Modal, Input, Form, Select} from "antd";
import API, {Course} from "../../API";
import type {SelectProps} from "antd";

// Types
type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (param: boolean) => void;
  course?: Course;
  isCreateCourse: boolean;
  onFinish: (values: Course) => void;
};

const {Option} = Select;

const CreateEditModal: React.FC<Props> = ({
  isModalOpen,
  setIsModalOpen,
  course,
  isCreateCourse,
  onFinish,
}) => {
  const options: SelectProps["options"] = !isCreateCourse
    ? []
    : course &&
      course.members.map((course) => ({label: course, value: course}));

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  type FieldType = {
    name: string;
    members: string[];
    coachID: string;
    description: string;
  };

  return (
    <>
      <div className="modal_wrapper">
        <Modal
          title={isCreateCourse ? "Add Course" : "Edit Course"}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <Form
            name="basic"
            labelCol={{span: 5}}
            labelAlign="left"
            initialValues={{remember: true}}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="name"
              name="name"
              initialValue={!isCreateCourse ? course?.name : undefined}
              rules={[{required: true, message: "Please input your name!"}]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="description"
              name="description"
              initialValue={!isCreateCourse ? course?.description : undefined}
              rules={[
                {required: true, message: "Please input your description!"},
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="members"
              name="members"
              initialValue={!isCreateCourse ? course?.members : undefined}
              rules={[{required: true, message: "Please input your members!"}]}
            >
              <Select
                mode="tags"
                style={{width: "100%"}}
                tokenSeparators={[","]}
              />
            </Form.Item>
            <Form.Item<FieldType>
              label="coachID"
              name="coachID"
              initialValue={!isCreateCourse ? course?.coachID : undefined}
              rules={[{required: true, message: "Please input your coachID!"}]}
            >
              <Select>
                <Option value="Coach1">Coach1</Option>
                <Option value="Coach2">Coach2</Option>
              </Select>
            </Form.Item>
            <Form.Item style={{textAlign: "center"}}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default CreateEditModal;
