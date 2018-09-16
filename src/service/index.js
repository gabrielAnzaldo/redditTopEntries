import data from './mock-data.json';

const getTopReddits = () => new Promise(resolve => resolve(data.data.children));

export default getTopReddits;
