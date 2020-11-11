import FlatMockData from './FlatMockData'

export const nodes = FlatMockData.nodes.filter(node => {
    return node.show.toLowerCase() === "yes"
})

export default {
nodes,
};
