const viewMocks = import.meta.globEager('../src/views/**/mock.js');

const list = [];
_.forEach(viewMocks, (value) => {
  list.push(value.default);
});

const mockApis = [];
list.forEach((apiFile) => {
  for (const item of apiFile) {
    mockApis.push({
      ...item,
      timeout: 1000,
    });
  }
});

export default mockApis;
