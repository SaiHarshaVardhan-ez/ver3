import { useDrop } from "react-dnd";

const ItemTypes = {
  FEATURE: 'feature'
};

const DropZone = ({ onDrop, children,className }) => {
  const [, ref] = useDrop({
    accept: ItemTypes.FEATURE,
    drop: (item) => onDrop(item)
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default DropZone