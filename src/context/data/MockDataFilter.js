import MockData from './MockData'

export const nodes = MockData.nodes.filter(node => {
        return node.lowest.toLowerCase() === "yes"
      });
  export const links = MockData.links.filter(link => {
      return link.lowest.toLowerCase() === "yes"
  });
  
  export default {
    nodes,
    links,
  };
  