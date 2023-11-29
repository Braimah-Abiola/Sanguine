import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectSize = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select size" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="sm">Small</SelectItem>
          <SelectItem value="md">Medium</SelectItem>
          <SelectItem value="lg">Large</SelectItem>
          <SelectItem value="xl">Extra Large</SelectItem>
          <SelectItem value="xxl">Extra Extra Large</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectSize;
