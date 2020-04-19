import { renderLine, renderbaseNode } from './graphItem';
import { NodeType } from '@/@types/NodeType';
const renderItem = (initState: NodeType.stateType) => {
  renderLine(initState);
  renderbaseNode(initState);
};

export default renderItem;
