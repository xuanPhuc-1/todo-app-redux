import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useSelector } from "react-redux";
import { filterTodoListSelector } from "../../redux/selectors";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [todoPriority, setTodoPriority] = useState("Medium");
  const todoList = useSelector(filterTodoListSelector);
  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    // dispatch action
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: todoPriority,
      })
    );
    setTodoName(""); // Reset lại giá trị của todoName
    setTodoPriority("Medium"); // Reset lại giá trị của todoPriority
  };
  const handdleInputChange = (e) => {
    setTodoName(e.target.value); // Cập nhật giá trị của todoName
  };
  const handleSelectChange = (value) => {
    // Vì ở các thẻ đã có set sẵn các giá trị cho value nên ta chỉ cần truyền vào hàm handleSelectChange là sẽ nhận được giá trị của value
    setTodoPriority(value); // Cập nhật giá trị của todoPriority
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" /> */}
        {todoList.map((todo) => (
          <Todo key={todo.id} name={todo.name} prioriry={todo.priority} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handdleInputChange} />
          <Select
            defaultValue="Medium"
            value={todoPriority}
            onChange={handleSelectChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
