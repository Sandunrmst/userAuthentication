import { Input } from "../ui/input";

function CommonFormElement({ currentItem, value, onChange }) {
  let content = null;

  switch (currentItem.componetType) {
    case "input":
      content = (
        <Input
          name={currentItem.name}
          id={currentItem.name}
          placeholder={currentItem.placeholder}
          value={value}
          onChange={onChange}
        />
      );
      break;
    default:
      content = (
        <Input
          name={currentItem.name}
          id={currentItem.name}
          placeholder={currentItem.placeholder}
          value={value}
          onChange={onChange}
        />
      );
      break;
  }

  return content;
}

export default CommonFormElement;
